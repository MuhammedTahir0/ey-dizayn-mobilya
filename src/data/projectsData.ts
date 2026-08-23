import type { Project, ServiceItem, TestimonialItem, FaqItem, MaterialItem } from '../types';

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

export const materialsData: MaterialItem[] = [
  {
    id: 'm1',
    title: 'Sararmaz İpek Mat & Parlak Lake',
    subtitle: 'Poliüretan Fırın Boya & Kusursuz Yüzey',
    description: 'Yüksek kaliteli MDF üzerine uygulanan çok katmanlı astar ve sararma yapmayan İtalyan formül lake boya ile pürüzsüz doku.',
    features: ['Sararma ve solmaya karşı UV dirençli', 'İstenen her RAL renk kodunda üretim', 'Pürüzsüz ipeksi mat veya ayna parlaklık'],
    iconName: 'Sparkles',
    highlightColor: 'from-amber-400 to-yellow-500'
  },
  {
    id: 'm2',
    title: 'Çizilmez & Neme Dayanıklı Akrilik',
    subtitle: 'Ultra Parlak & Modern Mutfak Standartı',
    description: 'Mutfak ve banyolarda buhara, neme ve darbelere karşı maksimum dayanıklılık sağlayan hijyenik ve kolay silinebilir paneller.',
    features: ['Çizilmelere karşı nano koruma', 'Buhar ve sıcaklık değişimlerine dirençli', 'Kolay temizlenen leke tutmaz yüzey'],
    iconName: 'Shield',
    highlightColor: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'm3',
    title: 'Akustik Ahşap & CNC Lambiri Çıtalar',
    subtitle: 'Doğal Doku & Mekana Derinlik Katan Hatlar',
    description: 'Özel CNC makinelerimizde açılan oluklu çıta paneller ile yatak odası başlıklarında ve salonlarda sıcak ahşap akustiği.',
    features: ['CNC milimetrik hassas çıta kesimi', 'Entegre gizli LED ve priz kanalları', 'Doğal ceviz, meşe veya lake kaplama'],
    iconName: 'Layers',
    highlightColor: 'from-orange-400 to-amber-500'
  },
  {
    id: 'm4',
    title: 'Frenli Mekanizmalar (Blum & Samet)',
    subtitle: 'Ömür Boyu Sessiz ve Konforlu Kullanım',
    description: 'Dolap kapaklarında ve ağır çekmecelerde sarsıntısız, yavaş ve sessiz kapanma sağlayan dünya standartlarında donanım.',
    features: ['Tandembox / frenli gizli ray sistemleri', '110° & 155° açılı geniş menteşeler', '60 kg taşıma kapasiteli geniş çekmeceler'],
    iconName: 'Cpu',
    highlightColor: 'from-emerald-400 to-teal-500'
  },
  {
    id: 'm5',
    title: 'Füme Reflekte Cam & Alüminyum Çerçeve',
    subtitle: 'Lüks Vitrinler & Giyinme Odası Tasarımı',
    description: 'İçeriden aydınlatıldığında şeffaflaşan, dışarıdan asil bir ayna etkisi yaratan modern temperli reflekte cam kapaklar.',
    features: ['Temperli kırılmaz güvenli cam', 'İnce elektrostatik antrasit/gold profil', 'Entegre boydan LED aydınlatma'],
    iconName: 'Eye',
    highlightColor: 'from-purple-400 to-fuchsia-500'
  },
  {
    id: 'm6',
    title: 'Homojen Lineer LED Aydınlatma',
    subtitle: '3000K Günışığı & Dokunmatik / Sensörlü Kontrol',
    description: 'Tezgah altı, kiler içi ve vitrin raflarında gözü yormayan, noktasız ve homojen ışık yayan gizli profil LED sistemleri.',
    features: ['Noktasız kesintisiz opal difüzör', 'Kapak açıldığında otomatik yanan sensörler', 'Enerji tasarruflu uzun ömürlü çipler'],
    iconName: 'Sun',
    highlightColor: 'from-yellow-300 to-amber-400'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Mustafa & Zehra K.',
    location: 'Kayseri - Talas (Villa Projesi)',
    projectType: 'Komple Ada Mutfak & Giyinme Odası',
    comment: 'Erkan Usta ile çalışmak gerçekten büyük bir ayrıcalıktı. 3D çizimde ne gösterdiyse milimetresine kadar aynısını yaptı. Lake boya kalitesi ve LED aydınlatmalar kusursuz oldu. Her gelen misafirimiz mutfağımızı soruyor.',
    rating: 5,
    date: 'Ağustos 2026'
  },
  {
    id: 't2',
    name: 'Murat Bey',
    location: 'Kocasinan / Daire Yenileme',
    projectType: 'TV Ünitesi & Akustik Lambiri Başlık',
    comment: 'Mobilyakentte birçok atölye gezdim ancak Erkan Ustanın ilgisi ve sunduğu malzeme kalitesi fark yarattı. Söz verdiği günden 2 gün önce montaja geldi. İşçilik ve temizlik 10 numara.',
    rating: 5,
    date: 'Temmuz 2026'
  },
  {
    id: 't3',
    name: 'Selin & Emre D.',
    location: 'Melikgazi - Alpaslan',
    projectType: 'Country Mutfak & Baklava Aynalı Dresuar',
    comment: 'Pinterestten gösterdiğimiz özel modeli birebir evimizin ölçüsüne uyarladı. Kulplarından menteşelerine kadar 1. sınıf malzeme kullandı. Erkan Usta ve ekibine çok teşekkür ederiz.',
    rating: 5,
    date: 'Haziran 2026'
  }
];

