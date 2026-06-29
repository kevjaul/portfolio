import { useEffect, useState } from "react";
import FadeIn from "./animations/FadeIn";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        let current = sectionIds[0];

        for (const id of sectionIds) {
          const section = document.getElementById(id);
          if (!section) continue;

          const { offsetTop, offsetHeight } = section;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            current = id;
            break;
          }
        }

        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds]);

    return activeSection;
  }

  const [scrolled, setScrolled] = useState(false);
  const headerTabs = [
    t("sections.home"),
    t("sections.experiences"),
    t("sections.projects"),
    t("sections.contact"),
  ];
  const activeSection = useActiveSection(
    headerTabs.map((s) => s.toLowerCase()),
  );
  const setColorHeaderSection = () => {
    if (activeSection) {
      return "text-[rgba(168,85,247,0.95)] font-bold";
    }
    return "text-white";
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = element ? 100 : 0;
    const y =
      (element?.getBoundingClientRect()?.top || 0) + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md">
      <FadeIn direction="up">
        <div className="my-4 sm:mx-3 mx-2 flex flex-row justify-between">
          <div className="w-1/2 h-auto items-center flex">
            <p className="lg:text-4xl md:text-xl text-lg highlight">Kévin.J</p>
          </div>
          <div
            className={`${scrolled ? "lg:w-1/3" : "lg:w-1/2"} w-[stretch] flex flex-row justify-between border-2 border-white rounded sm:mx-3 shadow-[0_0_10px_rgba(168,85,247,0.95)] transition-all duration-300`}
          >
            {headerTabs.map((tab) => {
              const id = tab.toLowerCase();
              const isActive = activeSection === id;
              return (
                <button
                  key={id + "_btn"}
                  className={`lg:w-1/4 app-btn highlight ${isActive ? `${setColorHeaderSection()} hover:text-white` : "text-white"}`}
                  onClick={() => scrollToSection(id)}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </header>
  );
}

export default Header;
