// Dergiler ve yayın politikaları — kaynak: "dergiler ve yayın politikaları" Word belgesi
// (proje ekibi). Metinler belgeden aynen alınmış, yalnızca başlık önekleri atılmıştır.
// Paragraf biçimi: "## " ile başlayan satır alt başlık, "- " ile başlayan satır madde işaretidir.
// Word belgesindeki her başlık ayrı bir dergi sayfasıdır (35 başlık).
// archiveKey: Dijital Arşiv'deki kayıt sayısını bulmak için chronologyArchiveCounts anahtarı.

export type Journal = {
  slug: string;
  name: string;
  subtitle?: string;
  year: number;
  covers: string[];
  archiveKey?: string;
  paragraphs: string[];
};

export const journals: Journal[] = [
  {
    "slug": "terakki-i-muhadderat",
    "name": "Terakki-i Muhadderat",
    "year": 1869,
    "covers": [
      "/images/dergi-kapaklari/terakki-i-muhadderat.jpg"
    ],
    "archiveKey": "Terakki-i Muhadderat",
    "paragraphs": [
      "1869’da Osmanlı İmparatorluğu yönetimindeki İstanbul’da ilk kadın dergisi olan “Terakki-î Muhadderât” Derginin ilk sayısı 27 Haziran 1869'da çıktı. Derginin tek editörü Ali Raşit'tir. Terakki-î Muhadderât çoğunlukla İstanbul'da yaşayan kadınların mektuplarını yayınlıyordu. Ayrıca kadınların eğitim, İslam, çok eşlilik ve kendilerine karşı ayrımcılığın günlük sorunlarıyla ilgili yazdığı makalelere de yer veriyordu. Dergi, toplam kırk sekiz sayı yayınladıktan sonra Eylül 1870'te yayın hayatına son verdi.",
      "Batı’da filizlenen kadın hareketlerine ve feminist düşüncelere de sayfalarında yer veren mecmua; kadınların cemiyet hayatında aktif rol üstlenmelerini, iktisadi ve mesleki sahada varlık göstererek daha görünür olmalarını hararetle savunur. Nitekim dönemin bu yaklaşımını yansıtan bir metinde; kadın ve erkeğin birbirine cariye yahut hizmetçi olmak gayesiyle yaratılmadığına işaret edilerek erkeklerin kabiliyet ve hünerleriyle hem kendi maişetlerini temin edip hem aileyi geçindirebildikleri gibi, kadınların da ilim, marifet ve beceri elde edebilecek güç ve kudrete pekâlâ sahip oldukları vurgulu bir sual ile dile getirilir."
    ]
  },
  {
    "slug": "vakit-yahut-murebbi-i-muhadderat",
    "name": "Vakit Yahut Mürebbi-i Muhaddarat",
    "year": 1875,
    "covers": [
      "/images/dergi-kapaklari/vakit-yahut-murebbi.jpg"
    ],
    "paragraphs": [
      "Vakit gazetesinin haftalık eki olarak çıkarılan gazete ilkesini başlığında şöyle ifade eder; “Kadınlığa ait nafî [yararlı, kazançlı] şeylerden bahseder. Adından da anlaşılacağı üzere (Mürebbi, eğitici/öğretmen anlamına gelir) temel amacı, Osmanlı kadınlarının eğitimini, bilgi ve görgüsünü artırmaktır. İçeriğinde kadın eğitiminin gerekliliği, ev yönetimi, çocuk bakımı ve aile içi ilişkiler gibi konulara geniş yer verilmiştir"
    ]
  },
  {
    "slug": "ayine",
    "name": "Âyine",
    "year": 1875,
    "covers": [
      "/images/dergi-kapaklari/ayine.jpg"
    ],
    "paragraphs": [
      "14 Kasım 1875 tarihinde Selanik’te yayın hayatına adım atan Âyine, toplam 39 sayı neşredilmiş olmakla birlikte mevcudiyeti bilinen nüshalar arasında 31 ve 40. sayılar yer almamaktadır. Yayının idaresini ve editörlüğünü Mahmud Hamdi Bey üstlenmiştir. Süreli yayının neşir sürecinde ise dönüşümlü bir sorumluluk dağılımı görülür: 1 ile 9. sayılar Mustafa Bey, 10 ile 18. sayılar Mahmud Hamdi Bey, 19 ile 28. sayılar tekrar Mustafa Bey, 29 ile 41. sayılar ise yeniden Hamdi Bey tarafından çıkarılmıştır.",
      "Yayının temel felsefesi; geleceğin mimarı olan nesilleri yetiştiren en mühim unsurun anneler olduğu hakikatinden hareketle, her annenin mutlaka ilim, terbiye ve yüksek bir eğitim seviyesine erişmesi gerektiği tezi üzerine kurulmuştur. Mecmuaya “Âyine\" (ayna) adının verilmesi ise manidar bir benzetmeye dayanır: Kadınların zinet ve süse olan meyillerinden hareketle ayna kullanma alışkanlıkları; ilim, ahlak ve irfanın da kadının asıl manevi ziyneti olduğu fikriyle birleştirilmiş ve derginin onlara hakiki bir ayna vazifesi görmesi hedeflenmiştir.",
      "Mecmuanın benimsediği genel dünya görüşü uyarınca bilgiye ulaşmak, cinsiyet ayrımı gözetilmeksizin kadın ve erkek her fert için vazgeçilmez bir sorumluluktur; zira hem bu dünyada hem de ahirette hakiki saadete erişebilmenin yegâne yolu ilim tahsilinden geçmektedir."
    ]
  },
  {
    "slug": "aile",
    "name": "Aile",
    "year": 1880,
    "covers": [
      "/images/dergi-kapaklari/aile.jpg"
    ],
    "archiveKey": "Aile",
    "paragraphs": [
      "İmtiyaz sahipliğini Mihran’ın, başyazarlığını ise Şemseddin Sami’nin üstlendiği Aile, 27 Mayıs 1880 tarihinde yayın hayatına başlamış haftalık bir süreli yayındır. Toplam üç sayı çıkan dergi; kadın, çocuk ve ev idaresine dair çeşitli konuları kapsamlı bir biçimde ele alır. Adıyla müsemma bir yayın çizgisi benimseyen dergi; kadın, erkek ve çocuklardan oluşan aile fertlerinin ihtiyaç duyabileceği maddi, manevi, ahlâkî ve pratik bilgileri işleyerek ailenin eğitimine odaklanır. Şemseddin Sami, derginin temel yayın amacını devrin donanımlı kadınlarının basın dünyasında aktif rol alıp gazete ve mecmualarda yazı yayımlamalarını teşvik etmek olarak açıklar. 3. sayıyla yayın hayatına son verir."
    ]
  },
  {
    "slug": "insaniyet",
    "name": "İnsaniyet",
    "year": 1883,
    "covers": [
      "/images/dergi-kapaklari/insaniyet.jpg"
    ],
    "archiveKey": "İnsaniyet",
    "paragraphs": [
      "Mahmud Celâleddin tarafından neşredilen yayın, her biri otuz ikişer sayfadan müteşekkil iki sayı hâlinde okuyucuyla buluşmuştur. Kadınların bilgi ve görgüsünü artırmayı temel gaye edinen mecmuanın muhtevasında; genel ansiklopedik malumatın yanı sıra gök cisimleri, yıldız sistemleri ve takvim bilgisi gibi bilimsel konulara da yer verilmiştir.",
      "Mecmuanın dikkat çeken en mühim yönlerinden biri, kadın okurlardan gelen mektuplara sayfalarını açmış olmasıdır. Nitekim kadınlar yayına doğrudan kendi isimleriyle değil; “Lisân-ı Âşinâ Bir Hanım”, “İki Okumuş Hanımlar” ve “Mektepli Kız” gibi müstear imzalar kullanarak mektuplar göndermişlerdir. Bu durum, derginin doğrudan hedef kitlesine ulaştığını ve devrin kadınlarını kaleme sarılarak düşüncelerini paylaşmaya sevk ettiğini açıkça gösterir.",
      "Sayfalarında erkek müelliflerin kaleminden çıkan metinler de yer bulmakla birlikte, dergideki yazıların büyük kısmını mektep görmüş, eğitimli kadınların kaleme aldığı metinler oluşturur."
    ]
  },
  {
    "slug": "sukufezar",
    "name": "Şükûfezar",
    "year": 1886,
    "covers": [
      "/images/dergi-kapaklari/sukufezar.jpg"
    ],
    "paragraphs": [
      "1886 yılında yayımlanmaya başlayan Şükûfezar, Osmanlı basın tarihi içerisinde bütün yazar kadrosu yalnızca kadınlardan oluşan ilk süreli yayın olma ayrıcalığını taşır. Kelime anlamı çiçek bahçesi olan mecmuaya bu ismin Abdülkerim Sâbit tarafından verildiği aktarılır. Yayının idaresini ve editörlüğünü ise dönemin Maarif Nazırı Münif Paşa’nın kızı Ârife Hanım üstlenmiştir.",
      "Fatma Naima, Fatma Nevber, Fatma Nigâr ve Münire Hanım gibi devrin donanımlı kadın muharrirlerini bünyesinde toplayan dergi, on beş günlük periyotlarla okuyucuya sunulmuştur. Toplamda beş nüshası neşredilen ve günümüzde koleksiyonu Erzurum Atatürk Üniversitesi Kütüphanesi’nde muhafaza edilen yayının temel hareket noktası, ilk sayıda bizzat Ârife Hanım tarafından sarih bir biçimde dile getirilir: Kadınların erkekler nezdinde alaycı ve küçümseyici bir yaklaşımla \"saçı uzun, aklı kısa\" yaftalamasına maruz kaldığını belirten yazar, derginin bu peşin hükmün aksini fiilen ispat etme gayesi güttüğünü vurgular.",
      "Dönemdaşı olan kimi süreli yayınların aksine Şükûfezar, Batı kaynaklı feminist yaklaşımlardan ziyade daha muhafazakâr ve dinî referanslarla örülü bir söylemi benimsemeyi tercih etmiştir."
    ]
  },
  {
    "slug": "muruvvet",
    "name": "Mürüvvet",
    "year": 1888,
    "covers": [
      "/images/dergi-kapaklari/muruvvet.jpg"
    ],
    "archiveKey": "Mürüvvet",
    "paragraphs": [
      "Neşriyat hayatına 28 Şubat 1888 tarihinde adım atan ve dokuz hafta boyunca düzenli olarak okuyucusuyla buluşan Mürüvvet, künyesinde ve sayfalarında kendini \"gazete\" olarak nitelendirse de ebatları ve muhtevası bakımından süreli yayın literatüründe bir dergi hüviyeti taşır. Yayım gayesini kadınların fikri ve kültürel donanımını geliştirmek şeklinde tayin eden mecmuanın kurucusuna dair gerek kendi nüshalarında gerekse devrin kaynaklarında kesin bir kayıt bulunmamaktadır. Buna karşın yayına dair bilinen en mühim husus, bizzat Sultan II. Abdülhamid’in himaye ve desteğini arkasına almış olmasıdır. Mürüvvet’in müellif kadrosunda ise devrin edebiyat ve kültür hayatına yön veren Nigâr bint-i Osman, Leylâ Saz ve Fıtnat Hanım gibi önde gelen kadın şair ve yazarlar yer alır."
    ]
  },
  {
    "slug": "parca-bohcasi",
    "name": "Parça Bohçası",
    "year": 1889,
    "covers": [
      "/images/dergi-kapaklari/parca-bohcasi.jpg"
    ],
    "paragraphs": [
      "1889 yılında yayımlanan derginin şu anda tek bir sayısı kütüphanelerde bulunmaktadır. Hatice Semihâ ve Râbiâ Kamile tarafından çıkarılan dergide çocuk bakımı, ev işleri, aşçılık ve pastacılık gibi konular ele alınmıştır. Her ayın birinci ve on beşinci günlerinde çıkarılması hedeflenmiştir. Dergide, ev düzeninden çocuk bakımına, aile saadetinden güzel ahlâk ve yemek tariflerine kadar pek çok konuya yer verildiği görülmektedir. Bu sebeple dergi, Cumhuriyet dönemine geçiş sürecinde, kadına izâfe olunan görevler, kadının toplum içindeki yeri ve bunların değişim sürecini göstermesi bakımından önemli detaylar barındırmaktadır. Dergide yer alan bir yazıda, 17. Yüzyıl Fransası’nın Katolik din adamı meşhur Fénelon’un kızların eğitimi üzerine kaleme aldığı eserinden faydalanıldığı görülmektedir. Ayrıca, dönemin meşhur isimlerinden Şair Nigâr Hanım’ın, annelik duygusu, evlat sevgisi gibi konu bütünlüğü arzeden şiirlerine de Parça Bohçası’nda yer verilmiştir."
    ]
  },
  {
    "slug": "hanimlara-mahsus-gazete",
    "name": "Hanımlara Mahsus Gazete",
    "year": 1895,
    "covers": [
      "/images/dergi-kapaklari/hanimlara-mahsus-gazete.jpg"
    ],
    "archiveKey": "Hanımlara Mahsus Gazete",
    "paragraphs": [
      "Hanımlara Mahsus Gazete, ilk sayısını 1 Ağustos 1895 tarihinde yayımlamıştır. İsmi her ne kadar \"gazete\" olarak geçse de dönemin matbuat dilinde gazete, mecmua, mevkute ve risale kavramlarının sıklıkla birbiri yerine kullanılmasından ve o devirde tür ayrımının kesin çizgilerle vurgulanmamasından ötürü süreli yayın literatüründe bir dergi olarak kabul edilir. Tarîk gazetesinin başyazarı İbnülhakkı Mehmet Tahir tarafından çıkarılan yayının temel amacı; edep, ahlak ve iffet sınırları dâhilinde kalmak koşuluyla, kadınları ilgilendiren her türlü meseleyi ele alan yararlı makaleleri ve günlük havadisleri okuyucuya sunmak biçiminde özetlenir.",
      "1906 yılına kadar aralıksız neşriyatını sürdüren ve 580 sayıya ulaşarak devrinin en uzun soluklu kadın yayınlarından biri olan derginin yazar kadrosunda; Fatma Aliye Hanım, Nigâr bint-î Osman, Emine Semiye, Makbule Leman, Talat Ali, Ahmet Rasim ve Mustafa Asım gibi dönemin önde gelen isimleri yer alır.",
      "Mecmuanın genel muhtevasını; ev yönetimi, iktisat ve tasarruf bilinci, aile içi ilişkiler, moda, sıhhi tavsiyeler, şiir ve hikâyeler ile muhtelif haberler ve okur mektupları oluşturur."
    ]
  },
  {
    "slug": "hanimlara-mahsus-gazete-2",
    "name": "Hanımlara Mahsus Gazete (2)",
    "year": 1895,
    "covers": [
      "/images/dergi-kapaklari/hanimlara-mahsus-gazete-1.jpg"
    ],
    "paragraphs": [
      "1895 yılında matbuat alemine katılan Hanımlara Mahsus Gazete, kadınlar öncülüğünde neşredilen ikinci süreli yayın olma vasfını taşır. İmtiyaz sahipliğini Mehmet Tahir, idare müdürlüğünü ise eşi Şadiye Hanım’ın yürüttüğü mecmua, sayfalarını ağırlıklı olarak kadın müelliflerin makale ve şiirlerine açmıştır.",
      "Azerbaycan kökenli Türk eğitimci, yazar ve siyasetçi Tezer Taşkıran; yayının temel felsefesini \"iyi bir eş, iyi bir anne ve iyi bir Müslüman olmak\" şeklinde üç sacayağına dayandırır. Buna karşın araştırmacı Serpil Çakır, derginin yalnızca bu geleneksel rolleri benimsetmekle yetinmediğini; söz konusu kimlikleri bütünüyle dışlamaksızın kadının cemiyet içindeki konumunu sorguladığını ve erkeklerle mukayeseli değerlendirmelere giriştiğini belirtir.",
      "Mecmuanın ilk nüshasında yer alan \"Tahdîs-i Nimet Tâyin-i Meslek\" başlıklı takdim yazısında; devrin padişahı II. Abdülhamid’in maarif sahasındaki ıslahatları, açtığı mektepler ve eğitimin tabana yayılması yönündeki gayretleri takdirle karşılanmış, duyulan memnuniyet açıkça kayda geçirilmiştir.",
      "İlk sayılarından itibaren Türk edebiyatının ilk kadın romancısı Fatma Aliye Hanım, şair Nigâr Hanım ve Batı edebiyatı çizgisinde metinler üreten öncü kadınlardan Makbule Leman Hanım gibi yazı hayatına adım atan mühim simaların eserlerine yer verilmiştir. Dergi yalnızca bir yayın organı olmakla kalmamış, aynı zamanda bir basımevi gibi hareket ederek kadınların teliflerini de kitaplaştırmıştır; nitekim Fatma Aliye Hanım’ın Levâyih-i Hayat ve Tedkîk-i Ecsâm adlı eserleri bizzat Hanımlara Mahsus Gazete tarafından tabedilmiştir."
    ]
  },
  {
    "slug": "alem-i-nisvan",
    "name": "Âlem-i Nisvan",
    "year": 1906,
    "covers": [
      "/images/dergi-kapaklari/alem-i-nisvan.jpg"
    ],
    "paragraphs": [
      "İsmail Gaspıralı, Âlem-i Nisvan adını taşıyacak bir süreli yayın neşretmek üzere 11 Temmuz 1905 tarihinde Dâhiliye Nezaretine başvuruda bulunur. Yapılan başvuru 3 Kasım 1905 tarihinde resmiyet kazanarak onaylanır. Akabinde Tercüman gazetesinde neşriyat haberi, Rusça \"Jenskiy Mir\" başlığı altında kamuoyuna duyurulur. Söz konusu ilanda, yayının idaresini İsmail Gaspıralı’nın yetkin düzeyde Rusça bilen kızı Şefika Gaspıralı’nın üstleneceği de kaydedilir.",
      "Tercüman gazetesinin 28 Nisan 1906 tarihli nüshasında ise derginin muhtevası şu ana başlıklar etrafında tanıtılır:",
      "- Kadınların meşru ve hukuki hakları ile devlet nizamı karşısındaki durumları",
      "- Ev idaresi, çocuk yetiştirme usulleri ve temel sağlık bilgileri",
      "- El işleri, dikiş, nakış ve ev içi pratik uygulamalar",
      "- Yerli ve yabancı toplumlarda kadınların vaziyeti ile mukayeseli değerlendirmeler",
      "- Edebî ve ilmî çerçevede hikâye, şiir, tarih ve seyahat yazıları",
      "Yayım hayatına başlamasının ardından geniş bir coğrafyaya yayılan dergi; Çarlık Rusyası hâkimiyetindeki Türk ve İslam vilayetlerinin yanı sıra Mısır, Doğu Türkistan (Çin Türkistanı), Hindistan ve Japonya’ya kadar uzanan geniş bir okur kitlesine ulaşır."
    ]
  },
  {
    "slug": "mehasin",
    "name": "Mehâsin",
    "year": 1908,
    "covers": [
      "/images/dergi-kapaklari/mehasin.jpg"
    ],
    "archiveKey": "Mehasin",
    "paragraphs": [
      "Yayın hayatı 12 sayıyla sınırlı kalan Mehâsin, Türk basın tarihinde renkli fotoğraflara yer veren ilk kadın mecmuası olma niteliğini taşır. Muhtevasında ev idaresi, aile düzeni, moda akımları, sıhhi bilgiler ve edebî ürünler gibi başlıklar ağırlık kazanır. Mecmuanın yazar kadrosunda; devrin tanınmış simalarından Cenap Şahabettin, Halid Ziya Uşaklıgil, Emine Semiye, Şükufe Nihal ve Halide Edip gibi önemli edebiyatçılar dikkat çeker.",
      "Geniş kitlelere ulaşmak ve tirajını yükseltmek amacıyla çeşitli promosyon faaliyetlerine başvuran süreli yayın, okurlarına cazip armağanlar vadetmiştir. Bu çerçevede, Paris imalâtı olduğu belirtilen değerli bir mücevherin talihli bir okura hediye edilmesi gibi dikkat çekici adımlar atılmıştır. Bunun yanı sıra ilgiyi canlı tutmak ve etkileşimi artırmak gayesiyle kadınlar ile çocuklar arasında güzellik yarışmaları da organize edilmiştir."
    ]
  },
  {
    "slug": "demet",
    "name": "Demet",
    "year": 1908,
    "covers": [
      "/images/dergi-kapaklari/demet.jpg"
    ],
    "archiveKey": "Demet",
    "paragraphs": [
      "II. Meşrutiyet’in ilanından sonra neşriyat hayatına atılan ilk kadın dergisi vasfını taşıyan Demet, 30 Eylül 1908 ile 11 Kasım 1908 tarihleri arasında yayımlanmış ve toplamda yedi sayı yayımlanmıştır.",
      "Mecmuanın benimsediği temel gayeler, ilk sayıda okuyucuya hitaben kaleme alınan “Kâriât ve Kâriimiz” başlıklı takdim yazısında özetlenir. Burada; kadınların zihin dünyalarını aydınlatmak, onlara haftada bir defa da olsa ilmi ve edebî birikim kazandırmak, edebî ve ilmî muhtevanın yanında siyasi meseleleri de işlemek hedeflenir. Demet’in kadrosunda bilhassa Jön Türk hareketine mensup erkek müelliflerin ağırlığı dikkat çeker; Cenap Şahabettin, Hüseyin Cahit, Ahmet Samim ve Server Cemal bu isimlerin başında gelir. Kadın yazar kadrosunda ise Halide Edip Adıvar, Nigâr bint-î Osman ve İsmet Hakkı Hanım gibi devrin mühim simaları yer alır.",
      "Basın tarihimizde renkli, resimli ve aynı zamanda siyasi meselelere eğilen ilk kadın mecmuası unvanına sahip olan yayının bu çok yönlü ve politik çizgisi, bünyesindeki erkek muharrirlerin yoğunluğuyla da doğrudan ilişkilendirilebilir."
    ]
  },
  {
    "slug": "kadin-selanik",
    "name": "Kadın (Selanik)",
    "year": 1908,
    "covers": [
      "/images/dergi-kapaklari/kadin-selanik.jpg"
    ],
    "paragraphs": [
      "26 Ekim 1908 ile Mayıs 1909 tarihleri arasında Selanik’te yayımlanan süreli yayın, neşriyat hayatını toplam 30 sayı ile tamamlamıştır. İmtiyaz sahipliğini Mustafa İbrahim’in üstlendiği mecmua; kadınların tahsil imkânlarının genişletilmesi, kız talebelerin Dârülfünun’a kabul edilmesi, kız mekteplerinin yetersizliği, kadınlara yönelik hürmetsiz yaklaşımlar, örf ve âdetler, ahlak, aşk, izdivaç müessesesi, çocuk terbiyesi ve kadınların iktisadi hayata katılımı gibi devrin hayatî meselelerini kapsamlı biçimde sayfalarına taşımıştır. Yayının güçlü ve zengin muharrir kadrosunda Ayşe İsmet, Câvide Peyker, Emine Semiye, Fatma Seniye, Zekiye, Fatma bint-i Hâşim, Nakiye ve Nigâr bint-i Osman gibi öncü kadın kalemlerin yanı sıra Abdullah Cevdet, A. Ulvi, Abdülhak Hâmid, Mehmed Emin, Celâl Sahir ve Kâzım Nami gibi dönemin mühim erkek müellif ve aydınları bir araya gelmiştir."
    ]
  },
  {
    "slug": "bir-jon-turk-dergisi-kadin",
    "name": "Bir Jön Türk Dergisi Kadın",
    "year": 1908,
    "covers": [
      "/images/dergi-kapaklari/kadin-selanik.jpg"
    ],
    "paragraphs": [
      "Selanik’te Örtülü Çarşı mevkisinde yer alan Asır Matbaası’nda basılan Kadın, her biri 16 sayfalık formalar hâlinde hazırlanmış, 1 kuruş bedelle ve pazartesi günleri okuyucuyla buluşmuştur. II. Meşrutiyet devrinin pek çok süreli yayını gibi kısa soluklu kalarak neşir hayatını toplam 30 sayı ile tamamlamıştır.",
      "Genç İttihatçı erkek aydınlar öncülüğünde 1908-1909 yıllarında çıkarılan mecmua; milli şuurla donanmış ideal anne profilini ve çağdaş kadının cemiyetteki yerini inşa etmeyi temel gaye edinmiştir. Söz konusu süreli yayının muhtevası ve yayın politikası, İkinci Meşrutiyet Döneminde Bir Jön Türk Dergisi: Kadın adlı müstakil akademik araştırmada sistematik bir yaklaşımla incelenerek ortaya konmuştur."
    ]
  },
  {
    "slug": "kadin-istanbul",
    "name": "Kadın (İstanbul)",
    "year": 1911,
    "covers": [
      "/images/dergi-kapaklari/kadin-istanbul.jpg"
    ],
    "paragraphs": [
      "1911 yılında neşredilen süreli yayının muhtevası; şiirler, mensur şiirler (mensureler), hikâyeler, kadınlara dair veciz sözler, tarihe mal olmuş kadın portreleri, güncel kadın haberleri ile sıhhat ve güzellik konularını işleyen yazılardan teşekkül eder.",
      "Mecmuanın zengin muharrir kadrosunda devrin edebiyat ve düşünce hayatına yön veren pek çok mühim isim yer alır: Selahattin Enis, Yaşar Nezihe, Yahya Sami, İffet Neriman, Hüseyin Cahit, İzzet Melih, Hüseyin Kâzım, Köprülüzâde Fuad, Nigâr bint-i Osman, Prenses Kadriye Hüseyin, Celâl Sahir, Fahrünnisa, Ali Süha, Makbule Leman, Melâhat Belkıs, Abdullah Cevdet ve Tahsin Nâhid."
    ]
  },
  {
    "slug": "musavver-kadin",
    "name": "Musavver Kadın",
    "year": 1911,
    "covers": [
      "/images/dergi-kapaklari/musavver-kadin.jpg"
    ],
    "paragraphs": [
      "İlk 5 sayısında Kadın, 6. sayıdan itibaren ise Musavver Kadın adıyla okurla buluşan süreli yayın, 16 Nisan 1911 ile 3 Temmuz 1911 tarihleri arasında haftalık olarak neşredilmiş ve yayın hayatını toplam 7 sayı ile tamamlamıştır. İmtiyaz sahipliğini ve sorumlu müdürlüğünü Nizameddin Hasib’in üstlendiği mecmua, ilk nüshalarında \"Tenvîr-i efkâr ve tehzîb-i ahlâka hâdim Osmanlı hanımlarına mahsus ilmî, siyasî, edebî haftalık risaledir\" alt başlığını taşırken, isim değişikliğinin ardından edebî ve içtimaî vurgusu öne çıkan yeni bir tanıtım ibaresiyle yoluna devam etmiştir. Resimli ve edebî bir üslupla hazırlanan yayın; kadınların cemiyet hayatındaki yeri, eğitimi, aile yapısı ve devrin kadın hakları tartışmalarını sayfalarına taşıyarak II. Meşrutiyet devri kadın matbuatının tipik ve dikkat çekici örnekleri arasında yer almıştır. Mecmuanın yazar kadrosunda ise Fahrü’n-Nisâ, Melahat Belkıs ve Cevdet Tahir başta olmak üzere telif ve tercüme metinleriyle katkı sunan dönemin mühim kadın ve erkek aydınları bir araya gelmiştir."
    ]
  },
  {
    "slug": "kadinlar-dunyasi",
    "name": "Kadınlar Dünyası",
    "year": 1913,
    "covers": [
      "/images/dergi-kapaklari/kadinlar-dunyasi.jpg",
      "/images/dergi-kapaklari/kadinlar-dunyasi-1.jpg",
      "/images/dergi-kapaklari/kadinlar-dunyasi-2.jpg"
    ],
    "archiveKey": "Kadınlar Dünyası",
    "paragraphs": [
      "Osmanlı döneminin en yetkin ve tesirli yayınları arasında yer alan Kadınlar Dünyası, Müdâfaa-i Hukûk-ı Nisvân Cemiyetinin resmi yayın organı vasfını taşır. İmtiyaz sahipliğini ve kuruculuğunu Nuriye Ulviye Mevlan’ın üstlendiği mecmua, 4 Nisan 1913 tarihinde neşriyat hayatına adım atmış ve muhtelif aralıklarla 1921 senesine değin yayımını sürdürmüştür. Derginin sayfalarında yer alan en dikkat çekici görsellerden birinde; elleri prangalı biçimde göğe yönelen bir kadın figürünün altında, kadınların maruz kaldığı baskıyı ve bağımsızlık talebini doğrudan yansıtan mısralar dikkat çeker.",
      "Kadın hareketini ve dönüşümünü toplumsal gündemin merkezine yerleştirmeyi amaç edinen mecmua, bu alandaki meseleleri etraflıca ele alıp çözüm üretmeyi hedefler. Nitekim yazar kadrosundan Fatma Zerrin de üstlendikleri bu devrimci rolün getirdiği ağır sorumluluğu ve yüklendikleri vazifenin büyüklüğünü açıkça ifade eder.",
      "Yayın süreci boyunca kadınların kılık kıyafet serbestliğinden çalışma hayatındaki yerlerine kadar pek çok meseleyi tartışmaya açan dergi, özellikle eğitim hakkını mütemadiyen savunmuştur. Kadınların yükseköğrenime erişim hakkı elde etmesinin ardından vizyonunu genişleterek Avrupa’da tahsil görmeleri meselesini de tartışmaya açmıştır. Bu talebi meşrulaştırmak adına dinî referanslara da müracaat edilmiş; Hz. Peygamber’in ilmin uzak diyarlarda bile olsa aranmasını isteyen ve kadın-erkek her müminin üzerine ilim tahsil etmeyi farz kılan hadislerine dikkat çekilerek günümüzde fen ve bilimin merkezinin Avrupa olduğu vurgulanmış, böylece kadınların yurt dışı tahsili meşru bir zeminde savunulmuştur."
    ]
  },
  {
    "slug": "erkekler-dunyasi",
    "name": "Erkekler Dünyası",
    "year": 1913,
    "covers": [
      "/images/dergi-kapaklari/erkekler-dunyasi.jpg"
    ],
    "paragraphs": [
      "19 Ocak 1913 tarihinde yayın hayatına başlayan süreli yayının kapağında yer alan sunuş ifadesi, neşriyatın bilhassa aydınlanma yolundaki Osmanlı gençliğine ithaf edildiğini açıkça gösterir. Söz konusu takdimde; mecmua sayfalarının, kadınlığın itibarını, mevkiini ve ilim, fen ile edebiyatın yüceliğini takdir edebilen münevver gençlerin kalem mahsullerine açık olduğu beyan edilir.",
      "Mecmuanın içeriğinde İbn-i Azize Sîna Râşit’in \"Tabii Düşünelim\" (s. 3-4) ile İbnüsselim Süleyman’ın \"Şebâbet\" [Gençlik] (s. 8) başlıklı makaleleri dikkat çeker. Yazar imzası taşımayan metinlerin ise büyük ölçüde Mevlânzâde Rıfat’ın kaleminden çıktığı değerlendirilmektedir. Kadınlar Dünyası dergisinin kurucusu Nuriye Ulviye Mevlan’ın eşi olan Mevlânzâde Rıfat; Meşrutiyet idaresini desteklemekle birlikte, 1908’de neşrettiği Serbestî gazetesi vasıtasıyla İttihat ve Terakki Cemiyetine karşı sert bir muhalefet çizgisi benimsemiştir.",
      "Bu dönem, Osmanlı modernleşme teşebbüslerinin ivme kazandığı mühim bir evreye tekabül eder. Kadınların cemiyet hayatının tüm sahalarında aktif olarak yer almadığı bir yapıda çağdaşlaşmanın mümkün olamayacağı fikri kuvvet kazanmış, bu maksatla erkek aydınların da sürece dahil edilmesine gayret edilmiştir. Nitekim yayında kadın-erkek ilişkilerindeki ahlaki zaaflara ve istismara işaret eden; dönemin delikanlılarının genç kızları kandırmak gayesiyle kaleme aldıkları aşk mektuplarından örneklerin sunulduğu \"Gençlerimizin Genç Kızlarımızı İğfal Yolunda Takdim Etmekte Oldukları Muâşaka Mektuplarından Nümûne\" (s. 7) başlıklı dikkat çekici bir metin ile iki sayfalık ilan kısmı da yer almaktadır.",
      "## Erkekler Dünyası’nda Kadın Meselesi",
      "Mevlânzâde Rıfat, devrinde kadın sorununa eğilen ve çözüm arayan az sayıdaki Osmanlı aydınından biridir. Meşrutiyet sonrasında filizlenen kadın hareketi; Abdullah Cevdet ve Ziya Gökalp gibi aydınların yanı sıra Mevlânzâde Rıfat’ın da mühim desteğini arkasına almıştır. Gazetecilikteki birikimini kadın hareketine hasreden ve mücadeleye erkekler cephesinden destek sunmayı hedefleyen Mevlânzâde Rıfat, hemcinslerine sorumluluklarını hatırlatmak maksadıyla Erkekler Dünyası’nı neşretmiştir. Kadınların cemiyet içinde bağımsız bir özne olarak göz ardı edildiğini savunan yazar, kadın hukukunun ve toplumsal haklarının erkekler tarafından da savunulması lüzumunu yayınının temel varlık sebebi olarak tayin etmiştir."
    ]
  },
  {
    "slug": "siyanet",
    "name": "Siyanet",
    "year": 1914,
    "covers": [
      "/images/dergi-kapaklari/siyanet.jpg"
    ],
    "archiveKey": "Siyanet",
    "paragraphs": [
      "“Mâmûlât-ı Dâhiliye İstihlâki Kadınlar Cemiyet-i Hayriyesi”nin neşir organı olarak matbuat âlemine adım atan süreli yayın; içtimaî, edebî, ilmî ve iktisadî muhtevalı bir kadın ve aile mecmuasıdır. İlk sayısını 26 Mart 1914 tarihinde okura sunan derginin imtiyaz sahipliğini, idaresini ve mesul müdürlüğünü Zâime Hayriye üstlenmiştir.",
      "İlk sayısında vurgulanan \"Çalışmak yaşamak içindir...\" düsturundan da anlaşılacağı üzere neşriyat; kadının iktisadi hürriyetini kazanmasını, üretim ve çalışma sahasında faal biçimde yer almasını ve cemiyet hayatındaki haklarının himaye edilmesini temel gaye edinen milliyetçi ve terakkiperver bir yayın çizgisi benimsemiştir. Temsilcisi olduğu cemiyetin iktisadi gayeleri doğrultusunda hareket eden mecmua, Osmanlı kadınını bilhassa yerli malı kullanımına yönlendirmiş; tasarruf, yerli üretim ve bilinçli tüketim meselelerinde toplumsal farkındalık oluşturmaya gayret etmiştir.",
      "Mecmuanın zengin muharrir heyetinde; Fatma Saide, Köprülüzâde Mehmed Fuad, Namık Ekrem ve Sâika Peyami gibi dönemin düşünce ve edebiyat dünyasında iz bırakan isimleri yer almıştır."
    ]
  },
  {
    "slug": "seyyale",
    "name": "Seyyâle",
    "year": 1914,
    "covers": [
      "/images/dergi-kapaklari/seyyale.jpg"
    ],
    "paragraphs": [
      "22 Mayıs 1330 / 4 Haziran 1914 tarihinde neşredilen Seyyâle, yayın hayatını tek sayıyla tamamlamış süreli bir yayındır. İlk sayfasında yer alan tanıtım ibaresinde; genç kızlar ile hanımlara hitap eden, ilmî, fennî, edebî, ahlâkî, felsefi ve seyahate dair muhtevaya sahip resimli bir mecmua olduğu belirtilerek yayın çizgisi açıkça ortaya konur.",
      "Satış bedeli 1 kuruş olarak belirlenen ve kapağında aylık ile senelik abonelik tarifelerine yer verilen derginin idari kadrosunda; imtiyaz sahibi Âdile Necati, kurucuları İskender Fahrettin ile Profesör H. Cevat, mesul müdürü Şekibe Ali ve başyazarı Salime Servet Seyfi bulunmaktadır.",
      "Genel yayın politikası itibarıyla milli değerleri merkeze alan mecmua, ağırlıklı olarak kadın ve çocuk eğitimi meselelerine odaklanır. Başyazarlık vazifesini yürüten Salime Servet Seyfi, kaleme aldığı makalelerde bilhassa \"kadın\" ve \"vatan\" mefhumları arasındaki bağı irdeler. Feminizm tartışmaları karşısında annelik misyonunu yücelten bir tutum sergileyen yazar; vatana faydalı askerler ve nesiller kazandıracak olan annelerin tahsiline büyük önem atfeder. Salime Servet'e göre, toplumu hem maddi hem de manevi bakımdan dönüştürüp geliştirecek olan temel dinamik, kuvvetli milli şuura sahip ve iyi yetişmiş annelerdir."
    ]
  },
  {
    "slug": "kadinlik",
    "name": "Kadınlık (Kadınlık Hayatı)",
    "year": 1914,
    "covers": [
      "/images/dergi-kapaklari/kadinlik-hayati.jpg"
    ],
    "paragraphs": [
      "“Kadınlığın varlığını ve memlekette bir mevkii bulunduğunu müdafaa eder. Perşembe günleri neşrolunur musavver gazetedir. Sahâifimiz bilumum Osmanlı hanımları âsârına küşâdedir” alt başlığı ve misyonuyla yayımlanan Kadınlık, 21 Mart 1914 ile 30 Mayıs 1914 tarihleri arasında neşriyatını sürdürmüş ve toplam 11 sayı olarak çıkmıştır. Kadınların tahsili, cemiyetteki mevkii ve teşkilatlanması hususunda geliştirdiği söylem dolayısıyla Meşrutiyet devri kadın matbuatı içinde mühim bir yer edinmiştir.",
      "Osmanlı kadın hareketinin önde gelen birçok simasına sayfalarını açan haftalık süreli yayının başyazarlığını Nigâr Hanım, sorumlu müdürlüğünü Süleyman Tevfik, imtiyaz sahipliğini ise Hacı Cemal ile Nigâr Cemal üstlenmiştir.",
      "Kadının toplumsal statüsünü hak ettiği seviyeye ulaştırmayı ve kamusal sorumluluk şuurunu pekiştirmeyi yayın felsefesinin merkezine yerleştiren mecmua; feminizm, kadınlık şuuru, izdivaç, eğitim, hukuk, çalışma hayatı, moda, beden estetiği ve biçki-dikiş gibi muhtelif temaları sayfalarına taşımıştır. Bu fikrî yazıların yanı sıra tefrika edilen romanlar, tarihe mal olmuş meşhur kadın portreleri, hikâyeler, musiki notaları ve şiirlerle de zengin bir edebi-kültürel muhteva sunmuştur.",
      "Mecmuanın muharrirleri arasında yer alan Ebüssüreyya Sami, ilk sayıda yayımlanan \"Bizde Kadın Zihniyeti\" başlıklı makalesinde; Osmanlı kadını geleneksel kalıpları kırmadıkça ve kadınlık rolünü yalnızca ev işleri ile çocuk bakımına indirgemekten sıyrılmadıkça toplumsal mevkisinde hakiki bir terakki sağlanamayacağını açıkça ortaya koymuştur."
    ]
  },
  {
    "slug": "kadinlik-hayati",
    "name": "Kadınlık Hayatı",
    "year": 1914,
    "covers": [
      "/images/dergi-kapaklari/kadinlik-hayati.jpg"
    ],
    "paragraphs": [
      "“Kadınlığın teâlîsine hâdim, sahâifi kadın kalemlerine küşadedir” (Kadınlığın yükselmesine hizmet eden, sayfaları kadın kalemlerine açık olan) alt başlığı ve yayın felsefesiyle neşredilen süreli yayın, kadınların cemiyet hayatındaki statüsünü güçlendirmeyi ve eğitim seviyelerini yükseltmeyi başlıca misyon edinmiştir.",
      "Künyesinde edebî, fennî ve içtimaî muhtevalı, cumartesi günleri çıkarılan resimli bir kadın gazetesi/mecmuası olduğu belirtilen yayın, neşir hayatını yalnızca tek bir sayıyla tamamlamıştır. Neşredildiği kesin tarih tespit edilemeyen bu tek nüshanın yazar kadrosunda ise devrin öne çıkan kadın müelliflerinden Emine Seher Ali, Atiye Şükran ve Bedia Leman gibi dikkat çekici isimlerin yazıları yer almaktadır."
    ]
  },
  {
    "slug": "hanimlar-alemi",
    "name": "Hanımlar Âlemi",
    "year": 1914,
    "covers": [
      "/images/dergi-kapaklari/hanimlar-alemi-kapak.jpg",
      "/images/dergi-kapaklari/hanimlar-alemi.jpg"
    ],
    "archiveKey": "Hanımlar Âlemi",
    "paragraphs": [
      "Künyesinde \"Perşembe günleri çıkar, edebî, içtimaî, resimli hanım gazetesi\" ibaresiyle tarif edilen Hanımlar Âlemi, Rumi takvime göre 1330 [1914] senesinde matbuat alemine dahil olmuştur. Haftalık periyotlarla neşredilen mecmuanın 27 Mart 1330 – 24 Temmuz 1330 tarihleri arasında yayımlanmış toplam 18 nüshası mevcuttur.",
      "Yayın politikasının temel eksenini hanımlara okuma alışkanlığı kazandırmak ve onları eğlendirirken eğitmek hedefleri teşkil eder. Bu gaye, mecmuanın ilk sayısındaki takdim yazısında; her girişimin bir maksada dayandığı hatırlatılarak, derginin asıl gayesinin hanımların ilerlemesine ve fikrî olgunluğuna hizmet etmek, nezih ve ahlaki bir üsluptan ödün vermeksizin kadınlara okuma zevkini aşılamak olduğu şeklinde ifade edilir.",
      "1914 senesi; İttihat ve Terakki Fırkası'nın iktidar dizginlerini elinde tuttuğu, Bâbıâli Caddesi'ndeki idarehanelerin kurumsallaşarak mühim birer merkeze dönüştüğü, gazete imtiyaz sahiplerinin nüfuz kazandığı ancak muharrirlerin iktisadi sıkıntılarla mücadele ettiği bir atmosfere sahne olur. Bu ortamda Bâbıâli'nin dikkat çeken kadın neşriyatı olarak beliren Hanımlar Âlemi, bilhassa Mehmed Âsaf ve Ahmed Cevdet isimleriyle öne çıkar.",
      "Sayfalarında kadınların zevk ve his dünyasına hitap eden moda akımları, beden sağlığı, estetik, cemiyet hayatındaki donanımlı Osmanlı kadını ve görücü usulü evlilik gibi içtimai meseleler irdelenir. Bunun yanı sıra hasret, hayal kırıklığı ve aşk temalı edebî metinler, okur mektupları ve mükâfatlı bilmeceler vasıtasıyla yalnızca kadınların değil, erkek okurların da alakası canlı tutulmaya çalışılmıştır. Dönemin zarafet anlayışını yansıtan ve masalsı bir kompozisyon sunan kadın fotoğraflarına dair değerlendirmeler dikkat çeker. Gerek sayfaları süsleyen bu görseller gerekse neşredilen manzum ve mensur edebî ürünler, yayının döneme hâkim olan Romantizm akımının tesiri altında şekillendiğini somut biçimde ortaya koyar."
    ]
  },
  {
    "slug": "kadinlar-alemi",
    "name": "Kadınlar Âlemi",
    "year": 1914,
    "covers": [],
    "paragraphs": [
      "Künyesinde \"perşembe günleri çıkar, içtimaî, edebî, resimli hanım gazetesidir\" ibaresiyle tanıtılan Kadınlar Âlemi, İstanbul’da neşriyat hayatına başlamıştır. İmtiyaz sahipliğini Naci, yazı işleri müdürlüğünü (heyet-i tahririye müdürü) M. Ekrem, başyazarlığını ise Feriha Kamuran üstlenmiştir. İlk nüshası 22 Mayıs 1330 tarihinde yayımlanan gazete, 17 Temmuz 1330 tarihine kadar yalnızca 9 sayı çıkabilmiş ve ardından yayın hayatına veda etmiştir. 12 Haziran 1330 tarihli 4. sayıdan itibaren adını Osmanlı Kadınlar Âlemi olarak değiştiren yayın, alt başlığındaki misyon ifadesini de güncelleyerek \"Osmanlı kadınlarının teâli ve teâmülüne hâdim, içtimaî, edebî haftalık hanım gazetesidir\" şekline dönüştürmüştür.",
      "Gazetenin her sayısında; başlarının açık olması ve kıyafetlerinin dönemin şartlarına göre hayli iddialı ve dekolte unsurlar taşıması sebebiyle Avrupalı ve gayrimüslim oldukları anlaşılan muhtelif kadın fotoğraflarına yer verilmiştir. İlk sayının kapağını Japon kadınları süslerken, kimi sayılarda bu kadın tasvirlerinin altına romantik nitelikte edebi ibareler düşülmüştür. Bu tarz görsel ve metinsel tercihler, gazetenin yalnızca kadın haklarına odaklanmakla kalmayıp estetik ve edebi cepheyi levha ve resim gibi görsel unsurlarla tahkim eden bir yayın çizgisi güttüğünü gösterir. Haklar konusunda ise keskin ve radikal bir üslup yerine daha mutedil bir yaklaşım benimsenmiştir.",
      "Edebî planda Edebiyat-ı Cedîde anlayışına, siyasi planda ise Meşrutiyet idaresine yakın durduğu değerlendirilen süreli yayının yazar kadrosunda; Feriha Kamuran, Yusuf Ziya, M. Ekrem, Emin Hâkî, Muazzez Salih, Mahmut Sadık, Râife Halil, M. Mağmûmî ve Sadiye İdâr gibi isimler yer almaktadır."
    ]
  },
  {
    "slug": "bilgi-yurdu-isigi",
    "name": "Bilgi Yurdu Işığı",
    "year": 1917,
    "covers": [
      "/images/dergi-kapaklari/bilgi-yurdu.jpg",
      "/images/dergi-kapaklari/bilgi-yurdu-isigi.jpg"
    ],
    "archiveKey": "Bilgi Yurdu",
    "paragraphs": [
      "Nisan 1917 ile Ekim 1918 tarihleri arasında İstanbul’da aylık periyotlarla okuyucuya sunulan süreli yayın, neşir hayatını toplam 17 sayı ile tamamlamıştır. İmtiyaz sahipliğini ve idaresini eğitimci kökenli Ahmet Edib’in üstlendiği mecmua, ilk 12 sayısında Bilgi Yurdu Işığı, 13. sayıdan itibaren ise Bilgi Yurdu Mecmuası ismiyle yayımlanmıştır.",
      "Söz konusu neşriyat, Ahmet Edib tarafından İstanbul Cağaloğlu’nda temelleri atılan Hanımlar Bilgi Yurdunun resmî yayın organı vasfını taşır. 1 Temmuz 1916 tarihinde faaliyetlerine başlayan bu müessese; tahsil hayatından mahrum kalmış, öğrenimini yarıda bırakmış yahut muayyen bir sahada ihtisaslaşmak isteyen kadınların eğitimine katkı sağlamak gayesiyle kurulmuştur. Kurum bünyesinde kadınlara karşılıksız olarak okuma yazma öğretilmiş, çocuk terbiyesi ve evlat yetiştirme usullerine dair temel dersler verilmiştir. Bunun yanı sıra ibtidaî, rüşdî, idadî ve âlî düzeydeki müfredat programları, muhtelif imtihanlara hazırlık kursları ve talep edilen özel dersler ise ücret mukabilinde takip edilebilmiştir.",
      "Kurumun tesis edilmesinden yaklaşık dokuz buçuk ay sonra matbuat sahasına adım atan derginin temel gayesi, kadınların maarif ve kültür seviyesini yükseltmektir. Geniş bir yazar kadrosuna sahip olan mecmuada; Ahmet Edib, Mâcid Şevket, Doktor Nureddin Râmih, Hayri Ömer, Tahsin Nejad, Şükûfe Nihal, Halide Edib, Seniha Cemal, İffet Şevki, İhsan, Beyhan, Güzide, Ahmed Emin, Âsım Nihad, Fuat Hulusi, İskender Fahri, Fotoğrafçı Kemal, Ressam Ali Rıza ve Siraceddin gibi devrin mühim isimlerinin imzaları yer alır. Bunların haricinde dergi sayfalarında doğrudan şahıs adı yerine \"Hür Kadın\", \"Hikmet Muallimesi\" ve \"İdâre-i Beytiye Muallimesi\" gibi müstear mahlaslarla neşredilmiş yazılar da mevcuttur."
    ]
  },
  {
    "slug": "turk-kadini",
    "name": "Türk Kadını",
    "year": 1918,
    "covers": [
      "/images/dergi-kapaklari/turk-kadini.jpg"
    ],
    "archiveKey": "Türk Kadını",
    "paragraphs": [
      "1918-1919 yılları arasında İstanbul’da on beş günde bir okuyucuyla buluşan ve başlığında \"Türk\" kelimesine yer veren ilk kadın dergisi olma vasfını taşıyan Türk Kadını, İttihat ve Terakki Cemiyetinin fikrî çizgisiyle paralel bir yayın politikası izleyerek ekseriyetle milliyetçi kadın aydınların takip ettiği ve orta ile üst sınıf kadınların temsil edildiği bir mecra olmuştur. Muallim Ahmet Hâlid öncülüğünde neşir hayatına başlayan yayın, ilk birkaç hafta Türk Kızı adıyla çıktıktan sonra Türk Kadını ismini almış; 23 Mayıs 1918 ile 8 Mayıs 1919 tarihleri arasında toplam 21 sayı yayımlandıktan sonra Mondros Mütarekesi ve akabinde gelişen işgal süreci neticesinde kapanmıştır. Muhtevasında sosyolojik ve edebî meselelere ağırlık vermesi sebebiyle yalnızca bir kadın yayını değil, aynı zamanda edebiyat, kültür ve bilim mecmuası hüviyeti de kazanan derginin tüm sayıları 2010 yılında Latin harflerine aktarılarak kitaplaştırılmıştır. Yayının fikrî mimarlığını üstlenen Muallim Ahmet Hâlid Bey’in yönlendirdiği zengin kadroda Ahmed Edip, Mehmed Ârif, Ethem Nejat, Şükûfe Nihal, Nezihe Rikkat, Ömer Seyfettin ve \"Ev İdaresi\" sayfalarını hazırlayan Sevim Türkan daimi yazar olarak yer alırken; Necmeddin Sadık, Kâzım Nami, İbrahim Alâettin, Halide Nusret, M. Şekib, Müfide Ferit ve moda sütunlarını kaleme alan Perihan gibi devrin mühim isimleri de muhtelif yazılarıyla mecmuaya katkı sunmuştur."
    ]
  },
  {
    "slug": "genc-kadin",
    "name": "Genç Kadın",
    "year": 1919,
    "covers": [
      "/images/dergi-kapaklari/genc-kadin.jpg",
      "/images/dergi-kapaklari/genc-kadin-1.jpg"
    ],
    "archiveKey": "Genç Kadın",
    "paragraphs": [
      "Neşriyat hayatına 1919 senesinde adım atan Genç Kadın, ilk nüshasını 3 Ocak 1919 (1335) tarihinde yayımlamıştır. İmtiyaz sahipliğini Karahisarlı Muallim Fuad Şükrü Bey’in üstlendiği süreli yayının idare müdiresi ise Fatma Fuad Hanım’dır. Osmanlı Türkçesiyle kaleme alınan mecmuanın Latin harflerine aktarımı Çiçek İlengiz tarafından gerçekleştirilmiştir.",
      "İstanbul merkezli olarak Mahmut Bey Matbaası’nda basılan ve ekseriyetle on beş günde bir okuyucuyla buluşan dergi, geniş bir dağıtım ağına erişmiştir. Nitekim sayfalarında yer alan posta kutusu ve okur mektupları incelendiğinde; Erzurum, Bartın, Afyonkarahisar, Bandırma, Konya ve Bursa gibi pek çok Anadolu vilayetine ulaştığı görülür.",
      "Satış bedeli başlangıçta 5 kuruş olarak belirlenen nüshaların fiyatı zaman içinde artış göstermiştir. Görsel unsurlara da yer veren mecmuanın ilk sayısında bir kadın tasviri yer almış, sonraki sayılarda da metinlere eşlik eden kadın resimleri yayımlanmaya devam etmiştir."
    ]
  },
  {
    "slug": "inci",
    "name": "İnci",
    "year": 1919,
    "covers": [
      "/images/dergi-kapaklari/inci.jpg"
    ],
    "paragraphs": [
      "1 Şubat 1919 ile 1 Nisan 1921 tarihleri arasında 26 sayı çıkan dergi, yayınına bir yıl ara verdikten sonra 27. sayısından itibaren Yeni İnci adıyla yeniden yayımlanmış ve bu yeni döneminde 12 sayı daha basılmıştır. Derginin sahibi Sedat Simavi, savaş yıllarında okuyup etkilendiği Fransız Femina dergisini örnek alarak Osmanlı kadınlarının da böyle bir yayına ihtiyaç duyduğunu düşünmüş ve İnci dergisini çıkarmaya karar vermiştir. Birinci Dünya Savaşı’nın hemen ardından yayımlanan derginin temel amacı; yıllardır süren savaşların acısını hafifletmek ve savaş haberlerinden yorulan ruhları dinlendirmektir. Bu amaçla kurulan güçlü yazar kadrosunda; şiirleriyle Faruk Nafiz, Yusuf Ziya, Yahya Kemal ve Recaizade Mahmut Ekrem yer alırken, hikâyeleriyle Ömer Seyfettin ve Reşat Nuri gibi önemli yazarlar dergiye katkı sağlamıştır."
    ]
  },
  {
    "slug": "inci-ve-yeni-inci",
    "name": "İnci ve Yeni İnci",
    "year": 1919,
    "covers": [
      "/images/dergi-kapaklari/yeni-inci.jpg"
    ],
    "paragraphs": [
      "1 Şubat 1919 Cumartesi günü, “Her ayın ilk günü çıkar, kadınlığa ait bilcümle nazari ve ilmi meselelerden bahseder, resimli kadın mecmuasıdır” Cümleleriyle yayın hayatına başlamıştır. Dergi, 1 Şubat 1335 (1 Şubat 1919)- 1 Nisan 1337 (1 Nisan 1921) tarihlerinde İnci adıyla yayın yapmıştır. Bu adıyla toplamda 27 sayı yayınlamıştır. 27. sayıdan sonra yaklaşık bir sene yayın hayatına ara vermiştir. 1338 (Haziran 1922), 1339 (Temmuz 1923) tarihleri arasında Yeni İnci adıyla 12 sayı daha yayınlamıştır. Derginin sahibi Sedat Simavi’dir. Ancak bir dönem başyazarlığını Emine Semiye devr almıştır.",
      "İnci dergisinin yayınlanmasında en büyük etken insanların savaş haberi okumaktan sıkılmasının üzerine bir nebze de olsa ruhları dinlendirmektir. Özellikle kadınlara, hayata, aile ve toplumsal ilişkilere rehberlik etmiştir. Birinci Dünya Savaşı’ndan sonra çıkarılan İnci dergisi dört yıl süren harp haberlerini, savaşın acısını hafifletmek için yorulan bedenleri ve zihinleri başka yöne yönlendirmeyi amaçlamıştır. Özellikle de kadınlara hitap eden bir dergi olmasına dikkat etmişlerdir.  Dergi aynı zamanda kadına şiddetin biçimlerini (fiziksel, duygusal, psikolojik, ekonomik, cinsel, sembolik), faillerini (toplumsal aktörler, erkek figürler, kadın figürler, kurumlar, medya) ve mağdurun algısını (içselleştirilmiş, reddedilen, sembolleştirilmiş) edebî kurgular (hikâye ve tefrikalar), toplumsal eleştiri yazıları ve okur mektupları üzerinden farklı boyutlarıyla aktarmıştır. Dönemin yayın anlayışında şiddet metinleştirilirken; kimi zaman ahlaki bir ikaz veya mağduriyet anlatısı olarak işlenmiş, kimi zaman da toplumsal çözülmenin ve savaş koşullarının kaçınılmaz bir sonucu olarak resmedilmiştir."
    ]
  },
  {
    "slug": "diyane",
    "name": "Diyane (Annemiz)",
    "year": 1920,
    "covers": [
      "/images/dergi-kapaklari/diyane.jpg"
    ],
    "paragraphs": [
      "Mart 1920 tarihini taşıyan ve bilinen ilk ve tek nüshasıyla neşir hayatını tamamlayan Diyane, Çerkes Kadınları Teavün Cemiyetinin fikirlerini yaymak ve kamuoyuna duyurmak gayesiyle çıkarılmış yayın organıdır. Künyesinde on beş günde bir yayımlanan ilmi, içtimai ve edebi bir mecmua olduğu belirtilen yayının muhtevasındaki yazı ve şiirler, hem Adigece hem de Osmanlı Türkçesiyle kaleme alınmıştır.",
      "İmtiyaz sahipliğini Hayriye Melek Hunç’un (Xunç), başyazarlığını ise Seza (Puh) Polar’ın üstlendiği derginin idare merkezi, Beşiktaş Akaretler’de faaliyet gösteren Çerkes Kadınları Teavün Cemiyeti binasıdır.",
      "Adige dilinde \"Annemiz\" manasına gelen Diyane, matbuat ve dil tarihindeki en ayırt edici yerini, Latin harfleri tatbik edilerek basılmış ilk Adigece yazılı kaynaklardan biri olma vasfıyla kazanır."
    ]
  },
  {
    "slug": "hanim",
    "name": "Hanım",
    "year": 1921,
    "covers": [
      "/images/dergi-kapaklari/hanim.jpg"
    ],
    "paragraphs": [
      "Eylül – Ekim 1921 tarihleri arasında günlük periyotla yayımlanan ve künyesinde \"Salon ve Aile Gazetesi\" ibaresine yer veren Kadın, Sedat Simavi’nin imtiyaz sahipliğinde neşredilmiş süreli bir yayındır. Yayın hayatını yalnızca 2 sayı ile tamamlayan gazete, muhtevasında dönemin moda gelişmelerine geniş yer ayırırken kadın meselesini merkezine alan edebî metinleri de ön plana çıkarmıştır. Gazetenin güçlü muharrir kadrosunda ise Emine Semiye, Rauf Ahmed, Ebüzziya Velid, Falih Rıfkı, Faruk Nafiz, Yusuf Ziya, Meclûbe ve Fahrettin Osman gibi matbuat dünyasının mühim isimleri yer almıştır."
    ]
  },
  {
    "slug": "ev-hocasi",
    "name": "Ev Hocası",
    "year": 1923,
    "covers": [
      "/images/dergi-kapaklari/ev-hocasi.jpg"
    ],
    "paragraphs": [
      "“Ev hanımlarına ve aile hayatına mahsus gayr-ı siyasî mecmuadır” ibaresiyle tanıtılan resimli süreli yayın Ev Hocası, 1 Temmuz 1339 [1923] tarihinde İstanbul’da tek sayı olarak neşredilmiştir.",
      "Ahmet Edib tarafından yayımlanan mecmuanın öncelikli hedef kitlesi; asgari düzeyde de olsa tahsil görmüş aileler ile öğrenim hayatını sürdüren genç dimağlardır. Türk Kadını ve Bilgi Yurdu Işığı dergilerinin de yazar kadrosunda bulunan ve mesul müdürlüğünü üstlenen Ahmet Edib, idare ettiği tüm bu yayınlarda bilimselliği merkeze almayı ve müspet fenni malumatı kadınlar ile genç nesillere ulaştırmayı temel gaye edinmiştir."
    ]
  },
  {
    "slug": "sus",
    "name": "Süs",
    "year": 1923,
    "covers": [
      "/images/dergi-kapaklari/sus.jpg"
    ],
    "paragraphs": [
      "Cumhuriyet’in ilanından birkaç ay evvel neşriyat hayatına adım atan Süs, 1923-1924 yıllarının toplumsal, iktisadi ve kültürel atmosferini yansıtması bakımından mühim bir yere sahiptir. Rejim değişikliğinin hemen öncesi ile sonrasına bizzat tanıklık eden yayın, Cumhuriyet devrinin ilk kadın-magazin mecmuası vasfını taşır.",
      "İlk nüshasını 16 Haziran 1923 tarihinde okura sunan dergi, 26 Temmuz 1924 tarihine kadar yayımını sürdürmüş ve toplam 55 sayı neşretmiştir; bu sayılar arasında 9 ve 33. nüshalar fevkalade (özel) sayı olarak basılmıştır. Osmanlı Türkçesi ile Tanin Matbaası’nda tabedilen mecmuanın umumi müdürlüğünü Hüseyin Remzi, başyazarlığını ise edebiyatımızın usta kalemi Mehmed Rauf üstlenmiştir.",
      "Sayfalarında kadın-erkek eşitliğinden moda ve spora, sıhhat ve tıbbi malumattan şahsi bakıma, çocuk terbiyesinden ev ve mutfak idaresine, sinemadan fıkra ve mizaha uzanan son derece zengin bir muhtevaya yer vermiştir. Bunun yanı sıra sinema yıldızları anketi, çocuk güzellik yarışması ve en beğenilen roman seçimi gibi muhtelif yarışmalar tertip eden dergi; okurlarına sunduğu kuponlar vasıtasıyla anlaşmalı mağazalarda 20 kuruşluk indirim imkânı sağlayarak etkileşimini kuvvetlendirmiştir.",
      "Yayın politikasında zamanla belirgin bir dönüşüm gözlenen mecmuanın 42. sayısında; asıl vazifesinin kadın hakları, kadın yaşamı ve kadının cemiyet içindeki mevkiini güçlendirmek olduğu açıkça ifade edilmiştir. Nitekim ilk nüshalarda daha ziyade ev düzeni, mutfak pratikleri, el işleri ve çocuk bakımı gibi gündelik hayatı ilgilendiren başlıklar ağırlıktayken, sonraki sayılarda siyasi, içtimai ve dinî meseleleri tartışmaya açan tahlil ve yazıların oranı belirgin bir biçimde artış göstermiştir."
    ]
  },
  {
    "slug": "firuze",
    "name": "Fîrûze",
    "year": 1924,
    "covers": [
      "/images/dergi-kapaklari/firuze.jpg"
    ],
    "paragraphs": [
      "Cumhuriyet’in ilanının ardından neşredilen ilk kadın mecmuası vasfını taşıyan Fîrûze, günümüze ulaşan kayıtlara göre 15 Eylül 1924 tarihli ilk nüshası ile 29 Eylül 1924 tarihli üçüncü nüshasıyla bilinmektedir. Normal satış bedeli 7,5 kuruş, talebeler için ise 5 kuruş olarak belirlenen yayının kadrosunda, Osmanlı kadın hareketinin mühim simalarından Şükûfe Nihal gibi yetkin yazarlar yer almıştır.",
      "Kendisini “Hanımlara Mahsus Haftalık Edebî Mecmua” alt başlığıyla takdim eden süreli yayın, aynı zamanda Süs dergisinin bir devamı niteliğinde olduğunu beyan etmiş; bu doğrultuda mevcut Süs abonelerine doğrudan ulaştırılmıştır. Yayının benimsediği temel yayın politikası ve misyonu; hem dünyada hem de özellikle memlekette son dönemde yönünü ve berraklığını kaybetmeye başlayan kadın hareketlerini, yetkin kalemlerin katkılarıyla doğru bir mecrada takip edip bu fikrî cereyanın sağlıklı bir zeminde ilerlemesine rehberlik etmek şeklinde formüle edilmiştir.",
      "Muhtevasında kamusal alanda ve bürokraside görev alan kadınlarla gerçekleştirilen mülakatlar, kadın ressamların tanıtımı, beden sağlığı ve estetik tavsiyeler gibi muhtelif başlıklara yer verilmiştir. Gerek Süs gerekse Fîrûze mecmualarında kadına yaklaşım; geleneksel annelik ve ev idaresi misyonuyla harmanlanmış, fakat aynı zamanda içtimaî, siyasî ve sanatsal sahalarda da yetkinlik gösteren modern bir kadın kimliği kurgulamaya yönelmiştir. Bu yayın çizgisi; vapur ve trenlerde perdeli bölmelerle görünmez kılınan pasif Osmanlı kadını tipinden, sahneye çıkan, sanatta ve cemiyet hayatında görünürlük kazanan faal Cumhuriyet kadınına geçiş merhalesini somut bir biçimde yansıtır."
    ]
  }
];
