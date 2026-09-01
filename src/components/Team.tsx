import { team } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function initials(name: string) {
  const clean = name.replace(/^(Prof\. Dr\.|Doç\. Dr\.|Dr\. Öğr\. Üyesi)\s*/i, "");
  const parts = clean.split(" ").filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}

function MemberCard({
  name,
  role,
  profileUrl,
  avatarClass,
}: {
  name: string;
  role: string;
  profileUrl?: string;
  avatarClass: string;
}) {
  const content = (
    <>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-maroon-dark ${avatarClass}`}
      >
        {initials(name)}
      </span>
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-ink">
          <span className="truncate">{name}</span>
          {profileUrl && (
            <svg
              className="h-3 w-3 shrink-0 text-gold"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 2h6v6M10 2 4.5 7.5M8.5 6.5V10H2V3.5h3.5"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </p>
        <p className="text-xs text-ink-soft/70">{role}</p>
      </div>
    </>
  );

  const className =
    "flex h-full items-center gap-3 rounded-xl border border-gold-light/40 bg-parchment p-4 transition-colors" +
    (profileUrl ? " hover:border-gold hover:bg-gold-light/10" : "");

  if (profileUrl) {
    return (
      <a href={profileUrl} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}

export default function Team() {
  return (
    <section id="ekip" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Araştırma Ekibi"
          title="1 Yürütücü · 7 Araştırmacı · 3 Bursiyer"
          description="Tarih, edebiyat, sosyoloji ve psikoloji disiplinlerinden bir araya gelen 11 kişilik ekip, alan uzmanı danışmanlarla birlikte çalışıyor. (Proje özeti kadroyu kısaca “1 yürütücü, 5 araştırmacı, 3 bursiyer” olarak tanımlasa da, iş paketi görev dağılımında fiilen 7 farklı araştırmacı adı geçmektedir.)"
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal className="sm:col-span-2 lg:col-span-4">
          {team.pi.profileUrl ? (
            <a
              href={team.pi.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border-2 border-gold bg-parchment-dark/30 p-6 transition-colors hover:bg-parchment-dark/40"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-maroon font-display text-lg font-semibold text-parchment">
                {initials(team.pi.name)}
              </span>
              <div>
                <p className="flex items-center gap-2 font-display text-lg font-semibold text-maroon-dark">
                  {team.pi.name}
                  <svg className="h-3.5 w-3.5 text-gold" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M4 2h6v6M10 2 4.5 7.5M8.5 6.5V10H2V3.5h3.5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>
                <p className="text-sm text-gold">{team.pi.role}</p>
              </div>
            </a>
          ) : (
            <div className="flex items-center gap-4 rounded-2xl border-2 border-gold bg-parchment-dark/30 p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-maroon font-display text-lg font-semibold text-parchment">
                {initials(team.pi.name)}
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-maroon-dark">
                  {team.pi.name}
                </p>
                <p className="text-sm text-gold">{team.pi.role}</p>
              </div>
            </div>
          )}
        </Reveal>

        {team.researchers.map((m, i) => (
          <Reveal key={m.name} delay={i * 60}>
            <MemberCard
              name={m.name}
              role="Araştırmacı"
              profileUrl={m.profileUrl}
              avatarClass="bg-parchment-dark"
            />
          </Reveal>
        ))}

        {team.scholars.map((m, i) => (
          <Reveal key={m.name} delay={(team.researchers.length + i) * 60}>
            <MemberCard
              name={m.name}
              role="Bursiyer"
              profileUrl={m.profileUrl}
              avatarClass="bg-gold-light/30"
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gold-light/40 bg-parchment-dark/30 p-5">
            <h3 className="font-display text-sm font-semibold text-maroon-dark">
              Akran Değerlendirme Panelindeki Uzmanlıklar
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {team.advisors.map((a) => (
                <span
                  key={a}
                  className="rounded-full bg-parchment px-3 py-1 text-xs text-ink-soft border border-gold-light/40"
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-soft/70">
              Kodlama süreci, Morrow (2005) akran değerlendirmesi yöntemiyle{" "}
              {team.externalReviewers} tarafından doğrulanır.
            </p>
          </div>
          <div className="rounded-xl border border-gold-light/40 bg-parchment-dark/30 p-5">
            <h3 className="font-display text-sm font-semibold text-maroon-dark">Bursiyerler</h3>
            <p className="mt-3 text-sm text-ink-soft">
              Metinlerin dijitalleştirilmesi, transkripsiyon ve görselleştirme süreçlerine
              aktif katkı sunan{" "}
              <span className="font-semibold text-maroon">{team.scholars.length} bursiyer</span>{" "}
              araştırmacı: {team.scholars.map((s) => s.name).join(", ")}. {team.scholarOutput}
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-gold-light/40 bg-parchment-dark/30 p-5">
          <h3 className="font-display text-sm font-semibold text-maroon-dark">
            Dış Danışman
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            Literatür taraması ve planlama aşamasında {team.externalConsultant}dan destek
            alınmaktadır.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
