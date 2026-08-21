import type { Project, ServiceItem } from '../types';

export const companyInfo = {
  name: 'EY Dizayn',
  owner: 'Erkan Akpınar',
  title: 'Özel Tasarım Mobilya & İç Mekan Dekorasyon',
  phone: '0542 590 8027',
  phoneRaw: '905425908027',
  phoneFormatted: '+90 (542) 590 80 27',
  instagram: 'ey_dizayn',
  instagramUrl: 'https://www.instagram.com/ey_dizayn/',
  address: 'Mobilyakent Camikebir 5062 Cad. No:90 Kocasinan / KAYSERİ',
  city: 'Kocasinan / KAYSERİ',
  experienceYears: '15+',
  googleMapsUrl: 'https://maps.google.com/?q=Mobilyakent+Kocasinan+Kayseri',
};

export const projectsData: Project[] = [
  {
    id: 'p1',
    title: 'Vizon Lake & Bronz Vitrinli Modern Mutfak',
    category: 'Mutfak Dolapları',
    imageUrl: '/images/projects/kitchen-1.jpeg',
    description: 'Mat vizon lake kapaklar, altın kulplar, bronz camlı LED aydınlatmalı vitrin ve mermer desen tezgah uyumu ile fonksiyonel şıklık.',
    features: ['Özel Ölçü Vizon Lake', 'Bronz Camlı LED Aydınlatmalı Vitrin', 'Gold Detaylar & Aksesuarlar', 'Geniş Çekmeceli Ada/Tezgah'],
    tag: 'Yeni Teslim'
  },
  {
    id: 'p2',
    title: 'Akustik Lambiri Duvar Paneli & Yatak Başı',
    category: 'Yatak Odası & Lambiri',
    imageUrl: '/images/projects/bedroom-panel-1.jpeg',
    description: 'Mekana özel üretilmiş dikey çıtalı akustik duvar kaplaması, entegre ray spot kanalı ve oluklu CNC işlemeli çift komodin.',
    features: ['CNC Oluklu Yatak Başı Paneli', 'Entegre Komodin Seti', 'Modern Spot Aydınlatma Altyapısı', 'Gizli Priz & Şarj Yuvaları'],
    tag: 'Özel İmalat'
  },
  {
    id: 'p3',
    title: 'Country Ada Mutfak & Özel Taç Tasarımı',
    category: 'Mutfak Dolapları',
    imageUrl: '/images/projects/kitchen-country-1.jpeg',
    description: 'Klasik ile moderni buluşturan country lake kapaklar, özel tasarım taçlı davlumbaz alanı, camlı vitrinler ve bağımsız ada ünitesi.',
    features: ['Klasik Country Lake İşçilik', 'Özel Taçlı Davlumbaz Bloğu', 'Ada Mutfak Tezgah Modülü', 'Cam Kapaklı Teşhir Dolapları'],
    tag: 'Lüks Seri'
  },
  {
    id: 'p4',
    title: 'Antrasit & Ahşap Entegre TV Konsolu ve Şaraplık',
    category: 'TV Ünitesi & Konsol',
    imageUrl: '/images/projects/tv-unit-1.jpeg',
    description: 'Antrasit gövde ile doğal ceviz kaplamanın buluştuğu çok fonksiyonlu TV ünitesi, füme camlı dolaplar ve özel şaraplık rafı.',
    features: ['Doğal Ceviz & Antrasit Kombini', 'Özel Şaraplık Bölmesi', 'Füme Camlı Üst Dolaplar', 'Blum Frenli Ray Sistemleri'],
    tag: 'Çok Amaçlı'
  },
  {
    id: 'p5',
    title: 'Cam Kapaklı Gardırop & Kapitone Puf Modülü',
    category: 'Giyinme Odası & Gardırop',
    imageUrl: '/images/projects/wardrobe-1.jpeg',
    description: 'Geniş giyinme odası ve yatak odası için çıtalı ayna/cam kapaklar, antrasit çevreleme ve ortada özel kadife kapitone sırtlı puf alanı.',
    features: ['Aynalı & Camlı Kapak Tasarımı', 'Entegre Kapitone Oturma/Puf Alanı', 'Çekmece ve Aksesuar Bölmeleri', 'Tavana Kadar Özel Ölçü'],
    tag: 'Özel Tasarım'
  },
  {
    id: 'p6',
    title: 'Gizli LED Aydınlatmalı Modern Ada Mutfak',
    category: 'Mutfak Dolapları',
    imageUrl: '/images/projects/kitchen-led-1.jpeg',
    description: 'Minimalist çizgilere sahip kulpsuz beyaz lake dolaplar, tezgah altı kesintisiz sıcak LED aydınlatma ve antrasit vitrin modülü.',
    features: ['Kulpsuz Gola Profil Tasarım', 'Kesintisiz Gizli LED Lineer Işık', 'Geniş Tezgah & Ada Alanı', 'Füme Alüminyum Çerçeveli Vitrin'],
    tag: 'Popüler'
  },
  {
    id: 'p7',
    title: 'L Mutfak Dolabı & Bronz Vitrin İmalatı',
    category: 'Mutfak Dolapları',
    imageUrl: '/images/projects/kitchen-assembly-1.jpeg',
    description: 'Kayseri atölyemizde üretilip yerinde montajı yapılan, modern siyah kulplu ve bronz cam vitrinli özel ölçü L mutfak projemiz.',
    features: ['Atölyeden Yerinde Montaj', 'Bronz Camlı Aydınlatmalı Dolap', 'Ankastre Alanları & Geniş Çekmeceler', '1. Sınıf MDF Lam Gövde'],
    tag: 'Montaj Aşaması'
  },
  {
    id: 'p8',
    title: 'Gold Ayaklı Oluklu Çıtalı Konsol & Dresuar',
    category: 'Dresuar & Makyaj Masası',
    imageUrl: '/images/projects/dresuar-gold-1.jpeg',
    description: 'Özel CNC dikey oluk işçilikli mat lake yüzey ve elektrostatik fırın boyalı gold metal ayaklı modern salon dresuarı.',
    features: ['CNC Oluklu Lake Yüzey', 'Gold Metal Destek Ayakları', 'Frenli Gizli Çekmece Sistemi', 'Geniş Kullanım Yüzeyi'],
    tag: 'Zarif Çizgi'
  },
  {
    id: 'p9',
    title: 'Özel Ölçü Lambiri Yatak Başlığı Duvarı',
    category: 'Yatak Odası & Lambiri',
    imageUrl: '/images/projects/bedroom-panel-2.jpeg',
    description: 'Tavana kadar uzanan özel akustik çıtalı panel kaplama, entegre aydınlatma hattı ve simetrik komodin uygulaması.',
    features: ['Tavana Sıfır Lambiri Tasarımı', 'Simetrik Çift Komodin', 'Gizli Elektrik ve Aydınlatma Hatları', 'Dayanıklı Lake Kaplama'],
    tag: 'Özel Proje'
  },
  {
    id: 'p10',
    title: 'Ahşap Seperatörlü Yatak Odası & Karyola',
    category: 'Yatak Odası & Lambiri',
    imageUrl: '/images/projects/bedroom-separator-1.jpeg',
    description: 'Mekanı şık bir şekilde bölen dikey ahşap çıtalı seperatör duvar, kapitone kumaş başlık ve entegre antrasit karyola takımı.',
    features: ['Oda Bölücü Ahşap Seperatör', 'Özel Kapitone Yatak Başı', 'Entegre Komodin ve Karyola Gövdesi', 'Modern Antrasit & Krem Uyumu'],
    tag: 'Mimari Çözüm'
  },
  {
    id: 'p11',
    title: 'Baklava Aynalı Makyaj Masası & Dresuar',
    category: 'Dresuar & Makyaj Masası',
    imageUrl: '/images/projects/makeup-vanity-1.jpeg',
    description: 'Kristal bizoteli baklava ayna seperatör, çok çekmeceli oluklu antrasit konsol ve gold kulp/ayak aksesuarlarıyla lüks makyaj ünitesi.',
    features: ['Bizoteli Baklava Ayna Paneli', 'Geniş 7 Çekmeceli Depolama', 'Gold Detaylar & Ayaklar', 'Oluklu Antrasit Lake İşçilik'],
    tag: 'Lüks İmalat'
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    title: 'Özel Ölçü Mutfak Dolapları',
    description: 'Lake, akrilik, membran ve masif kapak seçenekleriyle; LED aydınlatmalı füme vitrinler ve ada mutfak çözümleri.',
    iconName: 'ChefHat',
    image: '/images/projects/kitchen-1.jpeg',
    badge: 'En Çok Tercih Edilen',
    details: ['Akrilik & Lake Kapaklar', 'Blum & Samet Frenli Raylar', 'Bronz Camlı Vitrin Dolapları', 'Ada Mutfak ve Kiler Sistemleri']
  },
  {
    id: 's2',
    title: 'Yatak Odası & Lambiri Duvar Panelleri',
    description: 'Akustik çıtalı başlık duvarları, seperatörlü oda bölücüler, entegre komodin ve modern karyola imalatı.',
    iconName: 'BedDouble',
    image: '/images/projects/bedroom-panel-1.jpeg',
    badge: 'Trend Tasarım',
    details: ['CNC Oluklu Duvar Panelleri', 'Tavan Boyu Ahşap Seperatörler', 'Entegre LED Aydınlatma', 'Kapitone Yatak Başlıkları']
  },
  {
    id: 's3',
    title: 'Giyinme Odası & Gardırop Sistemleri',
    description: 'Mekana tam oturan tavana kadar gömme dolaplar, camlı alüminyum çerçeveli kapaklar ve puf alanları.',
    iconName: 'Sparkles',
    image: '/images/projects/wardrobe-1.jpeg',
    badge: 'Maksimum Depolama',
    details: ['Aynalı ve Camlı Kapak Seçenekleri', 'Pantolonluk & Kravatlık Modülleri', 'Entegre Oturma/Puf Köşesi', 'Sensörlü İç Aydınlatma']
  },
  {
    id: 's4',
    title: 'TV Üniteleri & Çok Amaçlı Konsollar',
    description: 'Salonunuza prestij katan ceviz ve antrasit kombinasyonlu TV duvarları, şaraplıklar ve füme vitrinler.',
    iconName: 'Tv',
    image: '/images/projects/tv-unit-1.jpeg',
    badge: 'Lüks Çizgiler',
    details: ['Füme Camlı Teşhir Dolapları', 'Entegre Şaraplık ve Raflar', 'Gizli Kablo Kanalları', 'Masif Ahşap ve Lake Uyumu']
  },
  {
    id: 's5',
    title: 'Dresuar, Makyaj Masası & Aynalar',
    description: 'Gold metal ayaklı, CNC dikey oluklu zarif dresuarlar, bizoteli baklava ayna seperatörler ve makyaj köşeleri.',
    iconName: 'LayoutGrid',
    image: '/images/projects/makeup-vanity-1.jpeg',
    badge: 'Zarif Detaylar',
    details: ['Bizoteli Kristal Aynalar', 'Gold & Krom Metal Ayaklar', 'Çok Çekmeceli Düzenleyiciler', 'Özel Ölçü Salon Dresuarları']
  },
  {
    id: 's6',
    title: 'Banyo Mobilyaları & Özel Projeler',
    description: 'Suya ve neme dayanıklı lake banyo dolapları, vestiyer, portmanto, çamaşır odası ve ofis mobilyaları.',
    iconName: 'Layers',
    image: '/images/projects/dresuar-gold-1.jpeg',
    badge: 'Garantili İmalat',
    details: ['Suya Dayanıklı Gövde & Kapak', 'Gizli Çamaşır Makinesi Dolapları', 'Özel Ölçü Vestiyer & Portmanto', 'Mağaza & Ofis Mobilyaları']
  }
];
