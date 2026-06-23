import { useMemo, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Card from "./Card";

type CardsInfos = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
};
function SectionExperience() {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);
  const experienceTypeSwitch = ["Professionnel", "Formation"];
  const [selected, setSelected] = useState("Professionnel");
  const formationCardsInfos: CardsInfos[] = [
    {
      id: 0,
      title: "Ingénieur en Informatique",
      subtitle: "Informatique et Systèmes d'Information",
      description: `Développement web utilisant le framework Symfony / PHP / Javascript
        Architecture logicielle, micro-services et résilience des systèmes
        Conception et gestion de bases de données relationnelles
      `,
    },
    {
      id: 1,
      title: "Master en Cybersécurité",
      subtitle: "Sécurité des Systèmes d'Information",
      description: "Temp",
    },
    {
      id: 2,
      title: "DUT Informatique",
      subtitle: "Informatique",
      description: "Temp",
    },
  ];
  const professionnelCardsInfos: CardsInfos[] = [
    {
      id: 0,
      title: "Consultant IAM (Stage)",
      subtitle: "IAM - Consulting - XML",
      description: `Temp`,
    },
    {
      id: 1,
      title: "Consultant IAM (Stage)",
      subtitle: "IAM - Consulting - XML",
      description: `Temp`,
    },
  ];
  const [displayedCards, setDisplayedCards] = useState(professionnelCardsInfos);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const globalProgress = Math.min(
        1,
        Math.max(
          0,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );

      setScrollProgress(globalProgress);

      const index = Math.min(
        displayedCards.length - 1,
        Math.floor(globalProgress * displayedCards.length + 0.15),
      );
      setActiveCard(Math.min(displayedCards.length - 1, index));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedCards.length]);

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
        <div className="w-full flex justify-center mb-5">
          <div className="flex flex-col items-center gap-2 sm:w-[40%] w-[80%]">
            <div className="relative flex w-full">
              {experienceTypeSwitch.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setSelected(tab);
                    setDisplayedCards(
                      tab === "Professionnel"
                        ? professionnelCardsInfos
                        : formationCardsInfos,
                    );
                  }}
                  className={`relative py-2 text-lg font-medium transition-colors duration-300 w-1/2
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
                className="absolute bottom-0 h-[2px] bg-[#a955f7] transition-all duration-300 ease-out"
                style={{
                  width: selected === "Professionnel" ? "40%" : "30%",
                  left: selected === "Professionnel" ? "5%" : "60%",
                }}
              />
            </div>
          </div>
        </div>

        <div ref={containerRef}>
          {displayedCards.map((cardInfos, i) => {
            const state = i <= activeCard;
            return (
              <div className="relative w-full flex flex-row gap-4 mb-5 sm:ml-[10%] ml-[3%]">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full mt-2 transition-all duration-300
                      ${
                        state
                          ? "bg-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.8)] scale-110"
                          : "bg-white/15"
                      }
                      ${i === activeCard && "animate-pulse shadow-[0_0_18px_rgba(168,85,247,0.6)]"}
                    `}
                  />
                  <div className="relative flex-1 w-[3px] mt-2 h-[95%] bg-white/10 overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#a855f7] via-[#c084fc] to-transparent transition-all duration-300"
                      style={{
                        height: `${state ? ((scrollProgress - (1 / displayedCards.length) * i) * 100) / (1 / displayedCards.length) : 0}%`,
                        boxShadow: "0 0 12px rgba(168,85,247,0.6)",
                      }}
                    />
                  </div>{" "}
                </div>
                <motion.div
                  key={i}
                  className="relative w-[80%] max-w-[600px] pointer-events-auto h-fit"
                  style={{ left: 0, top: 0 }}
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
                        Experience {i + 1} / {displayedCards.length}
                      </div>
                    }
                    className="shadow-[0_0_40px_rgba(168,85,247,0.15)] mt-5"
                  >
                    {cardInfos.description}
                  </Card>
                </motion.div>
              </div>
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
