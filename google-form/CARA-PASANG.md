# Cara pasang Google Form + Apps Script (upload video testimoni KMSDM)

## 1. Bikin Google Form (manual, ±5 menit)
Pertanyaan file upload tidak bisa dibuat lewat script, jadi bikin manual di forms.google.com.
Judul pertanyaan harus PERSIS seperti ini:

| Judul pertanyaan | Jenis | Isi |
|---|---|---|
| Nama Lengkap | Jawaban singkat | Wajib |
| Asal Sekolah | Jawaban singkat | Wajib |
| Kelas KMSDM | Pilihan ganda | `FO/FTTH`, `Network Engineer`, `Cyber Security` |
| Upload Video | Upload file | Hanya Video, maks 1 file, ukuran maks **1 GB** |

Catatan: guru wajib login akun Google untuk upload file (aturan Google Form).
Video otomatis masuk ke Drive pemilik form, folder "(nama form) (File responses)".

## 2. Pasang script
1. Di Form: titik tiga (⋮) > **Apps Script**.
2. Hapus isi Code.gs, tempel isi file `Code.gs` dari folder ini, Save.
3. Pilih fungsi **pasangTrigger** > **Run** > izinkan akses (Allow).
4. Selesai. Tiap ada yang submit, videonya otomatis diganti nama jadi
   `KMSDM_FO_SitiAminah_SMKN13Bandung.mp4`.

## 3. Tes
Isi form sekali pakai video pendek, lalu cek nama file di folder Drive-nya.
