import * as React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
      duration:1,
      when:"beforeChildren"
    }
  }
};

const item = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition:{
        duration:1
    }
  }
};

export  const Box4 = () => (
  <motion.ul
    className="box-container"
    variants={container}
    initial="hidden"
    animate="visible"
  >

      <motion.li  className="item" variants={item}>1</motion.li>
      <motion.li  className="item" variants={item} >2</motion.li>
      <motion.li  className="item" variants={item} >3</motion.li>
  </motion.ul>
);
