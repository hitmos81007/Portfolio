import { useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";
import { certificateGallery } from "@/lib/portfolio-media";

export function CertificateGallery() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      role="region"
      aria-label="Certificate gallery"
      data-paused={paused}
      className="certificate-gallery glass-strong mb-10 rounded-3xl py-4 sm:py-5"
      style={
        {
          "--certificate-gallery-duration": `${certificateGallery.length * 6}s`,
        } as CSSProperties
      }
    >
      <div className="mb-3 flex items-center justify-between gap-3 px-4 sm:px-5">
        <h3 className="text-xl text-gradient-gold">Certificate gallery</h3>
        <button
          type="button"
          className="glass hidden size-10 place-items-center rounded-full text-gold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-gold motion-safe:inline-grid"
          aria-label={
            paused
              ? "Resume certificate scrolling"
              : "Pause certificate scrolling"
          }
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
        </button>
      </div>
      <div className="certificate-gallery-viewport">
        <div className="certificate-gallery-track">
          {/* The second row of identical cards joins the end of the first as the loop wraps. */}
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              className="certificate-gallery-set flex shrink-0 gap-4 pr-4"
              aria-hidden={duplicate || undefined}
            >
              {certificateGallery.map((item) => (
                <li
                  key={item.image}
                  className="w-[clamp(13.5rem,62vw,19rem)] shrink-0"
                >
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={duplicate ? -1 : undefined}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/15 bg-black/25 transition-colors hover:border-gold/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
                  >
                    <div className="aspect-[4/3] bg-black/20 p-3">
                      <img
                        src={item.image}
                        alt=""
                        className="size-full object-contain"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex-1 border-t border-white/10 px-3.5 py-3">
                      <p className="text-sm font-medium leading-snug text-foreground group-hover:text-gold">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-muted-foreground">
                        {item.issuer}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
