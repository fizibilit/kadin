export const project = {
  program: "TÜBİTAK 3005",
  programFull:
    "Sosyal ve Beşeri Bilimlerde Yenilikçi Çözümler Araştırma Destek Programı",
  title: "Osmanlı Basınında Kadına Yönelik Şiddetin Analizi",
  years: "1869–1923",
  institution: "Kilis 7 Aralık Üniversitesi",
  duration: "18 Ay",
  pi: "Prof. Dr. M. Fatih KANTER",
};

export const stats = [
  { value: "1869–1923", label: "İncelenen dönem" },
  { value: "20+", label: "Taranan süreli yayın" },
  { value: "4", label: "Katmanlı şiddet tipolojisi" },
  { value: "11", label: "Kişilik proje kadrosu" },
  { value: "18 Ay", label: "Proje süresi" },
];

export const summary = `"Osmanlı Basınında Kadına Yönelik Şiddetin Analizi" adlı bu disiplinlerarası araştırma projesi, 1869 yılında yayımlanan ilk kadın dergisinden başlayarak 1923 yılına kadar olan dönemde, öncelikli hedef kitlesi kadınlar olan süreli yayınlarda kadına yönelik şiddet temalı metinlerin çok boyutlu ve yenilikçi bir yaklaşımla incelenmesini amaçlamaktadır. Proje, kadına yönelik şiddeti salt fiziksel bir olgu olarak değil; toplumsal, kültürel, psikolojik ve iletişim bilimleri perspektiflerini de içeren çok katmanlı bir fenomen olarak ele alarak, bu alandaki akademik boşluğu doldurmayı hedeflemektedir.`;

export const summaryExtra = `Edebiyat, tarih, sosyoloji, psikoloji ve medya çalışmaları gibi farklı disiplinleri bir araya getiren araştırma; Osmanlı dönemindeki kadın yayınları ve dönemin yüksek tirajlı gazeteleri üzerinden kadına yönelik şiddetin toplumsal görünürlüğü, meşrulaştırılması ve eleştirel sorgulanması süreçlerini kapsamlı şekilde değerlendirecektir. Eski harfli metinler günümüz alfabesine aktarılarak dijital olarak da erişilebilir hâle getirilecektir.`;

export const nationalGains = [
  {
    title: "Beşeri Bilimlerde İlerleme",
    text: "1869–1923 arasında yayımlanan kadın dergilerindeki mektup ve makaleler üzerinden toplumsal cinsiyet olgusuna ve kadına yönelik şiddetin çeşitli biçimlerine bilimsel bir bakış açısı kazandırılıyor; eski harfli metinlerin transkripsiyonuyla arşiv değeri taşıyan kaynaklar gün yüzüne çıkarılıyor.",
  },
  {
    title: "Politika Geliştirme Süreçlerine Bilimsel Temel",
    text: "Bulgular; Aile ve Sosyal Hizmetler, İçişleri, Adalet, Millî Eğitim, Kültür ve Turizm bakanlıkları ile YÖK ve üniversitelere; kültürel kodların tespiti, kuşaklar arası aktarımın analizi ve kanıta dayalı strateji geliştirme süreçlerinde referans kaynak sunuyor.",
  },
  {
    title: "Toplumsal Etkilerin Ortaya Konulması",
    text: "Kadına yönelik şiddetin tarihsel sürekliliğini görünür kılarak, günümüz farkındalık kampanyaları, eğitim müfredatları ve medya politikaları için kültürel bağlamı güçlü, veri temelli içgörüler üretiyor.",
  },
];

export const innovation = [
  {
    title: "İlk Sistematik Tipolojik Model",
    text: "Dört katmanlı şiddet tipolojisi, Osmanlı dönemi süreli yayınlarında kadına yönelik şiddetin söylemsel analizinde ilk kez sistematik olarak uygulanıyor.",
  },
  {
    title: "Bütüncül Kaynak Taraması",
    text: "Sınırlı sayıda metin ya da seçili dergiyle yetinen geleneksel yaklaşımların aksine, dönemin basın materyalleri bütüncül ve tarihsel-toplumsal bağlamıyla ele alınıyor.",
  },
  {
    title: "Kuramsal Derinlik",
    text: "Bourdieu'nün 'sembolik şiddet' ve Foucault'nun 'itaatkâr beden' kavramları, ilk kez bu kapsamda Osmanlı dönemi metinlerine sistematik olarak entegre ediliyor.",
  },
  {
    title: "Dijital Erişilebilirlik",
    text: "Eski harfli, Latin alfabesine hiç aktarılmamış metinler sadeleştirilmiş transkripsiyon yöntemiyle işlenerek disiplinlerarası araştırmalara açık bir veri seti hâline getiriliyor.",
  },
];

