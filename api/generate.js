export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      error: 'Method not allowed.'
    });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return res.status(503).json({
      error: 'Backend belum dikonfigurasi: tambahkan OPENROUTER_API_KEY di Vercel Environment Variables.'
    });
  }

  const { prompt, system } = req.body || {};

  if (typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({
      error: 'Prompt wajib diisi.'
    });
  }

  if (
    prompt.length > 12000 ||
    (typeof system === 'string' && system.length > 4000)
  ) {
    return res.status(413).json({
      error: 'Teks terlalu panjang. Kurangi panjang prompt.'
    });
  }

  const baseUrl = 'https://openrouter.ai/api/v1';
  const model =
    process.env.OPENROUTER_MODEL ||
    'baidu/ernie-5.5-flash-preview:free';

  try {
    const upstream = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://toolnest-zrss.vercel.app',
        'X-Title': 'Toolnest'
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content:
              typeof system === 'string' && system.trim()
                ? system.trim()
                : 'You are a helpful AI assistant.'
          },
          {
            role: 'user',
            content: prompt.trim()
          }
        ]
      })
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      const message =
        data?.error?.message ||
        `OpenRouter mengembalikan status ${upstream.status}.`;

      return res.status(502).json({
        error: message
      });
    }

    const result = data?.choices?.[0]?.message?.content;

    if (typeof result !== 'string' || !result.trim()) {
      return res.status(502).json({
        error: 'AI tidak mengirimkan hasil. Silakan coba lagi.'
      });
    }

    return res.status(200).json({
      text: result
    });

  } catch (error) {
    console.error('OpenRouter Error:', error);

    return res.status(502).json({
      error: 'Tidak dapat menghubungi OpenRouter. Periksa koneksi atau konfigurasi backend.'
    });
  }
}
