import { useMemo, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Card from "./Card";

type CardsInfos = {
  id: number;
  x: number;
  y: number;
  title: string;
  subtitle: string;
  description: string;
};
function SectionExperience() {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);
  const experienceTypeSwitch = ["Formation", "Professionnel"];
  const [selected, setSelected] = useState("Formation");
  const formationCardsInfos: CardsInfos[] = useMemo(
    () => [
      {
        id: 0,
        x: 0.1,
        y: 0.1,
        title: "Ingénieur en Informatique",
        subtitle: "Informatique et Systèmes d'Information",
        description: "Temp",
      },
      {
        id: 1,
        x: 0.1,
        y: 0.2,
        title: "Master en Cybersécurité",
        subtitle: "Sécurité des Systèmes d'Information",
        description: "Temp",
      },
      {
        id: 2,
        x: 0.1,
        y: 0.3,
        title: "DUT Informatique",
        subtitle: "Informatique",
        description: "Temp",
      },
    ],
    [],
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(
          0,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );

      setScrollProgress(progress);

      const index = Math.floor(progress * formationCardsInfos.length);
      setActiveCard(Math.min(formationCardsInfos.length - 1, index));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [formationCardsInfos.length]);

  return (
    <section
      id={t("sections.experience").toLowerCase()}
      className="scroll-mt-[100px] relative py-10"
    >
      <div
        className="
    pointer-events-none absolute top-[-130px] left-0 w-full h-[170px]
    bg-gradient-to-b from-[#05010a]/0 to-[#05010a]/70 z-[-1]"
      />
      <div className="relative z-10 bg-[#05010a]/70">
        <h1 className="text-6xl highlight font-bold text-center md:mb-0 mb-4">
          {t("sections.experience")}
        </h1>
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center gap-2 sm:w-[40%] w-[80%]">
            <div className="relative flex w-full">
              {experienceTypeSwitch.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelected(tab)}
                  className={`
          relative py-2 text-lg font-medium transition-colors duration-300 w-1/2
          ${
            selected === tab
              ? "text-white"
              : "text-white/60 hover:text-[#a955f7]/80 hover:cursor-pointer"
          }
        `}
                >
                  {tab}
                </button>
              ))}

              <div
                className={`
        absolute bottom-0 h-[2px]
        bg-[#a955f7]
        transition-all duration-300 ease-out
      `}
                style={{
                  width: selected === "Formation" ? "30%" : "40%",
                  left: selected === "Formation" ? "10%" : "55%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="h-full" ref={containerRef}>
          {formationCardsInfos.map((cardInfos, i) => {
            const state = i <= activeCard;

            const x = cardInfos.x * window.innerWidth;
            const y = cardInfos.y * window.innerHeight;

            return (
              <motion.div
                key={i}
                className="relative w-[80%] max-w-[600px] pointer-events-auto h-fit"
                style={{
                  left: x,
                  top: y,
                }}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{
                  opacity: state ? 1 : 0.2,
                  scale: state ? 1 : 0.85,
                  filter: state ? "blur(0px)" : "blur(6px)",
                  y: state ? -20 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card
                  cardTitle={cardInfos.title}
                  cardSubTitle={cardInfos.subtitle}
                  cardFooter={
                    <div className="mt-4 text-xs text-white/30">
                      Experience {i + 1} / {formationCardsInfos.length}
                    </div>
                  }
                  className="shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                >
                  {cardInfos.description}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div
        className="
    pointer-events-none absolute bottom-[-130px] left-0 w-full h-[170px]
    bg-gradient-to-t from-[#05010a]/0 to-[#05010a]/70 z-[-1]"
      />
    </section>
  );
}

export default SectionExperience;