export const typology = [
  {
    key: "eylem",
    title: "Eylem Temelli Tipoloji",
    subtitle: "Şiddet nasıl gerçekleşiyor?",
    // Kaynak: ANALİZ DOSYASI/EYLEM TÜRLERİNE GÖRE.xlsx — her sheet'in "Açıklama" ve
    // "Aranacak İfadeler" sütunlarından, içeriğe sadık kalınarak alınmıştır. Alıntıların
    // tamamı (708 kayıt) boyut nedeniyle burada değil, /public/data/eylem-alintilar.json
    // içinde tutulur ve modal açıldığında ilgili kategoriye göre çekilir (bkz. TypologyCard.tsx).
    quotesSource: "/data/eylem-alintilar.json",
    groups: [
      {
        category: "Fiziksel",
        definition: "Kadının bedenine yönelik saldırılar",
        terms: ["Dövme", "İtme", "Tokat", "Fiziksel zor", "Kapatma", "Aç bırakma"],
      },
      {
        category: "Duygusal",
        definition: "Kadının duygularını, özgüvenini hedef alan şiddet",
        terms: [
          "Aşağılama",
          "Küçümseme",
          "Sevgisizlik",
          "İlgisizlik",
          "Kıskançlık",
          "Roman okuma",
          "Mesire",
          "Özgürlük",
        ],
      },
      {
        category: "Ekonomik",
        definition: "Kadının parasal veya maddi kaynaklarının kontrolü",
        terms: ["Para vermeme", "Çalışmasına izin vermeme", "Mirasa el koyma"],
      },
      {
        category: "Cinsel",
        definition: "Kadının cinselliği üzerinde baskı veya zorlama",
        terms: ["Cinsel zorlama", "Evlilikte rıza dışı ilişki", "İffet dayatması"],
      },
      {
        category: "Yazılı–Sözlü",
        definition: "Söylem ve dil üzerinden şiddet",
        terms: ["Hakaret", "Tehdit", "Aşağılayıcı hitap", "Sessizlik dayatması"],
      },
      {
        category: "Sembolik",
        definition: "Kültürel, dini veya toplumsal sembollerle baskı",
        terms: ["“İffetli kadın” normu", "Mahalle baskısı", "“Aile onuru” vurgusu"],
      },
    ],
  },
  {
    key: "fail",
    title: "Faile Göre Tipoloji",
    subtitle: "Şiddeti kim uyguluyor?",
    // Kaynak: ANALİZ DOSYASI/FAİLLER.xlsx — sheet adları ve "Açıklama" sütunundan,
    // içeriğe sadık kalınarak alınmıştır. Alıntıların tamamı public/data/fail-alintilar.json'da.
    quotesSource: "/data/fail-alintilar.json",
    groups: [
      {
        category: "Ataerkil Aile ve Erkek Egemenliği",
        definition: "Kadına yönelik şiddetin temel yapısal kaynağı; erkek otoritesini meşrulaştıran aile içi düzen.",
      },
      {
        category: "Devlet ve Hukuk Mekanizması",
        definition:
          "Şiddeti önlemekte yetersiz kalan, bazı durumlarda erkek otoritesini koruyan ya da meşrulaştıran resmi mekanizma.",
      },
      {
        category: "Kadınlar",
        definition: "Kadınların birbirlerine karşı gerçekleştirdiği şiddet türleri",
      },
      {
        category: "Dini ve Ahlaki Söylemler",
        definition:
          "Kadının konumunu belirleyen, itaati ve erkeğe bağlılığı teşvik eden veya sorgulayan dini/ahlaki normlar.",
      },
      {
        category: "Basın ve Toplumsal Söylem",
        definition:
          "Kadına yönelik şiddeti nasıl temsil ettiğiyle (meşrulaştırma, mazur gösterme ya da eleştirme biçimleriyle) şiddetin algısını şekillendiren alan.",
      },
    ],
  },
  {
    key: "alan",
    title: "Alan Temelli Tipoloji",
    subtitle: "Şiddet nerede vuku buluyor?",
    // Kaynak: ANALİZ DOSYASI/GERÇEKLEŞEN ALANLAR.xlsx
    quotesSource: "/data/alan-alintilar.json",
    groups: [
      {
        category: "Özel alanlar",
        definition: "Şiddetin ev, aile veya özel ilişkiler içinde gerçekleştiği yerler",
      },
      {
        category: "Kamusal alanlar",
        definition:
          "Şiddetin toplumun görebileceği veya kamuya yansıyan yerlerde gerçekleşmesi; toplumsal kurum ve cemiyetlerde yaşanan durumlar",
      },
      {
        category: "Metinsel",
        definition: "ahlaki söylem sansasyonel anlatım nötr haber dili kadın odaklı yorum",
      },
    ],
  },
  {
    key: "magdur",
    title: "Mağdura Göre Tipoloji",
    subtitle: "Mağdur şiddeti nasıl algılıyor?",
    // Kaynak: ANALİZ DOSYASI/MAĞDURUN ALGISI_.xlsx
    quotesSource: "/data/magdur-alintilar.json",
    groups: [
      {
        category: "İçselleştirilmiş",
        definition: "eğitim ve iffet eşitlenmiş",
      },
      {
        category: "Sembolleştirilmiş",
        definition: "",
      },
      {
        category: "Kadınların Tepkisi ve Direnişi",
        definition:
          "Şiddete karşı çıkan, sesini duyurmaya çalışan, mektup yazarak veya dava açarak ataerkil düzeni sorgulayan kadın öznesi.",
      },
    ],
  },
];

