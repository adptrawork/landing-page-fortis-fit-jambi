export const business = {
  name: 'Fortis Fit',
  slug: 'fortis-fit-jambi',
  category: 'Gym & Kelas Kebugaran',
  city: 'Kota Jambi',
  // TERVERIFIKASI dari bio IG @fortisfit_jambi (diakses 16 Okt 2026): 4.140 pengikut, 94 postingan
  instagram: 'https://www.instagram.com/fortisfit_jambi',
  followers: '4,1rb pengikut IG',
  phone: '6281299333289', // TERVERIFIKASI bio IG: 0812-9933-3289
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fortis+Fit+Jambi',
  mapsEmbed: 'https://maps.google.com/maps?q=Fortis%20Fit%20Jambi&t=&z=15&ie=UTF8&iwloc=&output=embed',
  address: 'Kota Jambi — alamat lengkap konfirmasi via IG/WA',
  // TERVERIFIKASI bio IG: Weekdays 7am-10pm, Weekends 7am-6pm
  hours: 'Senin–Jumat 07.00–22.00, Sabtu–Minggu 07.00–18.00 WIB',
  title: 'Fortis Fit Jambi — Gym + Kelas, Free Trial via WA',
  description:
    'Fortis Fit Jambi: gym + kelas, kamar mandi, buka Senin–Jumat 07.00–22.00 & weekend 07.00–18.00. Trial & price list via WA 0812-9933-3289.',
  canonicalPath: '/',
  ogImage: '/images/fortis-fit-1.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const programs = [
  {
    name: 'Open Gym — Area Beban & Kardio',
    badge: 'Terverifikasi',
    desc: 'Gym + alat beban dan kardio. Bio IG resmi menyebut Gym.',
    img: '/images/fortis-fit-1.jpg',
    alt: 'Rak dumbel area beban gym Fortis Fit Jambi',
  },
  {
    name: 'Kelas Grup',
    badge: 'Terverifikasi',
    desc: 'Bio IG resmi menyebut Classes. Jadwal kelas cek highlight/postingan IG.',
    img: '/images/fortis-fit-2.jpg',
    alt: 'Suasana kelas grup aerobik di gym Fortis Fit Jambi',
  },
  {
    name: 'Personal Training',
    badge: 'Estimasi',
    desc: 'Program personal sesuai target. Ketersediaan & tarif konfirmasi via WA.',
    img: '/images/fortis-fit-3.jpg',
    alt: 'Coach mendampingi member latihan beban di Fortis Fit Jambi',
  },
  {
    name: 'Cek Kebugaran & Konsultasi',
    badge: 'Estimasi',
    desc: 'Asesmen awal sebelum program. Detail layanan konfirmasi via WA.',
    img: '/images/fortis-fit-4.jpg',
    alt: 'Asesmen kebugaran member sebelum mulai program di Fortis Fit Jambi',
  },
  {
    name: 'Fasilitas Bilas & Kamar Mandi',
    badge: 'Terverifikasi',
    desc: 'Bio IG resmi menyebut Bathrooms. Cocok latihan sebelum/sesudah aktivitas.',
    img: '/images/fortis-fit-5.jpg',
    alt: 'Area pemulihan dan fasilitas bilas gym Fortis Fit Jambi',
  },
];

export const coaches = [
  {
    role: 'Coach Gym & Beban',
    badge: 'Estimasi',
    desc: 'Panduan teknik angkatan untuk pemula sampai lanjutan. Daftar coach aktual di IG.',
  },
  {
    role: 'Instruktur Kelas Grup',
    badge: 'Estimasi',
    desc: 'Memimpin kelas grup sesuai jadwal. Jadwal kelas cek postingan IG.',
  },
  {
    role: 'Personal Trainer',
    badge: 'Estimasi',
    desc: 'Program 1-on-1 sesuai target fatloss/muscle. Tarif konfirmasi via WA.',
  },
];

export const prices = [
  { name: 'Free Trial 1x + Konsultasi', price: 'Rp 0', badge: 'Klaim — cek IG', desc: ' Reel price list di IG @fortisfit_jambi. Konfirmasi slot via WA.' },
  { name: 'Harian — Akses 1 Hari + 1 Kelas', price: 'Rp 35.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
  { name: 'Mingguan — 7 Hari Semua Kelas', price: 'Rp 120.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
  { name: 'Bulanan — Full Akses + Program', price: 'Rp 300.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
  { name: 'Personal Trainer 4 Sesi', price: 'Rp 500.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
  { name: 'Tahunan — Full + Bonus', price: 'Rp 2.900.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
];

export const gallery = [
  { src: '/images/fortis-fit-1.jpg', alt: 'Rak dumbel area beban Fortis Fit Jambi', caption: 'Area beban — foto konteks, ganti foto asli' },
  { src: '/images/fortis-fit-2.jpg', alt: 'Kelas grup aerobik Fortis Fit Jambi', caption: 'Kelas grup — foto konteks, ganti foto asli' },
  { src: '/images/fortis-fit-3.jpg', alt: 'Sesi personal training Fortis Fit Jambi', caption: 'Coaching — foto konteks, ganti foto asli' },
  { src: '/images/fortis-fit-4.jpg', alt: 'Asesmen kebugaran member Fortis Fit Jambi', caption: 'Asesmen — foto konteks, ganti foto asli' },
  { src: '/images/fortis-fit-5.jpg', alt: 'Fasilitas pemulihan Fortis Fit Jambi', caption: 'Fasilitas — foto konteks, ganti foto asli' },
];
