"use client";

import { useEffect, useRef, useState } from "react";

// Bir sayıyı, bileşen mount olduğunda (veya `watch` değeri değiştiğinde) 0'dan
// hedef değere doğru kısa bir ease-out animasyonuyla saydırır.
export default function CountUp({
  value,
  duration = 700,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const from = 0;

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (value - from) * eased);
      if (t < 1) frame.current = requestAnimationFrame(tick);
    }

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [value, duration]);

  return (
    <>
      {display.toLocaleString("tr", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}
      {suffix}
    </>
  );
}
