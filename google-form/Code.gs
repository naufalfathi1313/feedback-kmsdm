/**
 * Rename otomatis video testimoni guru KMSDM yang di-upload lewat Google Form.
 * Hasil: KMSDM_Kelas_NamaLengkap_NamaSekolah.mp4  (contoh: KMSDM_FO_SitiAminah_SMKN13Bandung.mp4)
 *
 * Judul pertanyaan di Form HARUS sama persis dengan JUDUL di bawah.
 */
const JUDUL = {
  nama: 'Nama Lengkap',
  sekolah: 'Asal Sekolah',
  kelas: 'Kelas KMSDM',
  video: 'Upload Video',
};

const KODE_KELAS = {
  'FO/FTTH': 'FO',
  'Network Engineer': 'NE',
  'Cyber Security': 'CS',
};

// Jalankan SEKALI dari editor (pilih fungsi ini, klik Run) untuk memasang trigger.
function pasangTrigger() {
  ScriptApp.newTrigger('rapikanNamaFile')
    .forForm(FormApp.getActiveForm())
    .onFormSubmit()
    .create();
}

function rapikanNamaFile(e) {
  const jawaban = {};
  e.response.getItemResponses().forEach(function (ir) {
    jawaban[ir.getItem().getTitle()] = ir.getResponse();
  });

  const kode = KODE_KELAS[jawaban[JUDUL.kelas]] || 'X';
  const fileIds = jawaban[JUDUL.video] || [];

  fileIds.forEach(function (id) {
    const file = DriveApp.getFileById(id);
    const ext = (file.getName().match(/\.[^.]+$/) || [''])[0];
    file.setName(buatNama(kode, jawaban[JUDUL.nama], jawaban[JUDUL.sekolah]) + ext);
  });
}

function buatNama(kode, nama, sekolah) {
  return ['KMSDM', kode, rapi(nama), rapi(sekolah)].join('_');
}

// "siti aminah" -> "SitiAminah", "SMKN 13 Bandung" -> "SMKN13Bandung"
function rapi(teks) {
  return String(teks || '')
    .trim()
    .split(/\s+/)
    .map(function (k) { return k.charAt(0).toUpperCase() + k.slice(1); })
    .join('')
    .replace(/[^A-Za-z0-9]/g, '');
}
