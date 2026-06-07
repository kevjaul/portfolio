import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction: "up" | "down";
}

function FadeIn({ children, direction }: Props) {
  const variants = {
    up: { opacity: 1, y: 20 },
    down: { opacity: 1, y: -20 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={variants[direction]}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
