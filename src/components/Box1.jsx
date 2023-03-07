import { motion } from "framer-motion";
import { useState } from "react";
const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const boxVariants = {
    start: {
      opacity: 0.5,
      transition: {
        delay: 10,
      },
    },
    end: {
      x: isAnimating ? 400 : 0,
      opacity: isAnimating ? 1 : 0.5,
      rotate: isAnimating ? 360 : 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
  };
  return (
    <div className="container">
      <motion.div
        className="box-container"
        variants={boxVariants}
        initial="start"
        animate="end"
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  );
};

export default Box1;