export const methodSteps = [
  {
    title: "Doküman Analizi",
    text: "Nitel araştırma yöntemlerinden doküman analiziyle, yazılı belgelerin içerikleri sistematik ve titiz biçimde incelenerek anlam çıkarılır.",
  },
  {
    title: "Amaçlı Ölçüt Örnekleme",
    text: "Farklı bölge ve ideolojik eğilimlerden gelen dergi ve gazeteler, belirlenen ölçütlere uygunluğuna göre seçilir.",
  },
  {
    title: "Sadeleştirilmiş Transkripsiyon",
    text: "Eski harfli metinler, birebir transliterasyondan ziyade kültürel ve tarihsel analize uygun bir yöntemle Latin alfabesine aktarılır.",
  },
  {
    title: "İçerik Analizi (ATLAS.ti)",
    text: "Kodlama süreci bilgisayar destekli nitel veri analizi yazılımı ATLAS.ti ile yürütülür; kodlar araştırmacılar ve danışmanlar arasında akran değerlendirmesiyle doğrulanır.",
  },
];

export const workPackages = [
  {
    no: 1,
    title: "Planlama ve Kaynak Tespiti",
    detail:
      "Konuyla ilgili potansiyel içerdiği düşünülen süreli yayınların tespiti için planlama yapılması.",
    range: [1, 3],
    contribution: 20,
    metric:
      "Hakkı Tarık Us, Seyfettin Özege, Atatürk Kitaplığı, Kadın Eserleri Kütüphanesi ve Millî Kütüphane koleksiyonlarında tarama.",
  },
  {
    no: 2,
    title: "Metin Tespiti",
    detail:
      "Süreli yayınlardan tespitler yapılarak kadına yönelik şiddet içeren metinlerin belirlenmesi.",
    range: [3, 6],
    contribution: 20,
    metric: "Toplanan verilerin dijital ortamda süreli yayın bilgileriyle birlikte arşivlenmesi.",
  },
  {
    no: 3,
    title: "Transkripsiyon ve Tasnif",
    detail:
      "Elde edilen metinlerin düzenlenerek Latin alfabesine aktarımının yapılması ve tasnif edilmesi.",
    range: [6, 9],
    contribution: 10,
    metric: "Verilerin düzenlenmesi ve Latin alfabesine aktarılarak yazıya geçirilmesi.",
  },
  {
    no: 4,
    title: "Kodlama ve Değerlendirme",
    detail:
      "İçeriğin kadına yönelik şiddet çerçevesinde tartışılması; tarih, olay, kişi, yer, zaman ve şiddet türleri bağlamında ATLAS.ti ile kodlama.",
    range: [9, 15],
    contribution: 30,
    metric: "Görünür ve görünmez şiddet türlerinin tespit, tasnif ve mukayeseli değerlendirmesi.",
  },
  {
    no: 5,
    title: "Sentez ve Yayına Dönüştürme",
    detail:
      "Bulguların değerlendirilmesi, metinlerin kitap hâline getirilmesi ve uluslararası yayına dönüştürülmesi.",
    range: [15, 18],
    contribution: 20,
    metric: "Verilerin bir araya getirilerek grafik ve tablolarla görselleştirilmesi.",
  },
];

