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
    // Kaynak: ANALİZ DOSYASI/EYLEM TÜRLERİNE GÖRE.xlsx — her sheet'in "Açıklama" sütunundan,
    // içeriğe sadık kalınarak alınmıştır. Alıntıların tamamı (708 kayıt) boyut nedeniyle
    // burada değil, /public/data/eylem-alintilar.json içinde tutulur ve modal açıldığında
    // ilgili kategoriye göre çekilir (bkz. TypologyCard.tsx).
    quotesSource: "/data/eylem-alintilar.json",
    groups: [
      { category: "Fiziksel", definition: "Kadının bedenine yönelik saldırılar" },
      {
        category: "Duygusal",
        definition: "Kadının duygularını, özgüvenini hedef alan şiddet",
      },
      {
        category: "Ekonomik",
        definition: "Kadının parasal veya maddi kaynaklarının kontrolü",
      },
      { category: "Cinsel", definition: "Kadının cinselliği üzerinde baskı veya zorlama" },
      { category: "Yazılı–Sözlü", definition: "Söylem ve dil üzerinden şiddet" },
      {
        category: "Sembolik",
        definition: "Kültürel, dini veya toplumsal sembollerle baskı",
      },
    ],
  },
  {
    key: "fail",
    title: "Faile Göre Tipoloji",
    subtitle: "Şiddeti kim uyguluyor?",
    items: ["Toplum", "Erkek Figürü", "Kadın Figürü (hemcins)", "Kurumlar", "Medya"],
  },
  {
    key: "alan",
    title: "Alan Temelli Tipoloji",
    subtitle: "Şiddet nerede vuku buluyor?",
    items: ["Özel Alan (ev, aile)", "Kamusal Alan (sokak, okul, gazete)", "Metinsel Alan (yayın dili ve tonu)"],
  },
  {
    key: "magdur",
    title: "Mağdura Göre Tipoloji",
    subtitle: "Mağdur şiddeti nasıl algılıyor?",
    items: ["İçselleştirilmiş", "Açıkça Reddedilen", "Sembolleştirilmiş"],
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

export const team = {
  pi: { name: "Prof. Dr. M. Fatih KANTER", role: "Proje Yürütücüsü" },
  researchers: [
    "Prof. Dr. Beyhan KANTER",
    "Prof. Dr. M. Ruhat YAŞAR",
    "Doç. Dr. Nilüfer AKA ERDEM",
    "Doç. Dr. Yavuz Sinan ULU",
    "Dr. Öğr. Üyesi Erdinç GÜLCÜ",
    "Dr. Öğr. Üyesi Metin Gani TAPAN",
    "Dr. Öğr. Üyesi M. Mücahid DALKILIÇ",
  ],
  advisors: ["Edebiyatçı", "Psikolog", "Sosyolog", "Tarihçi"],
  externalConsultant:
    "tarih alanında uzman, özellikle Osmanlı dönemi dergileri üzerine çalışan bir danışman",
  externalReviewers:
    "sosyoloji alanında doktora yapmış ve dezavantajlı gruplarla saha deneyimi bulunan dış destek sağlayıcı akademisyenler",
  scholars: 3,
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

export const bibliographyNote =
  "Eski Harfli Türkçe Kadın Dergileri Bibliyografyası (Toska ve ark., 1992)";

// Bourdieu ve Foucault'nun kavramları ("sembolik şiddet", "itaatkâr beden") başvuru
// formunda açıkça adlandırılıyor. Butler, De Beauvoir, Oakley ve Stoller ise formda
// yalnızca toplu bir kuramsal atıf olarak (Butler, 1990, 2014; De Beauvoir, 1993;
// Oakley, 1972; Stoller, 1964, 1968) geçiyor; bu isimlere özel bir kavram etiketi
// formda verilmediği için burada da eklenmiyor.
export const theoreticalFrame = [
  { name: "Pierre Bourdieu", concept: "Sembolik Şiddet" },
  { name: "Michel Foucault", concept: "İtaatkâr Beden" },
];

export const additionalTheorists = [
  "Judith Butler (1990, 2014)",
  "Simone de Beauvoir (1993)",
  "Ann Oakley (1972)",
  "Robert Stoller (1964, 1968)",
];

export const outputs = [
  { value: "2", label: "Uluslararası Makale / Bildiri" },
  { value: "2", label: "Yüksek Lisans Tezi" },
  { value: "1", label: "Kapsamlı Kitap" },
  { value: "1", label: "Dijital Arşiv / Veri Tabanı" },
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
