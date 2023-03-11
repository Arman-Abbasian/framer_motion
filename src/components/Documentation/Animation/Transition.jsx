import { motion } from "framer-motion";

const Transition = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay:2,
        duration:1,
        delayChildren: 1.5,
        staggerChildren: 1.5,
        staggerDirection: -1,
        when:"beforeChildren"
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div>
      <motion.ul style={{backgroundColor:"red"}} variants={container} initial="hidden" animate="show">
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
    </div>
  );
};

export default Transition;
