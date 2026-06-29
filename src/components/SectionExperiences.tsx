import { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import Card from "./Card";
import FloatingIcons from "./animations/FloatingIcons";

type CardsInfos = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  explenations?: string;
  techs: string[];
};

type ExperienceType = "professional" | "formation";

function SectionExperiences() {
  const { t, i18n } = useTranslation();

  const [activeCard, setActiveCard] = useState(0);
  const experienceTypeSwitch = [
    {
      id: "professional",
      label: t("experiences.professional.title"),
    },
    {
      id: "formation",
      label: t("experiences.formation.title"),
    },
  ];
  const [selected, setSelected] = useState<ExperienceType>("professional");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const gearRef = useRef<HTMLDivElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress: scrollCards } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sectionHeaderY = useTransform(scrollCards, [0.57, 1], [0, -720]);
  const formationCardsInfos: CardsInfos[] = [
    {
      id: 0,
      title: t("experiences.formation.engineer.title"),
      subtitle: t("experiences.formation.engineer.subInfos"),
      description: t("experiences.formation.engineer.description"),
      techs: useMemo(
        () => [
          "./logos/java.svg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg",
          "https://icon.icepanel.io/Technology/svg/MySQL.svg",
          "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
          "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
          "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
          "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
          "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg",
          "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        ],
        [],
      ),
    },
    {
      id: 1,
      title: t("experiences.formation.master.title"),
      subtitle: t("experiences.formation.master.subInfos"),
      description: t("experiences.formation.master.description"),
      techs: useMemo(
        () => [
          "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        ],
        [],
      ),
    },
    {
      id: 2,
      title: t("experiences.formation.dut.title"),
      subtitle: t("experiences.formation.dut.subInfos"),
      description: t("experiences.formation.dut.description"),
      techs: useMemo(
        () => [
          "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
          "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg",
          "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg",
          "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Cib-symfony_%28CoreUI_Icons_v1.0.0%29.svg",
        ],
        [],
      ),
    },
  ];
  const professionnelCardsInfos: CardsInfos[] = [
    {
      id: 0,
      title: t("experiences.professional.recentInternship.title"),
      subtitle: t("experiences.professional.recentInternship.subInfos"),
      description: t("experiences.professional.recentInternship.description"),
      techs: useMemo(
        () => [
          "./logos/NIM.png",
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Powershell_128.svg",
          "https://upload.wikimedia.org/wikipedia/commons/4/41/Microsoft_SQL_Server_2025_icon.svg",
          "https://upload.wikimedia.org/wikipedia/commons/3/35/GitLab_icon.svg",
        ],
        [],
      ),
    },
    {
      id: 1,
      title: t("experiences.professional.fullstackInternship.title"),
      subtitle: t("experiences.professional.fullstackInternship.subInfos"),
      description: t(
        "experiences.professional.fullstackInternship.description",
      ),
      techs: useMemo(
        () => [
          "./logos/cypress.svg",
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
          "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/3/35/GitLab_icon.svg",
          "https://icon.icepanel.io/Technology/svg/MySQL.svg",
        ],
        [],
      ),
    },
    {
      id: 2,
      title: t("experiences.professional.dutInternship.title"),
      subtitle: t("experiences.professional.dutInternship.subInfos"),
      description: t("experiences.professional.dutInternship.description"),
      techs: useMemo(
        () => [
          "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
          "./logos/miro.svg",
          "https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg",
        ],
        [],
      ),
    },
  ];
  const displayedCards =
    selected === "professional" ? professionnelCardsInfos : formationCardsInfos;
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = element ? 100 : 0;
    const y =
      (element?.getBoundingClientRect()?.top || 0) + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const startOffset = window.innerHeight * 0.65;

      const globalProgress = Math.min(
        1,
        Math.max(0, (startOffset - rect.top) / (startOffset + rect.height)),
      );

      setScrollProgress(globalProgress);
      const isCardsActive = rect.top <= startOffset;

      const adjustedProgress = Math.min(globalProgress / 0.85, 1);

      const index = isCardsActive
        ? Math.floor(adjustedProgress * displayedCards.length)
        : -1;

      setActiveCard(Math.min(displayedCards.length - 1, index));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedCards.length]);

  return (
    <section
      id={t("sections.experiences").toLowerCase()}
      className="scroll-mt-[100px] relative py-10"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute top-[-130px] left-0 w-full h-[170px] bg-gradient-to-b from-[#05010a]/0 to-[#05010a]/70 z-[-1]" />
      <div className="relative bg-[#05010a]/70">
        <motion.div
          className="sticky top-[70px] backdrop-blur-md z-10"
          style={{ y: sectionHeaderY }}
        >
          <h1 className="text-6xl highlight font-bold text-center md:mb-0 mb-4">
            {t("sections.experiences")}
          </h1>
          <div className="w-full flex justify-center mb-5">
            <div className="flex flex-col items-center gap-2 sm:w-[40%] w-[80%]">
              <div className="relative flex w-full">
                {experienceTypeSwitch.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelected(tab.id as ExperienceType);
                      setActiveCard(0);
                      scrollToSection(t("sections.experiences").toLowerCase());
                    }}
                    className={`relative py-2 text-lg font-medium transition-colors duration-300 w-1/2
                    ${
                      selected === tab.id
                        ? "text-white"
                        : "text-white/60 hover:text-[#a955f7]/80 hover:cursor-pointer"
                    }
                `}
                  >
                    {tab.label}
                  </button>
                ))}
                <div
                  className={`absolute bottom-0 h-[2px] bg-[#a955f7] transition-all duration-300 ease-out ${
                    selected === "professional"
                      ? "w-2/5 left-[5%]"
                      : "w-[30%] left-3/5"
                  }`}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full flex flex-row gap-4 items-start">
          <div
            className="w-full 2xl:w-[45%] lg:w-[55%] self-start min-h-[200vh]"
            ref={containerRef}
          >
            <div className="sticky self-start top-[210px] pb-[100px]">
              {displayedCards.map((cardInfos, i) => {
                const state = i <= activeCard;
                const isCurrentCard = i === activeCard;
                return (
                  <div className="relative w-auto flex flex-row gap-4 mb-5 sm:ml-[10%] ml-[3%]">
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
                      </div>
                    </div>
                    <motion.div
                      key={`${i}-${i18n.language}`}
                      className="relative w-[80%] max-w-[600px] pointer-events-auto h-fit"
                      initial={{
                        opacity: 0.2,
                        scale: 0.8,
                        filter: "blur(10px)",
                      }}
                      animate={{
                        opacity: state ? 1 : 0.2,
                        scale: state ? (isCurrentCard ? 1.03 : 1) : 0.85,
                        filter: state ? "blur(0px)" : "blur(6px)",
                        y: state ? -20 : 0,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Card
                        cardTitle={cardInfos.title}
                        cardSubTitle={cardInfos.subtitle}
                        className="shadow-[0_0_40px_rgba(168,85,247,0.15)] mt-5"
                      >
                        <ul className="whitespace-pre-line block lg:hidden list-disc pl-5 space-y-1 text-white/70">
                          {cardInfos.description
                            .split("\n")
                            .filter((line) => line.trim() !== "")
                            .map((line, i) => (
                              <li key={i}>{line}</li>
                            ))}
                        </ul>
                      </Card>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="sticky top-[210px] hidden lg:inline lg:mr-[2%] content-center 2xl:w-[55%] lg:w-[45%] pb-[120px]"
            ref={gearRef}
          >
            {activeCard >= 0 && (
              <div className="relative h-[406px] overflow-y-visible overflow-x-clip">
                <FloatingIcons
                  techs={displayedCards[activeCard]?.techs ?? []}
                />

                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeCard}
                    className="absolute inset-0 z-10 flex flex-col justify-start items-center px-10 text-center transform-gpu will-change-transform"
                    initial={{
                      x: 500,
                      y: 220,
                      opacity: 0,
                      scale: 0.92,
                      filter: "blur(8px)",
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      x: 500,
                      y: -220,
                      opacity: 0,
                      scale: 0.92,
                      filter: "blur(8px)",
                    }}
                    transition={{
                      duration: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="text-white text-3xl">
                      {selected === "professional"
                        ? t("experiences.professional.eyeCatcher")
                        : t("experiences.formation.eyeCatcher")}
                    </p>
                    <div className="mt-4">
                      <h3 className="mt-6 mb-2 text-2xl font-semibold highlight">
                        {displayedCards[activeCard].title}
                      </h3>
                      <ul className="whitespace-pre-line list-none text-white/60 flex flex-col items-center">
                        {displayedCards[activeCard].description
                          .split("\n")
                          .filter((line) => line.trim() !== "")
                          .map((line, i, arr) => (
                            <li
                              key={i}
                              className="w-fit overflow-visible xl:text-lg text-base"
                            >
                              {line}
                              {i !== arr.length - 1 && (
                                <div className="h-[2px] lg:my-2 mt-1 bg-white/20 w-[60%] justify-self-center" />
                              )}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
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

export default SectionExperiences;
