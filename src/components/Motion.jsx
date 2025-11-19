import { motion } from "framer-motion";

function MeuComponente() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ padding: "20px", background: "#e0f3ff", borderRadius: "12px", marginBottom: "20px" }}
    >
      <h2>Conteúdo animado moderno ao scroll</h2>
      <p>Essa animação acontece quando o componente entra na viewport.</p>
    </motion.div>
  );
}

export default MeuComponente;
