// public/og-image.png dosyasını SVG'den render eder (sharp ile) — sosyal medya
// paylaşım önizlemesi (Open Graph / Twitter Card) için, 1200x630.
const path = require("path");
const sharp = require("sharp");

const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4a1420"/>
      <stop offset="55%" stop-color="#6d1f2b"/>
      <stop offset="100%" stop-color="#4a1420"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#b6863c" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#b6863c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1020" cy="80" r="280" fill="url(#glow)"/>

  <rect x="100" y="96" width="220" height="46" rx="23" fill="none" stroke="#d9b876" stroke-opacity="0.6" stroke-width="1.5"/>
  <text x="130" y="126" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="3" fill="#d9b876">TÜBİTAK 3005</text>

  <text x="100" y="230" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="600" fill="#f6efe2">Osmanlı Basınında</text>
  <text x="100" y="298" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="600" fill="#f6efe2">Kadına Yönelik <tspan fill="#d9b876">Şiddetin</tspan></text>
  <text x="100" y="366" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="600" fill="#d9b876">Analizi</text>

  <text x="100" y="420" font-family="Arial, sans-serif" font-size="26" fill="#f6efe2" fill-opacity="0.8">1869&#8211;1923 &#183; Süreli Yayınlarda Şiddet, Söylem ve Sessizlik</text>

  <line x1="100" y1="500" x2="1100" y2="500" stroke="#d9b876" stroke-opacity="0.25" stroke-width="1.5"/>

  <circle cx="123" cy="546" r="23" fill="none" stroke="#b6863c" stroke-width="1.5"/>
  <text x="123" y="553" font-family="Georgia, serif" font-size="18" fill="#b6863c" text-anchor="middle">OB</text>
  <text x="160" y="552" font-family="Arial, sans-serif" font-size="20" fill="#f6efe2" fill-opacity="0.65">Kilis 7 Aralık Üniversitesi</text>

  <text x="1100" y="552" font-family="Arial, sans-serif" font-size="20" fill="#f6efe2" fill-opacity="0.65" text-anchor="end">kadin-self.vercel.app</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, "../public/og-image.png"))
  .then(() => console.log("Wrote public/og-image.png"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
