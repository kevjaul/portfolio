import { useEffect, useState } from "react";
import FadeIn from "./animations/FadeIn";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerTabs = ["Home", "Experience", "Projects", "Contact"];

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
    <header className="fixed top-0 z-50 w-full">
      <FadeIn direction="up">
        <div className="my-4 mx-3 flex flex-row justify-between">
          <div className="w-1/2 h-auto items-center">
            <p className="text-4xl highlight">Kévin. J</p>
          </div>
          <div
            className={`${scrolled ? "md:w-1/3" : "md:w-1/2"} flex flex-row justify-between border-2 border-white rounded mx-3 shadow-[0_0_10px_rgba(101,255,177,0.6)] min-w-[400px] transition-all duration-300`}
          >
            {headerTabs.map((tab) => (
              <button className="p-2 highlight hover:bg-emerald-400 w-1/4 text-center cursor-pointer">
                {tab}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>
    </header>
  );
}

export default Header;
