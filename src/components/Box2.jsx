import { motion } from "framer-motion";
import { useState } from "react";
const Box2 = () => {
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
        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{top:20,bottom:20,left:-20,right:20}}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  );
};

export default Box2;