type TeamMember = { name: string; profileUrl?: string };

// profileUrl: YÖKSİS Akademik profil bağlantısı (her biri açılıp sayfadaki isimle
// doğrulanarak eşleştirilmiştir). M. Mücahid DALKILIÇ için bağlantı henüz sağlanmadı.
export const team: {
  pi: TeamMember & { role: string };
  researchers: TeamMember[];
  advisors: string[];
  externalConsultant: string;
  externalReviewers: string;
  scholars: TeamMember[];
  scholarOutput: string;
} = {
  pi: {
    name: "Prof. Dr. M. Fatih KANTER",
    role: "Proje Yürütücüsü",
    profileUrl:
      "https://akademik.yok.gov.tr/AkademikArama/AkademisyenGorevOgrenimBilgileri?islem=direct&sira=NPyYQsydu7pn_jChegdWIA&authorId=4410C0CA8A3CC7EB",
  },
  researchers: [
    {
      name: "Prof. Dr. Beyhan KANTER",
      profileUrl:
        "https://akademik.yok.gov.tr/AkademikArama/AkademisyenGorevOgrenimBilgileri?islem=direct&authorId=88C57957890CF3C6",
    },
    {
      name: "Prof. Dr. M. Ruhat YAŞAR",
      profileUrl:
        "https://akademik.yok.gov.tr/AkademikArama/AkademisyenGorevOgrenimBilgileri?islem=direct&sira=_D2bDdARDMCOgjHVGzFVZw&authorId=FE72B8B9C44AF5CF",
    },
    {
      name: "Doç. Dr. Nilüfer AKA ERDEM",
      profileUrl:
        "https://akademik.yok.gov.tr/AkademikArama/AkademisyenGorevOgrenimBilgileri?islem=direct&authorId=E54C1A7192288345",
    },
    {
      name: "Doç. Dr. Yavuz Sinan ULU",
      profileUrl:
        "https://akademik.yok.gov.tr/AkademikArama/AkademisyenGorevOgrenimBilgileri?islem=direct&authorId=C9CCB01F5087D6F2",
    },
    {
      name: "Dr. Öğr. Üyesi Erdinç GÜLCÜ",
      profileUrl:
        "https://akademik.yok.gov.tr/AkademikArama/AkademisyenGorevOgrenimBilgileri?islem=direct&sira=_D2bDdARDMCOgjHVGzFVZw&authorId=5030931263171C71",
    },
    {
      name: "Doç. Dr. Metin Gani TAPAN",
      profileUrl:
        "https://akademik.yok.gov.tr/AkademikArama/AkademisyenGorevOgrenimBilgileri?islem=direct&sira=_D2bDdARDMCOgjHVGzFVZw&authorId=E6BC6B06AF22D863",
    },
    { name: "Dr. Öğr. Üyesi M. Mücahid DALKILIÇ" },
  ],
  advisors: ["Edebiyatçı", "Psikolog", "Sosyolog", "Tarihçi"],
  externalConsultant:
    "tarih alanında uzman, özellikle Osmanlı dönemi dergileri üzerine çalışan bir danışman",
  externalReviewers:
    "sosyoloji alanında doktora yapmış ve dezavantajlı gruplarla saha deneyimi bulunan dış destek sağlayıcı akademisyenler",
  scholars: [{ name: "Kader BÜLBÜL" }, { name: "Ayşe Nur ŞAHİN" }, { name: "Melek Şevval TAPAN" }],
  scholarOutput:
    "Bursiyerlerin her biri proje konusu üzerine birer bildiri/makale hazırlayacak.",
};

