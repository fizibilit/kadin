// English summary content for the /en page. This is a curated overview, not a
// full translation of the Turkish site — it covers the project identity, aims,
// innovation, team and contact info. The full dataset (typology quotes, digital
// archive, chronology, concept map) remains Turkish-only, since it is built
// directly from Ottoman Turkish primary sources and their transcriptions.

export const projectEn = {
  program: "TÜBİTAK 3005",
  programFull: "Research Support Program for Innovative Solutions in Social Sciences and Humanities",
  number: "225K802",
  title: "Analysis of Violence Against Women in the Ottoman Press",
  years: "1869–1923",
  institution: "Kilis 7 Aralık University",
  duration: "18 months",
  pi: "Prof. Dr. M. Fatih KANTER",
};

export const statsEn = [
  { value: "1869–1923", label: "Period studied" },
  { value: "20+", label: "Periodicals surveyed" },
  { value: "4", label: "Layers in the violence typology" },
  { value: "11", label: "Members of the project team" },
  { value: "18 mo.", label: "Project duration" },
];

export const summaryEn = `This interdisciplinary research project, "Analysis of Violence Against Women in the Ottoman Press," examines texts on violence against women in periodicals aimed primarily at women, from the first Ottoman women's magazine (1869) through 1923. Rather than treating violence against women as a purely physical phenomenon, the project approaches it as a multi-layered issue that also encompasses social, cultural, psychological and communication-studies perspectives — aiming to fill a gap in the existing academic literature.`;

export const summaryExtraEn = `Bringing together disciplines such as literature, history, sociology, psychology and media studies, the research draws on Ottoman-era women's publications and the period's high-circulation newspapers to comprehensively assess how violence against women became socially visible, was legitimized, and was critically questioned. Texts written in the Ottoman (Arabic-based) script are being transliterated into the modern Turkish alphabet, making them digitally accessible as well.`;

export const innovationEn = [
  {
    title: "First Systematic Typological Model",
    text: "A four-layer typology of violence is applied for the first time systematically to the discursive analysis of violence against women in Ottoman-era periodicals.",
  },
  {
    title: "Comprehensive Source Survey",
    text: "Unlike traditional approaches limited to a small number of texts or select magazines, the period's press materials are examined holistically, within their historical-social context.",
  },
  {
    title: "Theoretical Depth",
    text: "Bourdieu's concept of \"symbolic violence\" and Foucault's \"docile body\" are, for the first time, systematically integrated into the analysis of Ottoman-era texts in this scope.",
  },
  {
    title: "Digital Accessibility",
    text: "Texts in Ottoman script that have never been transliterated are processed through a simplified transcription method, becoming an open dataset for interdisciplinary research.",
  },
];

export const nationalGainsEn = [
  {
    title: "Advancing the Humanities",
    text: "Letters and articles in women's magazines published between 1869 and 1923 bring a scholarly perspective to gender and the varied forms of violence against women; transliterating texts in Ottoman script surfaces sources of archival value.",
  },
  {
    title: "A Scientific Basis for Policy-Making",
    text: "Findings offer Turkey's ministries of Family and Social Services, Interior, Justice, National Education, and Culture and Tourism, as well as the Council of Higher Education (YÖK) and universities, a reference resource for identifying cultural codes, analyzing intergenerational transmission, and developing evidence-based strategy.",
  },
  {
    title: "Revealing Social Impact",
    text: "By making the historical continuity of violence against women visible, the project produces culturally grounded, data-driven insights for today's awareness campaigns, education curricula and media policy.",
  },
];

export const methodStepsEn = [
  {
    title: "Document Analysis",
    text: "Using the qualitative research method of document analysis, the content of written sources is examined systematically and rigorously to extract meaning.",
  },
  {
    title: "Purposive Criterion Sampling",
    text: "Magazines and newspapers from different regions and ideological leanings are selected according to defined criteria.",
  },
  {
    title: "Simplified Transcription",
    text: "Texts in Ottoman script are transliterated into the Latin alphabet using a method suited to cultural and historical analysis, rather than a strict letter-by-letter transliteration.",
  },
  {
    title: "Content Analysis (ATLAS.ti)",
    text: "Coding is carried out with the CAQDAS software ATLAS.ti; codes are validated through peer review among researchers and advisors.",
  },
];

type TeamMemberEn = { name: string; role?: string; profileUrl?: string };

export const teamEn: {
  pi: TeamMemberEn;
  researchers: TeamMemberEn[];
  projectAdvisors: TeamMemberEn[];
  advisors: string[];
  scholars: TeamMemberEn[];
} = {
  pi: {
    name: "Prof. Dr. M. Fatih KANTER",
    role: "Principal Investigator",
    profileUrl:
      "https://akademik.yok.gov.tr/AkademikArama/AkademisyenGorevOgrenimBilgileri?islem=direct&sira=NPyYQsydu7pn_jChegdWIA&authorId=4410C0CA8A3CC7EB",
  },
  researchers: [
    { name: "Prof. Dr. Beyhan KANTER" },
    { name: "Assoc. Prof. Dr. Nilüfer AKA ERDEM" },
    { name: "Assoc. Prof. Dr. Yavuz Sinan ULU" },
    { name: "Assoc. Prof. Dr. Metin Gani TAPAN" },
    { name: "Asst. Prof. Dr. M. Mücahid DALKILIÇ" },
  ],
  // Listed as "project advisors" in the work-package breakdown, not researchers.
  projectAdvisors: [
    { name: "Prof. Dr. M. Ruhat YAŞAR" },
    { name: "Asst. Prof. Dr. Erdinç GÜLCÜ" },
  ],
  advisors: ["Literary scholar", "Psychologist", "Sociologist", "Historian"],
  scholars: [{ name: "Kader BÜLBÜL" }, { name: "Ayşe Nur ŞAHİN" }, { name: "Melek Şevval TAPAN" }],
};

export const womenPeriodicalsEn = [
  "Terakki-i Muhadderat",
  "Aile",
  "Bilgi Yurdu",
  "Demet",
  "Ev Hocası",
  "Genç Kadın",
  "Hanımlar Âlemi",
  "Hanımlara Mahsus Gazete",
  "İnsaniyet",
  "Kadın (Salonica–Istanbul)",
  "Kadınlar Dünyası",
  "Mehasin",
  "Mürüvvet",
  "Siyanet",
  "Türk Kadını",
];
