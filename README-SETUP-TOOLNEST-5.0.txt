TOOLNEST 5.0 — PEMASANGAN

1. Backup repository Toolnest yang sedang online.
2. Ekstrak ZIP ini.
3. Upload seluruh isi ZIP ke ROOT repository GitHub (jangan upload folder pembungkus ZIP).
4. Pastikan folder api/ dan package.json tetap berada di root repository.
5. Commit perubahan dan tunggu deployment Vercel selesai.
6. Buka Toolnest, lakukan refresh penuh, lalu buka Studio Hub.

PERUBAHAN 5.0
- Navigasi Studio Hub diubah menjadi grid responsif: seluruh tab terlihat pada layar HP tanpa harus menggeser horizontal.
- Header modal dan area tab dibuat lebih stabil saat halaman modal digulir.
- Penyimpanan Studio Hub memakai namespace tn5_ dan melakukan migrasi otomatis dari tn4_ saat data lama tersedia.
- Validasi tipe data penyimpanan ditambahkan agar data rusak tidak langsung mematahkan tampilan.
- Status penyimpanan gagal tidak lagi ditampilkan sebagai berhasil pada proses tambah/hapus project dan snippet.
- Project Vault mendapat fitur import backup JSON dengan pemeriksaan format dan batas ukuran file.
- Tab Studio Hub diberi atribut aksesibilitas dan status tab aktif diperbarui.
- API/backend, autentikasi Supabase, dan file pendukung dari versi sebelumnya dipertahankan.

BATASAN YANG PERLU DIKETAHUI
- Project Vault dan Snippet Library tetap disimpan lokal pada browser/perangkat. Migrasi versi tidak membuat data menjadi cloud sync.
- Creator Studio adalah editor canvas dasar teks/warna.
- AI Chat dan Community masih Maintenance; tidak diklaim aktif tanpa provider AI/backend sosial yang benar.
- Status WORKING bukan jaminan setiap tool sudah diuji pada semua browser/perangkat.
- Jangan pernah menaruh SUPABASE_SERVICE_ROLE_KEY atau secret API di index.html.

PENGUJIAN YANG DILAKUKAN
- Pemeriksaan sintaks JavaScript inline dengan Node.js.
- Pemeriksaan struktur ZIP dan kelengkapan file utama.
- Pengujian browser end-to-end pada akun Supabase/Vercel dan berbagai perangkat belum dapat dilakukan dari lingkungan ini.