export const womenPeriodicals = [
  "Terakki-i Muhadderat",
  "Aile",
  "Bilgi Yurdu",
  "Demet",
  "Ev Hocası",
  "Genç Kadın",
  "Hanımlar Âlemi",
  "Hanımlara Mahsus Gazete",
  "İnsaniyet",
  "Kadın (Selanik–İstanbul)",
  "Kadınlar Dünyası",
  "Mehasin",
  "Mürüvvet",
  "Siyanet",
  "Türk Kadını",
];

export const generalPeriodicals = ["Ati", "İkdam", "İleri", "Sebilürreşat", "Tercüman-ı Hakikat"];

// Kaynak: Toska, Çakır, Gençtürk, Yılmaz, Kurç, Art, Demirdirek (1992).
// İstanbul Kütüphanelerindeki Eski Harfli Türkçe Kadın Dergileri Bibliyografyası
// (Metis Yayınları / Kadın Eserleri Kütüphanesi ve Bilgi Merkezi Vakfı).
// Tanım cümleleri derginin kendi künyesinden alınıp modern Türkçeye aktarılmıştır;
// yıl/sayı bilgileri aynı kaynaktaki künye kayıtlarına dayanır.
// Projenin dijital arşivinde (bkz. Dijital Arşiv bölümü) bu dergiden kaç metin
// kodlandığı — arsiv-verileri.json'dan hesaplanmıştır.
export const chronologyArchiveCounts: Record<string, number> = {
  "Terakki-i Muhadderat": 66,
  Aile: 20,
  İnsaniyet: 5,
  Mürüvvet: 100,
  "Hanımlara Mahsus Gazete": 33,
  Mehasin: 418,
  Demet: 65,
  "Kadınlar Dünyası": 466,
  Siyanet: 53,
  "Hanımlar Âlemi": 5,
  "Bilgi Yurdu": 22,
  "Türk Kadını": 8,
  "Genç Kadın": 97,
};

