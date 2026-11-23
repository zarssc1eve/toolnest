TOOLNEST - PROFILE, USAGE LIMIT, VIP TOOLS & SCRIPT LIBRARY

FITUR BARU
1. Usage limit harian:
   - Guest / belum login: 10 kali membuka tools per hari.
   - Akun FREE: 40 kali membuka tools per hari.
   - Akun VIP: tanpa batas harian.
   - Kuota dihitung di browser (LocalStorage) dan reset otomatis berdasarkan tanggal lokal perangkat.
2. Profile customization:
   - Nama tampilan, bio singkat, avatar emoji/karakter, dan warna avatar.
3. VIP tools tambahan:
   - SEO Meta Generator
   - JSON Schema Generator
   - UTM Link Builder
   - SQL Query Builder
   - Text Diff Pro
4. Kategori Scripts:
   - Scripts sekarang tampil sejajar dengan Utility, Finance, Developer, dan kategori utama lainnya.
   - Klik Scripts untuk melihat kartu-kartu file yang tersedia; klik salah satu kartu lalu tekan Download Script.
   - Kategori Script Download Library yang terpisah sudah dihapus.

CARA MENAMBAHKAN SCRIPT DOWNLOAD
1. Buka toolnest-backend/index.html.
2. Cari teks: const DOWNLOAD_SCRIPTS=[
3. Tepat di bawahnya, tambahkan item dengan format:
   {
     name: 'Login UI HTML',
     category: 'HTML',
     file: 'login-ui.html',
     type: 'text/html;charset=utf-8',
     vip: true,
     content: `<!-- Tempel isi file HTML kamu di sini -->`
   },
4. Properti category menentukan label jenis script, misalnya 'HTML', 'CSS', 'JavaScript', 'Python', atau 'Lainnya'. Semua item akan muncul di kategori utama Scripts.
5. Untuk file JavaScript gunakan type 'text/javascript;charset=utf-8'.
   Untuk CSS gunakan 'text/css;charset=utf-8'.
   Untuk TXT gunakan 'text/plain;charset=utf-8'.
6. Jika vip:true, hanya akun VIP yang bisa melihat dan mengunduh file tersebut.
   Jika vip:false, file bisa diunduh semua pengguna.
7. Simpan index.html, commit ke GitHub, lalu deploy ulang di Vercel.

CATATAN PENTING
- Usage limit dan login saat ini masih berbasis LocalStorage/client-side. Ini berguna sebagai pembatas pemakaian normal, tetapi bukan proteksi anti-bypass. Untuk penegakan kuota yang aman lintas perangkat, pindahkan counter ke API/backend dan gunakan autentikasi server.
- Status VIP yang ada tetap mengikuti sistem Toolnest sebelumnya. Jangan anggap LocalStorage sebagai sistem pembayaran atau autentikasi produksi.
- Script yang kamu tambahkan akan menjadi konten HTML/JS di file situs. Jangan menaruh password, API key rahasia, token, atau data pribadi di dalam script yang bisa diunduh publik.
- AI Text Generator / AI Chat with PDF tetap membutuhkan Environment Variable sesuai konfigurasi backend sebelumnya.

DEPLOY
Upload isi folder toolnest-backend ke root repository GitHub, import repository ke Vercel, lalu deploy.
