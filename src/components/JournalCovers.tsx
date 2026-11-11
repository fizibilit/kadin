"use client";

import Image from "next/image";
import { useState } from "react";

// Derginin kapak görselleri: büyük görsel + (birden fazla varsa) küçük görsel şeridi.
// Kapağı olmayan dergilerde baş harfli bir yer tutucu gösterilir.
export default function JournalCovers({ covers, name }: { covers: string[]; name: string }) {
  const [index, setIndex] = useState(0);

  if (covers.length === 0) {
    return (
      <div className="flex aspect-[3/4] w-full items-center justify-center rounded-2xl border border-gold-light/40 bg-gradient-to-br from-maroon to-maroon-dark">
        <span className="font-display text-7xl font-semibold text-gold-light/25">
          {name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-gold-light/40 bg-parchment-dark/30 shadow-lg">
        <Image
          key={covers[index]}
          src={covers[index]}
          alt={`${name} kapağı`}
          width={720}
          height={960}
          priority
          className="h-auto w-full"
        />
      </div>

      {covers.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {covers.map((c, i) => (
            <button
              key={c}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${name} görseli ${i + 1}`}
              className={`h-16 w-12 overflow-hidden rounded-md border-2 transition-colors ${
                i === index ? "border-maroon" : "border-gold-light/40 hover:border-gold"
              }`}
            >
              <Image src={c} alt="" width={96} height={128} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
