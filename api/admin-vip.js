const json = (res, status, body) => res.status(status).json(body);
const base = () => (process.env.SUPABASE_URL || '').replace(/\/$/, '');
const service = () => process.env.SUPABASE_SERVICE_ROLE_KEY;
async function sb(path, options = {}) {
  const r = await fetch(`${base()}${path}`, {
    ...options,
    headers: {
      apikey: service(),
      Authorization: `Bearer ${service()}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.message || data.msg || data.error_description || `Supabase error ${r.status}`);
  return data;
}
export default async function handler(req, res) {
  if (!['GET', 'POST'].includes(req.method)) {
    res.setHeader('Allow', 'GET, POST');
    return json(res, 405, { error: 'Method not allowed.' });
  }
  const url = base(), key = service();
  if (!url || !key) return json(res, 503, { error: 'Tambahkan SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY di Vercel.' });
  const token = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return json(res, 401, { error: 'Login diperlukan.' });
  try {
    const userRes = await fetch(`${url}/auth/v1/user`, {
      headers: { apikey: key, Authorization: `Bearer ${token}` }
    });
    if (!userRes.ok) return json(res, 401, { error: 'Session tidak valid. Silakan login ulang.' });
    const user = await userRes.json();
    const own = await sb(`/rest/v1/profiles?id=eq.${encodeURIComponent(user.id)}&select=role`);
    if (!own[0] || own[0].role !== 'admin') return json(res, 403, { error: 'Akses khusus admin.' });

    const authUsers = await sb('/auth/v1/admin/users?page=1&per_page=1000');
    const list = authUsers.users || [];
    if (req.method === 'GET') {
      const profiles = await sb('/rest/v1/profiles?select=id,display_name,role,vip_until&order=created_at.desc');
      const byId = new Map(list.map(x => [x.id, x.email]));
      return json(res, 200, { users: profiles.map(p => ({ ...p, email: byId.get(p.id) || '' })) });
    }
    const body = req.body || {};
    const email = String(body.email || '').trim().toLowerCase();
    const days = Number(body.days);
    if (!/^\S+@\S+\.\S+$/.test(email) || !Number.isInteger(days) || days < 0 || days > 3650) {
      return json(res, 400, { error: 'Email atau jumlah hari tidak valid (0–3650).' });
    }
    const target = list.find(x => String(x.email || '').toLowerCase() === email);
    if (!target) return json(res, 404, { error: 'Akun dengan email tersebut belum terdaftar.' });
    if (target.id === user.id) return json(res, 400, { error: 'Admin tidak perlu mengubah status VIP akunnya sendiri.' });
    const until = days === 0 ? null : new Date(Date.now() + days * 86400000).toISOString();
    await sb(`/rest/v1/profiles?id=eq.${encodeURIComponent(target.id)}`, {
      method: 'PATCH',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify({ vip_until: until, updated_at: new Date().toISOString() })
    });
    return json(res, 200, { ok: true, email, vip_until: until });
  } catch (error) {
    console.error('Admin VIP API:', error);
    return json(res, 500, { error: 'Gagal memproses admin VIP. Periksa konfigurasi dan struktur database Supabase.' });
  }
}
