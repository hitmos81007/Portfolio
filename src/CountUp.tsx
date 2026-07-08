import { useEffect, useRef, useState } from "react";

export function CountUp({ to, duration = 1600, decimals = 0, prefix = "", suffix = "" }: {
  to: number; duration?: number; decimals?: number; prefix?: string; suffix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const from = 0;
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(from + (to - from) * eased);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const fmt = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return <span ref={ref}>{prefix}{fmt}{suffix}</span>;
}
