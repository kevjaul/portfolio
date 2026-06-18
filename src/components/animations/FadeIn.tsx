import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  direction: "up" | "down" | "left" | "right";
  slideLength?: number;
  className?: string;
}

function FadeIn({
  children,
  direction,
  slideLength = 20,
  className = "",
}: Props) {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, {
    margin: "3000px 0px",
    once: true,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x:
        direction === "left"
          ? -slideLength
          : direction === "right"
            ? slideLength
            : 0,
      y:
        direction === "up"
          ? -slideLength
          : direction === "down"
            ? slideLength
            : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`translate-z-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
