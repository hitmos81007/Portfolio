import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Pause, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { certificateGallery } from "@/lib/portfolio-media";

const controlClass =
  "glass inline-grid size-11 place-items-center rounded-full text-gold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-gold disabled:opacity-40";
const linkClass =
  "inline-flex items-center gap-1.5 text-sm text-gold hover:underline";

export function CertificateGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlaying(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        threshold: 0.35,
      },
    );
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    update();
    api.on("select", update).on("reInit", update);
    return () => {
      api.off("select", update).off("reInit", update);
    };
  }, [api]);

  const rotating = playing && inView && !hovered;

  useEffect(() => {
    if (!api || !rotating) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) api.scrollNext();
    }, 7000);
    return () => window.clearInterval(timer);
  }, [api, rotating, selected]);

  return (
    <Carousel
      ref={galleryRef}
      setApi={setApi}
      opts={{
        loop: true,
        breakpoints: { "(prefers-reduced-motion: reduce)": { duration: 0 } },
      }}
      aria-label="Certificate gallery"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (
          event.target.matches(":focus-visible") &&
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          setPlaying(false);
        }
      }}
      className="glass-strong mb-10 overflow-hidden rounded-3xl p-4 sm:p-6"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl text-gradient-gold">Certificate gallery</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={controlClass}
            disabled={!api}
            aria-label={
              playing ? "Pause automatic rotation" : "Start automatic rotation"
            }
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? (
              <Pause className="size-4" />
            ) : (
              <Play className="size-4" />
            )}
          </button>
          <button
            type="button"
            className={controlClass}
            disabled={!api}
            aria-label="Previous certificate"
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            className={controlClass}
            disabled={!api}
            aria-label="Next certificate"
            onClick={() => api?.scrollNext()}
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
      <CarouselContent
        className="[touch-action:pan-y_pinch-zoom]"
        aria-live={rotating ? "off" : "polite"}
      >
        {certificateGallery.map((item, index) => (
          <CarouselItem
            key={item.image}
            aria-label={`${index + 1} of ${certificateGallery.length}`}
            aria-hidden={index !== selected}
          >
            <figure>
              <div className="flex h-[clamp(16rem,54vw,31rem)] cursor-grab items-center justify-center rounded-xl border border-white/10 bg-black/25 p-2 active:cursor-grabbing sm:p-4">
                <img
                  src={item.image}
                  alt={`Certificate for ${item.title}`}
                  className="h-full w-full select-none object-contain"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-4 flex flex-wrap items-start justify-between gap-x-5 gap-y-2">
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.issuer}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <a
                    className={linkClass}
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={index === selected ? 0 : -1}
                  >
                    Full-size image{" "}
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                  {item.source && (
                    <a
                      className={linkClass}
                      href={item.source}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={index === selected ? 0 : -1}
                    >
                      LinkedIn post{" "}
                      <ExternalLink className="size-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        <label className="flex min-w-0 max-w-full flex-wrap items-center gap-2 text-sm text-muted-foreground">
          Jump to certificate
          <select
            className="min-w-0 max-w-full rounded-md border border-white/15 bg-background px-2 py-2 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-gold sm:max-w-xs"
            value={selected}
            disabled={!api}
            onChange={(event) =>
              api?.scrollTo(Number(event.target.value), true)
            }
          >
            {certificateGallery.map((item, index) => (
              <option key={item.image} value={index}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
        <p className="text-sm tabular-nums text-muted-foreground">
          {selected + 1} / {certificateGallery.length}
        </p>
      </div>
    </Carousel>
  );
}