export const chronology = [
  {
    year: 1869,
    endYear: null as number | null,
    name: "Terakki-i Muhadderat",
    coverImage: null as string | null,
    description:
      "Terakki gazetesinin kadınlara yönelik eki olarak yayımlanan, bilinen ilk Osmanlı kadın dergisi.",
    issueCount: null as number | null,
    frequency: "",
    editor: "",
  },
  {
    year: 1880,
    endYear: null as number | null,
    name: "Aile",
    coverImage: "/images/dergi-kapaklari/aile.jpg" as string | null,
    description:
      "Aileye, yani kadınlara, çocuklara ve ev işlerine dair çeşitli konuları içeren mecmua.",
    issueCount: 3,
    frequency: "Haftalık",
    editor: "Sahibi: Mihran · Muharriri: Sami",
  },
  {
    year: 1882,
    endYear: 1883,
    name: "İnsaniyet",
    coverImage: null as string | null,
    description:
      "Kadınlara dair olarak senede on iki nüsha çıkarılması planlanan özel risale; ancak yalnızca 2 sayı yayımlanabilmiştir.",
    issueCount: 2,
    frequency: "Planlanan: yılda 12 sayı",
    editor: "",
  },
  {
    year: 1887,
    endYear: null as number | null,
    name: "Mürüvvet",
    coverImage: "/images/dergi-kapaklari/muruvvet.jpg" as string | null,
    description: "Haftada bir kere neşrolunan Mürüvvet Gazetesi'nin hanımlara mahsus nüshası.",
    issueCount: 9,
    frequency: "Haftalık",
    editor: "Müdürü: Mehmet Ziyaettin",
  },
  {
    year: 1895,
    endYear: 1908,
    name: "Hanımlara Mahsus Gazete",
    coverImage: "/images/dergi-kapaklari/hanimlara-mahsus-gazete.jpg" as string | null,
    description:
      "\"Gazetemizi neşretmekten asıl maksadımız, ülke ve devletin menfaatine ciddi biçimde hizmet etmektir.\" Dönemin en uzun soluklu ve en çok sayıya ulaşan kadın dergisi.",
    issueCount: 612,
    frequency: "Önce haftada iki kez, sonra haftalık",
    editor: "",
  },
  {
    year: 1908,
    endYear: 1909,
    name: "Mehasin",
    coverImage: null as string | null,
    description: "Her Rumi ayın 25. günü çıkan, hanımlara mahsus resimli gazete.",
    issueCount: 12,
    frequency: "Aylık",
    editor: "Sahib-i imtiyaz: Asaf Muammer · Müdür ve sermuharrir: Mehmet Rauf",
  },
  {
    year: 1908,
    endYear: null as number | null,
    name: "Demet",
    coverImage: null as string | null,
    description: "Edebi, ilmi, siyasi, hanımlara mahsus haftalık resimli mecmua.",
    issueCount: 7,
    frequency: "Haftalık",
    editor: "",
  },
  {
    year: 1913,
    endYear: 1921,
    name: "Kadınlar Dünyası",
    coverImage: "/images/dergi-kapaklari/kadinlar-dunyasi.jpg" as string | null,
    description:
      "\"Kadınlığın hukukunu ve menfaatini savunan resimli gazete; sayfalarımız ırk ve mezhep ayrımı gözetmeksizin bütün Osmanlı kadınlarına açıktır.\" Döneminin en etkili kadın hakları savunucusu yayınlarından.",
    issueCount: 208,
    frequency: "Önce günlük, sonra haftalık",
    editor: "",
  },
  {
    year: 1914,
    endYear: null as number | null,
    name: "Siyanet",
    coverImage: "/images/dergi-kapaklari/siyanet.jpg" as string | null,
    description: "Toplumsal, edebi, ilmi, iktisadi kadın ve aile gazetesi.",
    issueCount: null as number | null,
    frequency: "",
    editor: "",
  },
  {
    year: 1914,
    endYear: 1918,
    name: "Hanımlar Âlemi",
    coverImage: "/images/dergi-kapaklari/hanimlar-alemi.jpg" as string | null,
    description: "Perşembe günleri çıkan; edebi, toplumsal, resimli hanım gazetesi.",
    issueCount: 32,
    frequency: "Haftalık",
    editor: "",
  },
  {
    year: 1917,
    endYear: 1918,
    name: "Bilgi Yurdu",
    coverImage: "/images/dergi-kapaklari/bilgi-yurdu.jpg" as string | null,
    description:
      "Hanımlar Bilgi Yurdu Müessesesi'ne bağlı aylık risale. \"Ders Kısmı\" adlı bir eki bulunuyordu; 13. sayıdan sonra \"Bilgi Yurdu Mecmuası\" adını aldı.",
    issueCount: 17,
    frequency: "Aylık",
    editor: "Müdür ve Sermuharrir: Ahmet Edip, sonra Macit Şevket",
  },
  {
    year: 1918,
    endYear: 1919,
    name: "Türk Kadını",
    coverImage: null as string | null,
    description: "Kadınlar için çalışır, on beş günde bir çıkar.",
    issueCount: 21,
    frequency: "On beş günlük",
    editor: "",
  },
  {
    year: 1918,
    endYear: null as number | null,
    name: "Genç Kadın",
    coverImage: "/images/dergi-kapaklari/genc-kadin.jpg" as string | null,
    description: "On beş günlük, resimli mecmua.",
    issueCount: null as number | null,
    frequency: "On beş günlük",
    editor: "İmtiyaz Sahibi: Seyyit Tahir · Müdiresi: Hatice Refik",
  },
];

export const bibliographyNote =
  "Eski Harfli Türkçe Kadın Dergileri Bibliyografyası (Toska ve ark., 1992)";

// Bourdieu ve Foucault'nun kavramları ("sembolik şiddet", "itaatkâr beden") başvuru
// formunda açıkça adlandırılıyor. Butler, De Beauvoir, Oakley ve Stoller ise formda
// yalnızca toplu bir kuramsal atıf olarak (Butler, 1990, 2014; De Beauvoir, 1993;
// Oakley, 1972; Stoller, 1964, 1968) geçiyor. Biyografi/yaşam yılları ve ana eser
// bilgileri, okurun bağlamı hızlıca kavraması için eklenmiş genel bilgilerdir —
// başvuru formunun parçası değildir.
export const theoreticalFrame = [
  {
    name: "Pierre Bourdieu",
    years: "1930–2002",
    concept: "Sembolik Şiddet",
    bio: "Fransız sosyolog. “Sembolik şiddet” ve “habitus” kavramlarının mimarı; Eril Tahakküm (1998) adlı eserinde toplumsal cinsiyet ilişkilerini iktidar ve tahakküm ekseninde inceledi.",
  },
  {
    name: "Michel Foucault",
    years: "1926–1984",
    concept: "İtaatkâr Beden",
    bio: "Fransız filozof ve tarihçi. İktidar-bilgi ilişkilerini ve bedenin disiplin altına alınma süreçlerini “itaatkâr beden” kavramıyla Hapishanenin Doğuşu (1975) eserinde geliştirdi.",
  },
];

