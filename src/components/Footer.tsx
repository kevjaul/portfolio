import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n, t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [hasBeenScrolled, setHasBeenScrolled] = useState(false);
  const footerButtons = [t("footer.cv"), t("footer.contact")];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = element ? 100 : 0;
    const y =
      (element?.getBoundingClientRect()?.top || 0) + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 150);
      if (window.scrollY > 150) {
        setHasBeenScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer>
      {scrolled ? (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          className="fixed bottom-0 z-50 flex gap-4 w-full"
        >
          <FadeIn direction="down" className="w-[inherit]">
            <div className="flex flex-row justify-between w-[inherit] my-2">
              <div className="w-fit flex flex-row justify-strech ml-8 text-nowrap">
                <button
                  className="app-btn highlight border-2 border-white rounded mr-2 shadow-[0_0_10px_rgba(168,85,247,0.95)] px-5 backdrop-blur-md"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "CV_2026_FullStack.pdf";
                    link.download = "CV 2026 Fullstack.pdf";
                    link.click();
                  }}
                >
                  {footerButtons[0]}
                </button>
                <button
                  className="app-btn highlight border-2 border-white rounded ml-2 shadow-[0_0_10px_rgba(168,85,247,0.95)] px-3 backdrop-blur-md"
                  onClick={() => scrollToSection("contact")}
                >
                  {footerButtons[1]}
                </button>
              </div>
              <button
                className="app-btn highlight border-2 border-white rounded mx-2 shadow-[0_0_10px_rgba(168,85,247,0.95)] backdrop-blur-md"
                onClick={() =>
                  i18n.changeLanguage(
                    i18n.resolvedLanguage === "en" ? "fr" : "en",
                  )
                }
              >
                <img
                  src={
                    i18n.resolvedLanguage === "en"
                      ? "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
                      : "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                  }
                  alt="flag"
                  className="w-8 rounded-md"
                />
              </button>
            </div>
          </FadeIn>
        </motion.div>
      ) : (
        !hasBeenScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 text-white/80 backdrop-blur-md rounded-t-full p-2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center shadow-[0_0_10px_rgba(168,85,247,0.95)]">
              <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce shadow-[0_0_10px_rgba(168,85,247,0.95)]" />
            </div>
            <span className="text-sm tracking-widest uppercase">
              {t("footer.scrollCta")}
            </span>
          </motion.div>
        )
      )}
    </footer>
  );
}

export default Footer;
