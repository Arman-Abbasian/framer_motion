import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Menu = () => {
  const [show, setShow] = useState(false);
  const listVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      transition: {
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
        duration: 0.6,
        when: "beforeChildren",
      },
    },
    hidden: {
      opacity: 0,
      x: "-100vw",
      transition: {
        duration: 1,
      },
    },
  };

  const item = {
    initial: {
        opacity: 0,
        x: "-100vw",
        transition: {
          duration: 1,
        },
      },
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div>
      <button onClick={() => setShow(!show)}>menu</button>
      <AnimatePresence>
        {show && (
          <motion.ul
            className="ulStyles"
            variants={listVariants}
            initial="initial"
            animate="visible"
            exit="hidden"
          >
            <motion.li variants={item}>1</motion.li>
            <motion.li variants={item}>2</motion.li>
            <motion.li variants={item}>3</motion.li>
            <motion.li variants={item}>4</motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
