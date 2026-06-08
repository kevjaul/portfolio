import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";

function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const footerButtons = ["CV", "Contact me !"];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 150);
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
          className="fixed bottom-0 left-8 z-50 flex gap-4 backdrop-blur-md"
        >
          <FadeIn direction="up" className="translate-y-[-20px]">
            <div className="my-2 w-70 flex flex-row justify-strech">
              <button className="app-btn highlight w-1/3 border-2 border-white rounded mx-2 shadow-[0_0_10px_rgba(101,255,177,0.6)]">
                {footerButtons[0]}
              </button>
              <button className="app-btn highlight w-1/2 border-2 border-white rounded mx-2 shadow-[0_0_10px_rgba(101,255,177,0.6)]">
                {footerButtons[1]}
              </button>
            </div>
          </FadeIn>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 text-white/80 backdrop-blur-md rounded-t-full p-2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center shadow-[0_0_10px_rgba(101,255,177,0.6)]">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce shadow-[0_0_10px_rgba(101,255,177,0.6)]" />
          </div>
          <span className="text-sm tracking-widest uppercase">
            Scroll to explore
          </span>
        </motion.div>
      )}
    </footer>
  );
}

export default Footer;
