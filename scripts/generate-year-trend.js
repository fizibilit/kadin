// Dijital arşivdeki metinlerin yıllara göre dağılımını çıkarır (arsiv-verileri.json
// içindeki "year" alanından — Kadınlar Dünyası, Mehasin gibi çok sayılı dergilerin
// bulunduğu yıllarda kayıt sayısı doğal olarak yüksek çıkar; bu, dönemin şiddet
// oranındaki bir artışı değil, taranan dergi hacmini yansıtır).
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../public/data/arsiv-verileri.json");
const outPath = path.join(__dirname, "../public/data/yillara-gore-dagilim.json");

const records = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const byYear = new Map();
for (const r of records) {
  const y = (r.year || "").trim();
  if (!/^\d{4}$/.test(y)) continue;
  const year = Number(y);
  if (year < 1869 || year > 1923) continue; // proje kapsamı dışı kayıtları (veri girişi hatası) hariç tut
  byYear.set(year, (byYear.get(year) || 0) + 1);
}

const points = Array.from(byYear.entries())
  .sort((a, b) => a[0] - b[0])
  .map(([year, count]) => ({ year, count }));

fs.writeFileSync(outPath, JSON.stringify(points, null, 2), "utf8");
console.log(`Wrote ${points.length} year points to ${outPath}`);
console.log(points);
