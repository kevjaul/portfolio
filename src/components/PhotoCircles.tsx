import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import FadeIn from "./animations/FadeIn";
function PhotoCircles() {
  const [showTech, setShowTech] = useState(false);

  const techs = [
    { name: "Java", icon: "./logos/java.svg" },
    { name: "Git", icon: "./logos/git.svg" },
    { name: "React", icon: "./logos/react.svg" },
    { name: "SpringBoot", icon: "./logos/spring-logo.png" },
  ];
  const circleRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => setShowTech(true), 400);
    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    if (!circleRef.current) return;

    const update = () => {
      const size = circleRef.current?.offsetWidth || 0;
      setRadius(size / 2);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <>
      <div className="relative flex items-center md:justify-end justify-center md:w-1/2">
        <div className="relative md:translate-x-1/5">
          <div
            ref={circleRef}
            className="relative lg:w-200 lg:h-200 md:w-150 md:h-150 w-80 h-80 rounded-full overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full border-2 border-white rounded-full bg-[radial-gradient(circle_at_center,_#65ffb1f2_20%,_transparent_60%)] animate-[revealUp_1s_ease-out]" />
              <div className="absolute inset-7 border border-white/80 rounded-full animate-[revealUp_1.2s_ease-out]" />
            </div>
            <FadeIn direction="down">
              <img
                className="object-cover lg:-translate-y-[-6vh] lg:scale-[1.6] md:scale-[1.1] scale-[0.8] h-10vh transition-all duration-800"
                src="/KJ-detouree.svg"
                alt=""
              />
            </FadeIn>
          </div>
          {showTech && (
            <div className="absolute inset-0 flex items-center justify-center">
              {techs.map((tech, i) => {
                const startAngle = 160;
                const endAngle = 250;
                const angle =
                  startAngle +
                  (i / (techs.length - 1)) * (endAngle - startAngle);
                const angleRad = (angle * Math.PI) / 180;

                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <motion.img
                    key={tech.name}
                    src={tech.icon}
                    className="lg:w-30 lg:h-30 md:w-20 md:h-20 w-13 h-13 absolute pointer-events-none backdrop-blur-md rounded-full p-2"
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0,
                      rotate: -180,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x,
                      y,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PhotoCircles;
