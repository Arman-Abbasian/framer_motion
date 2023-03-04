import { motion } from "framer-motion";
import { useState } from "react";
const Box3 = () => {
  const boxVariants = {
    start: {
      x: "-100vw",
      
    },
    end: {
      x: 0,
      
      transition: {
        duration:0.5,
        delayChildren: 0.1,
        staggerChildren: 0.6,
        when: "beforeChildren",
      },
    },
  };
  const childBoxVariants = {
    start: {
      x: "-100vw",
      opacity: 0,
    },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="container">
      <motion.div className="box-container" variants={boxVariants} initial="start" animate="end">
        <motion.div
          className="child-box-container"
          variants={childBoxVariants}
        ></motion.div>
        <motion.div
          className="child-box-container"
          variants={childBoxVariants}
        ></motion.div>
        <motion.div
          className="child-box-container"
          variants={childBoxVariants}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Box3;
