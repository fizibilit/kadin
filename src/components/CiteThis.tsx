"use client";

import { useState } from "react";
import { project } from "@/data/project";

const SITE_URL = "https://kadin-self.vercel.app";

function buildCitation() {
  // Başvuru formunda projenin resmî başlangıç/bitiş yılı belirtilmediği için
  // yayın tarihi "t.y." (tarih yok) olarak bırakılır — APA'da bilinmeyen tarih
  // için standart kısaltma budur; uydurma bir yıl yazılmaz.
  return `${project.pi} (t.y.). ${project.title} (${project.years}) [${project.program} Projesi, No: ${project.number}]. ${project.institution}. ${SITE_URL}`;
}

export default function CiteThis() {
  const [copied, setCopied] = useState(false);
  const citation = buildCitation();

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard erişimi yoksa sessizce yok say
    }
  }

  return (
    <div className="rounded-2xl border border-gold-light/40 bg-parchment-dark/20 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-maroon">
        Bu Projeye Atıf Verin
      </p>
      <p className="mt-3 rounded-lg bg-parchment border border-gold-light/30 p-4 font-mono text-xs leading-relaxed text-ink-soft">
        {citation}
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-maroon/30 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-maroon transition-colors hover:bg-maroon/10"
      >
        {copied ? (
          <>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Kopyalandı
          </>
        ) : (
          <>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <rect x="4.5" y="4.5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
              <path d="M1.5 9.5v-7a1 1 0 0 1 1-1h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Atıf metnini kopyala
          </>
        )}
      </button>
    </div>
  );
}
