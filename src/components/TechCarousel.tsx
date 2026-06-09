import { useRef, useState, useEffect } from "react";
import TechNameTag from "./TechNameTag";

type Techs = { name: string; subtitle: string; iconUrl: string };

interface Props {
  techs: Techs[];
}
function TechCarousel({ techs }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [hidden, setHidden] = useState(false);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkOverflow = () => {
      const parent = parentRef.current;
      const child = childRef.current;

      if (!parent || !child) return;
      setHidden(child.scrollWidth > parent.clientWidth);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    if (parentRef.current) observer.observe(parentRef.current);

    window.addEventListener("resize", checkOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, [techs]);

  return (
    <div ref={parentRef} className="w-full">
      <div
        ref={childRef}
        className="py-2 justify-start gap-3 h-15 w-fit flex absolute invisible pointer-events-none whitespace-nowrap"
      >
        {techs.map((tech) => (
          <TechNameTag
            key={tech.name}
            techLogo={tech.iconUrl}
            subtitle={tech.subtitle}
          >
            {tech.name}
          </TechNameTag>
        ))}
      </div>
      {!hidden ? (
        <div className="py-2 justify-start gap-3 h-15 w-full flex">
          {techs.map((tech) => (
            <TechNameTag
              key={tech.name}
              techLogo={tech.iconUrl}
              subtitle={tech.subtitle}
            >
              {tech.name}
            </TechNameTag>
          ))}
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white backdrop-blur-md p-1 rounded-full cursor-pointer"
          >
            ◀
          </button>
          <div className="w-[stretch] flex justify-center overflow-x-hidden mx-7">
            <div className="flex gap-3 snap-x snap-mandatory py-2 content-center w-[inherit]">
              <div className="relative w-[inherit]">
                <div
                  ref={carouselRef}
                  className="flex gap-3 overflow-x-auto py-2 scrollbar-none scroll-smooth select-none cursor-grab active:cursor-grabbing"
                >
                  {techs.map((tech) => (
                    <div key={tech.name} className="snap-start shrink-0">
                      <TechNameTag
                        techLogo={tech.iconUrl}
                        subtitle={tech.subtitle}
                      >
                        {tech.name}
                      </TechNameTag>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white backdrop-blur-md p-1 rounded-full cursor-pointer"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default TechCarousel;