export const additionalTheorists = [
  {
    name: "Judith Butler",
    years: "1956–",
    formCitation: "1990, 2014",
    bio: "Amerikalı felsefeci. Toplumsal Cinsiyet Belası (1990) ile toplumsal cinsiyetin performatif biçimde inşa edildiği tezini öne sürerek çağdaş toplumsal cinsiyet kuramına yön verdi.",
  },
  {
    name: "Simone de Beauvoir",
    years: "1908–1986",
    formCitation: "1993",
    bio: "Fransız filozof ve yazar. İkinci Cins (1949) ile “kadın doğulmaz, kadın olunur” tezini ortaya koyarak modern feminist felsefenin kurucu isimlerinden oldu.",
  },
  {
    name: "Ann Oakley",
    years: "1944–",
    formCitation: "1972",
    bio: "İngiliz sosyolog. Toplumsal cinsiyet (gender) ile biyolojik cinsiyet (sex) arasındaki ayrımı sistematikleştiren erken dönem feminist sosyologlardan.",
  },
  {
    name: "Robert Stoller",
    years: "1924–1991",
    formCitation: "1964, 1968",
    bio: "Amerikalı psikiyatrist. “Toplumsal cinsiyet kimliği” (gender identity) kavramını klinik psikiyatri literatürüne kazandıran araştırmacılardan.",
  },
];

export const outputs = [{ value: "1", label: "Dijital Arşiv / Veri Tabanı" }];

// Proje güncellemeleri günlüğü. Yalnızca gerçekleşmiş, tarihi bilinen olaylar
// eklenmelidir — burada listelenen tek girdi bu web sitesinin yayına alınmasıdır.
// Yeni bir aşama tamamlandıkça (örn. bir dergi taramasının bitmesi, bir kodlama
// turunun tamamlanması) ekibin buraya {date, title, text} olarak eklemesi önerilir.
export const updates: { date: string; title: string; text: string }[] = [
  {
    date: "2026-09",
    title: "Proje tanıtım sitesi yayına alındı",
    text: "Dijital arşiv, tipoloji, kronoloji ve kavram haritası bölümleriyle projenin tanıtım web sitesi erişime açıldı.",
  },
];

// Proje kapsamında yayımlanması planlanan bilimsel çıktılar. Şu an için sayısı ve
// niteliği başvuru formunda belirtilen "planlanan" çıktılardır; her yayın
// tamamlandığında `items` dizisine {title, authors, venue, year, url} olarak
// eklenerek link üzerinden erişilebilir hâle getirilir.
type PublicationItem = {
  title: string;
  authors?: string;
  venue?: string;
  year?: string | number;
  url: string;
};

export const publications: {
  category: string;
  plannedCount: number;
  note: string;
  items: PublicationItem[];
}[] = [
  {
    category: "Uluslararası Makale / Bildiri",
    plannedCount: 2,
    note: "Proje bulgularına dayalı iki uluslararası makale/bildirinin hakemli dergilerde yayımlanması ve sempozyumlarda sunulması planlanmaktadır.",
    items: [],
  },
  {
    category: "Yüksek Lisans Tezi",
    plannedCount: 2,
    note: "İki araştırmacının yüksek lisans tezlerini proje verileriyle ilişkilendirerek tamamlaması planlanmaktadır.",
    items: [],
  },
  {
    category: "Kapsamlı Kitap",
    plannedCount: 1,
    note: "Latin alfabesine aktarılan metinlerin bir araya getirilerek kitap hâline getirilmesi planlanmaktadır.",
    items: [],
  },
];

