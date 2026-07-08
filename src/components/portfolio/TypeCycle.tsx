import { useEffect, useState } from "react";

export function TypeCycle({ words, className }: { words: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "deleting">("typing");

  useEffect(() => {
    const current = words[i];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else {
        timer = setTimeout(() => setPhase("deleting"), 1500);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else {
        setI((i + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.12em] animate-pulse bg-[color:var(--gold)]" />
    </span>
  );
}
