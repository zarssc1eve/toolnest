export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    return res.status(503).json({ error: 'Tambahkan SUPABASE_URL dan SUPABASE_ANON_KEY di Vercel Environment Variables.' });
  }
  if (!/^https:\/\//i.test(url) || /service_role|secret/i.test(anonKey)) {
    return res.status(500).json({ error: 'Konfigurasi Supabase tidak valid. Gunakan Publishable/anon key, bukan secret/service role key.' });
  }
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ url, anonKey });
}
