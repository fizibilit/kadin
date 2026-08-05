import { project } from "@/data/project";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-ink text-parchment-dark/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold font-display text-sm">
              OB
            </span>
            <p className="mt-4 font-display text-base font-semibold text-parchment">
              {project.title}
            </p>
            <p className="mt-1 text-sm">{project.years}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Proje
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{project.program}</li>
              <li>{project.programFull}</li>
              <li>{project.institution}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Yürütücü
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{project.pi}</li>
              <li>{project.institution}</li>
              <li>Süre: {project.duration}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-parchment/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {project.institution}. Tüm hakları saklıdır.</p>
          <p className="text-parchment-dark/60">
            Bu proje TÜBİTAK 3005 programı kapsamında desteklenmektedir.
          </p>
        </div>
      </div>
    </footer>
  );
}
