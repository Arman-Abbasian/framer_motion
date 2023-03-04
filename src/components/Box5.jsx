import { motion } from "framer-motion";
import { useState } from "react";
const Box5 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const boxVariants = {
    end: {
      scale: [1,1.4,1.4,1,1],
      borderRadius:["20%","20%","50%","50%","20%"],
      rotate: [0,90,,180,270,360],
      transition: {
        type: "tween",
        duration:2,
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
        onClick={()=>setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  );
};

export default Box5;
