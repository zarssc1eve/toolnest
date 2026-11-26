TOOLNEST — AI HD ENHANCER GRATIS (BROWSER-SIDE REAL-ESRGAN)

PERUBAHAN
- AI HD Image Enhancer kini menggunakan Real-ESRGAN ONNX yang berjalan langsung di browser pengguna.
- Foto tidak dikirim ke API Toolnest, Replicate, atau server pemrosesan gambar.
- Tidak membutuhkan REPLICATE_API_TOKEN atau API key AI lain.
- Model ONNX (~4.9 MB) dan ONNX Runtime Web dimuat dari CDN saat pertama kali fitur digunakan. Koneksi internet tetap diperlukan untuk mengunduh runtime/model.
- Output 4x menggunakan model Real-ESRGAN General x4. Pilihan 2x dibuat dengan downsampling hasil 4x.
- Foto input dibatasi 15 MB dan diperkecil hingga sisi terpanjang 512 px agar lebih ramah perangkat, khususnya HP.
- Fitur tetap ditandai VIP di antarmuka Toolnest. Karena pemrosesan berlangsung sepenuhnya di browser statis, kunci VIP ini adalah pembatasan antarmuka, bukan proteksi server-side yang tidak dapat dimodifikasi pengguna teknis.

SETUP VERCEL / API KEY
1. Tidak perlu membuat API key Replicate, Hugging Face, atau API AI lainnya.
2. Hapus REPLICATE_API_TOKEN dari Vercel Environment Variables jika sebelumnya ditambahkan khusus untuk fitur ini (opsional; tidak lagi dibaca oleh kode).
3. Jangan hapus SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, atau konfigurasi Supabase lain yang digunakan fitur Toolnest lainnya.
4. Upload isi ZIP ini ke repository GitHub dengan mengganti file yang sama dan menghapus api/image-enhance.js yang lama.
5. Commit/push, lalu tunggu Vercel selesai deploy.
6. Buka Toolnest, login dengan akun VIP, pilih AI HD Image Enhancer, unggah gambar, pilih 2x/4x, lalu proses.

CATATAN TEKNIS
- Model: Real-ESRGAN General x4v3 ONNX dari openpixels-app/browser-models (lisensi model BSD-3-Clause).
- Model dimuat dari Hugging Face dan runtime dari jsDelivr. Jika CDN tidak dapat diakses, fitur tidak dapat memuat model.
- Pemrosesan dilakukan pada CPU/WASM atau WebGPU jika didukung browser. Performa bergantung pada perangkat dan browser.
- Model AI melakukan rekonstruksi detail yang tampak masuk akal; hasil bukan pemulihan detail asli yang pasti.
- Face enhancement khusus tidak disediakan dalam versi browser ringan ini.
- Jangan memproses foto pribadi/sensitif atau foto orang lain tanpa izin.
- API image-enhance.js lama dihapus karena tidak lagi digunakan. Endpoint API lain tetap dipertahankan.

Sumber model dan lisensi: https://huggingface.co/openpixels-app/browser-models
Real-ESRGAN upstream: https://github.com/xinntao/Real-ESRGAN
