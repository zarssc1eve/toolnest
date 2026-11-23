export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'Backend belum dikonfigurasi: tambahkan OPENAI_API_KEY di Vercel Environment Variables.' });
  }

  const { prompt, system } = req.body || {};
  if (typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'Prompt wajib diisi.' });
  }
  if (prompt.length > 12000 || (typeof system === 'string' && system.length > 4000)) {
    return res.status(413).json({ error: 'Teks terlalu panjang. Kurangi panjang prompt.' });
  }

  // Endpoint dan model hanya diatur di server, bukan oleh browser pengguna.
  const baseUrl = (process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '');
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

  try {
    const upstream = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: typeof system === 'string' && system.trim() ? system.trim() : 'You are a helpful assistant.' },
          { role: 'user', content: prompt.trim() }
        ]
      })
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      const message = data?.error?.message || `Penyedia AI mengembalikan status ${upstream.status}.`;
      return res.status(upstream.status >= 400 && upstream.status < 600 ? upstream.status : 502).json({ error: message });
    }

    const text = data?.choices?.[0]?.message?.content;
    if (typeof text !== 'string' || !text.trim()) {
      return res.status(502).json({ error: 'Penyedia AI tidak mengirim teks hasil.' });
    }
    return res.status(200).json({ text });
  } catch (error) {
    return res.status(502).json({ error: 'Tidak dapat menghubungi penyedia AI. Periksa konfigurasi backend.' });
  }
}