export const faqsData: FaqItem[] = [
  {
    id: 'f1',
    question: 'Kayseri içi keşif ve lazerli ölçü alma ücretli mi?',
    answer: 'Kesinlikle hayır. Kayseri genelinde (Melikgazi, Kocasinan, Talas, Hacılar vb.) adresinize bizzat gelerek lazerli milimetrik ölçü alıyor, mekanınızı inceliyor ve ücretsiz fiyat teklifi hazırlıyoruz.'
  },
  {
    id: 'f2',
    question: 'Mobilyalar üretilmeden önce 3D çizim ile görebilir miyim?',
    answer: 'Evet. Ölçüleri aldıktan sonra mekanınızı 3 boyutlu bilgisayar ortamında modelliyoruz. Kapak renkleri, kulp seçenekleri, tezgah uyumu ve LED detaylarını siz beğenip onaylamadan atölyede kesime geçmiyoruz.'
  },
  {
    id: 'f3',
    question: 'İmalat ve anahtar teslim montaj süresi ne kadar?',
    answer: 'Seçilen malzeme türüne (lake fırın boya, akrilik veya masif) ve projenin hacmine bağlı olarak ortalama 15 ile 25 iş günü içerisinde tüm imalatı tamamlayıp kendi uzman montaj ekibimizle temiz teslimat yapıyoruz.'
  },
  {
    id: 'f4',
    question: 'İnternette veya sosyal medyada gördüğüm özel bir modeli yaptırabilir miyim?',
    answer: 'Evet! Pinterest, Instagram veya herhangi bir katalogda beğendiğiniz mobilyanın fotoğrafını bize WhatsApp üzerinden göndermeniz yeterlidir. Modelin detaylarını mekanınızın ölçüsüne göre birebir projelendirip üretiyoruz.'
  },
  {
    id: 'f5',
    question: 'Kullandığınız malzeme ve mekanizma kalitesi nedir?',
    answer: 'İç gövde ve kapaklarda 1. sınıf neme dayanıklı MDF-Lam ve sararmaz poliüretan lake boya kullanıyoruz. Ray ve menteşe mekanizmalarında ise sessiz kapanan, ömür boyu garantili Blum ve Samet donanımlarını standart olarak uyguluyoruz.'
  }
];
