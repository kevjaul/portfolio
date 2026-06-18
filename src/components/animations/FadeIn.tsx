import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction: "up" | "down" | "left" | "right";
  slideLenght?: number;
  className?: string;
}

function FadeIn({
  children,
  direction,
  slideLenght = 20,
  className = "",
}: Props) {
  const variants = {
    down: { opacity: 0, x: 0, y: slideLenght },
    up: { opacity: 0, x: 0, y: -slideLenght },
    right: { opacity: 0, x: slideLenght, y: 0 },
    left: { opacity: 0, x: -slideLenght, y: 0 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "50px" }}
      transition={{ duration: 0.6 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