export const beneficiaries = [
  "T.C. Aile ve Sosyal Hizmetler Bakanlığı",
  "T.C. Çalışma ve Sosyal Güvenlik Bakanlığı",
  "T.C. İçişleri Bakanlığı",
  "T.C. Adalet Bakanlığı",
  "T.C. Millî Eğitim Bakanlığı",
  "T.C. Kültür ve Turizm Bakanlığı",
  "T.C. Dışişleri Bakanlığı — AB Başkanlığı",
  "Yükseköğretim Kurulu (YÖK) ve Üniversiteler",
];

export const disseminationPartner = {
  name: "Kilis 7 Aralık Üniversitesi KADAMER (Kadın ve Aile Araştırmaları Merkezi)",
  activity: "Bilimsel toplantı",
  period: "12–18. aylar",
};

export const limitation =
  "Araştırmanın sınırlılıkları arasında, yalnızca 1869–1923 yılları arasında yayımlanan Osmanlı süreli yayınlarındaki kadına yönelik şiddet içeriklerinin incelenmesi ve transkript sürecinde bazı metinlerin eksik ya da erişilemez olması ihtimali yer almaktadır.";

export const risks = [
  {
    title: "Metin Tespit ve Tasnif Güçlüğü",
    text: "1869–1923 arasında yüzlerce, kimi kısa ömürlü dergi yayımlanmıştır. Ön tarama ve fihrist incelemesiyle risk azaltılmış; ek 3 aylık tarama süresi ayrılmıştır.",
  },
  {
    title: "Veri Tabanı Erişim Güçlüğü",
    text: "Kütüphane ve veri tabanlarına teknik erişim sorunlarına karşı dijital bir arşiv oluşturulacaktır.",
  },
  {
    title: "Malzeme Hacminin Öngörüyü Aşması",
    text: "Baskın şiddet türü içeren metinlere öncelik verilerek kapsam yönetilebilir tutulacaktır.",
  },
];

export const faqs = [
  {
    q: "Bu bir dijital arşiv mi, yoksa akademik bir analiz mi?",
    a: "İkisi de. Site hem transkribe edilmiş birincil kaynak metinlerinden oluşan filtrelenebilir bir dijital arşiv sunar, hem de bu metinlerin dört katmanlı bir tipoloji ve kuramsal çerçeve (Bourdieu, Foucault ve diğerleri) ile analiz edildiği akademik bulguları içerir.",
  },
  {
    q: "İncelenecek metinler nasıl seçildi?",
    a: "Amaçlı ölçüt örnekleme yöntemiyle, farklı bölge ve ideolojik eğilimlerden gelen dergi ve gazeteler taranmıştır. Metin tespitinde “nisa, nisvan, nisviyyet, kadın, hatun, hanım, genç kız, kız çocuğu” gibi anahtar kelimeler esas alınmıştır.",
  },
  {
    q: "Dijital Arşiv'deki metinleri nasıl kullanabilirim?",
    a: "Yayın adı, yıl, şiddet türü, fail, alan ve mağdurun algısına göre filtreleyebilir, metin içinde arama yapabilir ve sonuçları CSV olarak indirebilirsiniz. Akademik kullanımda projeye atıf verilmesi rica olunur (bkz. aşağıdaki “Bu Projeye Atıf Verin” bölümü).",
  },
  {
    q: "Dergi kapak görselleri nereden alınıyor?",
    a: "Kapak görsellerinin büyük bölümü Kadın Eserleri Kütüphanesi ve Bilgi Merkezi Vakfı'nın yayımladığı “Osmanlı ve Erken Cumhuriyet Kadın Dergileri: Talepler, Engeller, Mücadele” yeni harfli baskı serisinden, kaynak gösterilerek ve yalnızca akademik/tanıtım amaçlı alınmıştır.",
  },
  {
    q: "Proje ne zaman tamamlanacak, sonuçlarına nereden ulaşabilirim?",
    a: "Proje 18 aylık bir TÜBİTAK 3005 çalışmasıdır; aşamaları İş Planı bölümünde yer alır. Planlanan çıktılar (makale, tez, kitap) tamamlandıkça Proje Çıktıları bölümüne eklenecektir.",
  },
  {
    q: "Eksik bir dergi veya kaynak biliyorum, nasıl katkıda bulunabilirim?",
    a: "Projeye kaynak önerisi, düzeltme ya da geri bildiriminizi İletişim bölümündeki bilgilerle proje yürütücüsüne ulaştırabilirsiniz.",
  },
];
