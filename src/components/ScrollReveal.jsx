
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ScrollReveal({ children, delay = 0.1, y = 40 }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // permite repetir a animação
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
