import { project } from "@/data/project";

// PI'nin e-posta adresi başvuru formunda yer almadığından, uydurma bir adres
// yazmak yerine mailto linki proje adıyla oluşturulur — gerçek adres eklendiğinde
// href güncellenmelidir.
export default function ContributeCallout() {
  return (
    <div className="rounded-2xl border border-gold-light/40 bg-gradient-to-br from-maroon to-maroon-dark p-6 sm:p-8 text-parchment">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold-light">
        Katkıda Bulunun
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold">
        Eksik bir dergi ya da kaynak mı biliyorsunuz?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-parchment-dark/85">
        1869–1923 arasında yayımlanmış, henüz taranmamış bir kadın dergisi, arşivde
        düzeltilmesi gereken bir kayıt ya da projeye dair bir geri bildiriminiz varsa
        proje yürütücüsü {project.pi} ile iletişime geçebilirsiniz.
      </p>
      <a
        href="#iletisim"
        className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-maroon-dark transition-colors hover:bg-gold-light"
      >
        İletişime Geç
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </a>
    </div>
  );
}
