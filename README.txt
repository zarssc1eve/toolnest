TOOLNEST — BUILD DENGAN SUPABASE

Isi ZIP:
- index.html: tampilan dan tools Toolnest; login/profil terhubung ke Supabase.
- api/generate.js: backend AI OpenRouter lama (dipertahankan).
- api/config.js: mengirim URL + publishable key Supabase ke frontend.
- api/admin-vip.js: API server untuk pengelolaan VIP khusus admin.
- SUPABASE_MIGRATION.sql: perubahan struktur database yang perlu dijalankan.

LANGKAH SETUP

1. Jalankan SQL
   - Buka Supabase Dashboard > SQL Editor.
   - Buka file SUPABASE_MIGRATION.sql, salin seluruh isinya, lalu Run.

2. Environment Variables di Vercel
   - SUPABASE_URL = Project URL Supabase.
   - SUPABASE_ANON_KEY = Publishable key (atau anon key lama). Jangan gunakan secret/service_role di sini.
   - SUPABASE_SERVICE_ROLE_KEY = Secret/service_role key Supabase. Hanya untuk server Vercel, jangan masukkan ke HTML atau bagikan.
   - OPENROUTER_API_KEY = API key OpenRouter yang sudah digunakan sebelumnya.
   - OPENROUTER_MODEL = baidu/ernie-5.5-flash-preview:free (jika masih ingin memakai model sebelumnya).
   Setelah menyimpan variabel, lakukan Redeploy di Vercel.

3. URL Auth Supabase
   - Authentication > URL Configuration.
   - Site URL: https://toolnest-zrss.vercel.app
   - Redirect URL tambahkan: https://toolnest-zrss.vercel.app/**

4. Buat akun admin
   - Buka website setelah deploy.
   - Daftar akun menggunakan email milikmu dan verifikasi email jika diminta.
   - Buka Supabase > SQL Editor, lalu jalankan (ganti email):
     UPDATE public.profiles p
     SET role = 'admin'
     FROM auth.users u
     WHERE p.id = u.id AND lower(u.email) = lower('EMAIL_ADMIN_KAMU');
   - Keluar lalu masuk kembali. Tombol Admin akan muncul.

5. Kelola VIP
   - Login dengan akun admin, buka panel Admin.
   - Masukkan email akun yang sudah terdaftar dan jumlah hari, lalu pilih Berikan VIP atau Cabut VIP.
   - Masa VIP tersimpan di database dan tidak bisa diubah oleh akun biasa.

CATATAN
- Jangan pernah menaruh SUPABASE_SERVICE_ROLE_KEY di frontend, GitHub, atau file HTML.
- Jangan bagikan API keys/password ke chat.
- Akun lama yang dahulu tersimpan di LocalStorage tidak otomatis menjadi akun Supabase. Pengguna perlu daftar ulang.
- Profil, nama, bio, avatar, status admin, dan VIP tersimpan di Supabase. Preferensi tampilan, favorit, dan riwayat tools tetap lokal.
- Kuota penggunaan harian masih dihitung di browser (LocalStorage), sama seperti versi sebelumnya. Ini bukan batas anti-bypass.
- Pendaftaran dapat meminta verifikasi email sesuai pengaturan Supabase.
- Setelah file diunggah ke GitHub, Vercel perlu deploy ulang.
