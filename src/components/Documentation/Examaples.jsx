import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const Examples = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div
        style={{ width: 200, height: 200, backgroundColor: "green" }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>click</button>
        <Items />
      </motion.nav>
    </div>
  );
};

export default Examples;
