import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction: "up" | "down" | "left" | "right";
  className?: string;
}

function FadeIn({ children, direction, className = "" }: Props) {
  const variants = {
    up: { opacity: 1, x: 0, y: 20 },
    down: { opacity: 1, x: 0, y: -20 },
    left: { opacity: 1, x: 20, y: 0 },
    right: { opacity: 1, x: 20, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0 }}
      whileInView={variants[direction]}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
