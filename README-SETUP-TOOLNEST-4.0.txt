TOOLNEST 4.0 — CARA PEMASANGAN

1. Backup repository Toolnest yang sekarang.
2. Ekstrak ZIP ini.
3. Upload seluruh isi ZIP ke root repository GitHub, dengan struktur folder tetap sama.
4. Pastikan folder api/ dan file package.json tetap ikut ter-upload.
5. Commit perubahan dan tunggu Vercel selesai deploy.
6. Buka website, refresh cache, lalu klik Studio Hub di sidebar.

FITUR BARU
- Project Vault: penyimpanan metadata proyek lokal dan ekspor JSON.
- Creator Studio: kanvas teks/warna dan ekspor PNG.
- Snippet Library: simpan dan kelola snippet kode lokal.
- AI Studio: Prompt Lab lokal. AI Chat masih Maintenance.
- Community: masih Maintenance sampai backend sosial dan RLS Supabase disiapkan.

PENTING
Data Project Vault, Snippet Library, dan Creator Studio tersimpan di LocalStorage/browser perangkat. Data tidak otomatis tersinkron ke akun atau perangkat lain. Jangan gunakan penyimpanan lokal untuk menyimpan password, token rahasia, atau data sensitif.
AI Chat, Community publik, dan cloud sync belum aktif. Status tool ditentukan berdasarkan implementasi/configuration yang diketahui, bukan hasil pengujian live di semua perangkat.
API Supabase yang sudah ada dipertahankan. Jangan pernah menaruh SUPABASE_SERVICE_ROLE_KEY atau API secret di index.html.
