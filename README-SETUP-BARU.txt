TOOLNEST AI UHD — BROWSER-BASED GRATIS

Perubahan:
- Menghapus integrasi Hugging Face ZeroGPU/Gradio yang memerlukan Space khusus dan bisa memiliki antrean/kuota.
- Mengganti kartu AI UHD menjadi pintasan ke Pixelvaerk, aplikasi open-source Swin2SR yang berjalan langsung di browser.
- Tidak membutuhkan API key, token, server GPU, atau environment variable baru.
- Gambar diproses di browser aplikasi tujuan; tidak dikirim ke backend Toolnest.

Pemasangan:
1. Ganti index.html di repository Toolnest dengan file dari ZIP ini.
2. Jangan hapus atau ubah file Supabase/API lainnya.
3. Commit ke GitHub dan tunggu Vercel deploy.
4. Login VIP, buka AI UHD Enhancer, lalu klik Buka AI UHD Gratis.

Penting:
- Ini membuka aplikasi Pixelvaerk di tab baru, bukan menanam mesin inferensi ke dalam halaman Toolnest.
- Model diunduh pertama kali. Kecepatan bergantung pada browser, RAM, dan GPU perangkat. HP kelas bawah mungkin lambat atau tidak kuat memproses gambar besar.
- Ini benar-benar tidak memakai API key dan tidak ada biaya per gambar dari Toolnest, tetapi bukan layanan cloud GPU gratis tanpa batas.
- Pixelvaerk menyatakan memakai Swin2SR real-world x4 PSNR; 4x merupakan neural super-resolution. 2x/ukuran lain dapat melibatkan pengubahan ukuran dari hasil model.
- Jangan mengunggah gambar pribadi/sensitif ke layanan pihak ketiga tanpa izin.

Situs: https://cc-bit87.github.io/pixelvaerk-upscaler/
Repositori dan lisensi: https://github.com/CC-bit87/pixelvaerk-upscaler (MIT).
