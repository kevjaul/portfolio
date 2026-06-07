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
    <header
      className={`fixed top-0 right-3 z-50 ${scrolled ? "md:w-1/2 w-1/4 " : "md:w-screen w-1/2"} min-w-[750px] transition-all duration-300 `}
    >
      <FadeIn direction="up">
        <div className="my-8 mr-3 flex flex-row">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex flex-row justify-between border-2 border-white rounded mx-3 shadow-[0_0_10px_rgba(101,255,177,0.6)]">
            {headerTabs.map((tab) => (
              <div className="p-2 highlight hover:bg-emerald-400 w-1/4 text-center">
                <a href="#">{tab}</a>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </header>
  );
}

export default Header;
