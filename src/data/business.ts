export const business = {
  name: 'Fortis Fit',
  slug: 'fortis-fit-jambi',
  category: 'Gym & Personal Trainer',
  city: 'Kota Jambi',
  rating: 5.0,
  reviewCount: 130,
  phone: '6281234567890', // TODO-GANTI: nomor WA aktif pemilik
  mapsUrl: 'https://maps.google.com/?q=Fortis%20Fit%20Jambi',
  address: 'Kota Jambi, Provinsi Jambi',
  hours: 'Senin–Sabtu 09.00–21.00, Minggu 10.00–20.00',
  title: 'Fortis Fit Jambi — Personal Trainer & Free Trial',
  description: 'Fortis Fit Jambi: profil trainer, alat angkat beban, klaim free trial & diskon via WA.',
  canonicalPath: '/',
  ogImage: '/og-default.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  {
    "name": "Harian — Akses 1 Hari + 1 Kelas",
    "price": "Rp 35.000",
    "badge": "Fleksibel",
    "stock": "Kuota"
  },
  {
    "name": "Mingguan — 7 Hari Semua Kelas",
    "price": "Rp 120.000",
    "badge": "Populer",
    "stock": "Kuota"
  },
  {
    "name": "Bulanan — Full Akses + Program",
    "price": "Rp 300.000",
    "badge": "Hemat",
    "stock": "Kuota"
  },
  {
    "name": "Tahunan — Full + 2 Bulan Bonus",
    "price": "Rp 2.900.000",
    "badge": "Best Value",
    "stock": "Kuota"
  },
  {
    "name": "Free Trial 1x + Konsultasi",
    "price": "Rp 0",
    "badge": "Gratis",
    "stock": "Slot"
  },
  {
    "name": "Personal Trainer 4 Sesi",
    "price": "Rp 500.000",
    "badge": "Progres",
    "stock": "Slot"
  }
];
