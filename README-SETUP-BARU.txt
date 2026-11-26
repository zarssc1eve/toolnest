TOOLNEST AI UHD INTEGRATED

Fitur AI UHD sekarang tertanam langsung di halaman Toolnest. Tidak ada Hugging Face Space, Gradio, backend GPU, atau API key yang perlu dibuat.

Cara pasang:
1. Ganti index.html di repository Toolnest dengan file dari ZIP ini.
2. Pertahankan api/admin-vip.js, api/config.js, api/generate.js dan package.json.
3. Commit ke GitHub dan tunggu Vercel deploy.
4. Login VIP, buka kategori Image > AI UHD Enhancer (Gratis).
5. Pilih gambar dan jalankan Tingkatkan ke UHD.

Teknologi: Transformers.js 3.7.2 + Xenova Swin2SR Real-World x4 BSRGAN-PSNR (ONNX). Model diunduh dari Hugging Face saat pertama dipakai. Tidak ada API key dan gambar diproses di browser pengguna.

Catatan: model AI besar dan prosesnya berat. Perangkat Android kelas bawah dapat lambat atau kehabisan memori. Maksimal upload 12 MB. 4x adalah keluaran native model; 2x dibuat dari keluaran AI 4x yang diturunkan ukurannya. Ini super-resolution sungguhan, tetapi bukan jaminan kualitas setara layanan cloud komersial.
