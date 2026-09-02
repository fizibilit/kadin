// Dijital arşivdeki 1425 metinden Türkçe kelime sıklığı çıkarır ve
// public/data/kelime-bulutu.json olarak kaydeder. Yalnızca site içeriğinden
// (arsiv-verileri.json) türetilir — dışarıdan veri eklenmez.
//
// Not: Türkçe eklemeli bir dil olduğu için otomatik kök bulma (stemming) kolayca
// yanlış köke düşer (örn. "kadının" -> "kad"); bu yüzden burada kök bulma
// UYGULANMAZ, ham kelime biçimleri sayılır. Aynı kelimenin farklı çekim
// biçimleri (kadın/kadınlar/kadının) ayrı satırlar olarak kalır.
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../public/data/arsiv-verileri.json");
const outPath = path.join(__dirname, "../public/data/kelime-bulutu.json");

const records = JSON.parse(fs.readFileSync(dataPath, "utf8"));

// Türkçe için sık geçen ama anlam taşımayan kelimeler (bağlaç, edat, zamir, yardımcı fiil vb.)
const STOPWORDS = new Set(
  `ve veya ile de da ki bu şu bir çok az en gibi için ama fakat lakin ancak
  değil olan olarak olur oldu olduğu olduğunu olmak olması ise ne nasıl niçin neden
  kadar daha çünkü hem hiç her herkes kendi kendisi kendini biz siz onlar bana beni sana
  seni ona onu bizi bize sizi size onları onlara benim senin bizim sizin
  var yok mı mu mü tarafından üzere göre karşı doğru içinde dışında üzerinde
  şey şeyler kişi kişiler zaman zamanı yıl yıllar gün günler defa kere
  diye diyerek dedi dediği demiş derler denilen böyle şöyle öyle
  bütün tüm birçok bazı hepsi hiçbir hangi kimin
  yapmak yapılan yapılması etmek eden edilen olunan
  pek gayet oldukça
  bile dahi yalnız sadece
  idi imiş
  üzerine altında arasında önünde sonra önce
  gerek lazım icap
  falan filan artık zaten belki hatta bunun bunları bundan
  olur olmuş olsun oluyor
  yani veyahut şimdiki`
    .split(/\s+/)
    .filter(Boolean)
);

// Otomatik kök bulma yerine, gözle doğrulanmış birkaç yüksek frekanslı kelime
// ailesi için elle (güvenli) bir eşleme — dilbilimsel tahmin değil, kontrol
// edilmiş bir liste. Listeyi görüntülerken en sık geçen çekim biçimi kullanılır.
const MERGE_FAMILIES = {
  kadın: ["kadın", "kadınlar", "kadının", "kadınları", "kadınlara", "kadınların", "kadınlık", "kadınlığın", "kadınlığı", "kadını"],
  erkek: ["erkek", "erkekler", "erkeklerin", "erkeği", "erkeğin", "erkeklere", "erkeği̇n"],
};
const mergeLookup = new Map();
for (const [root, forms] of Object.entries(MERGE_FAMILIES)) {
  for (const f of forms) mergeLookup.set(f, root);
}

const freq = new Map();
const displayForm = new Map(); // birleşen kök -> {biçim: sayaç}

for (const r of records) {
  const text = (r.text || "").toLocaleLowerCase("tr");
  const words = text
    .replace(/[^a-zçğıöşü\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 5 && !STOPWORDS.has(w));
  for (const w of words) {
    const key = mergeLookup.get(w) || w;
    freq.set(key, (freq.get(key) || 0) + 1);
    if (mergeLookup.has(w)) {
      const forms = displayForm.get(key) || new Map();
      forms.set(w, (forms.get(w) || 0) + 1);
      displayForm.set(key, forms);
    }
  }
}

const top = Array.from(freq.entries())
  .filter(([, count]) => count >= 6)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 45)
  .map(([key, count]) => {
    const forms = displayForm.get(key);
    if (!forms) return { word: key, count };
    const bestForm = Array.from(forms.entries()).sort((a, b) => b[1] - a[1])[0][0];
    return { word: bestForm, count };
  });

fs.writeFileSync(outPath, JSON.stringify(top, null, 2), "utf8");
console.log(`Wrote ${top.length} words to ${outPath}`);
console.log(top.slice(0, 20));
