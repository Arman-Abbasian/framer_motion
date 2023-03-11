import { motion } from "framer-motion";

const Transition = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1,
        delayChildren: 1.5,
        staggerChildren: 1.5,
        staggerDirection: -1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div>
      <motion.ul
        style={{ backgroundColor: "red" }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
      <motion.div
        className="box-container"
        animate={{ rotate: 180 }}
        transition={{
          repeat: 1,
          repeatType: "reverse",
          repeatDelay: 1,
          duration: 2,
          from: 270,
        }}
      />
      <motion.div
        className="box-container"
        animate={{ scale: [0, 1, 0.5, 1] }}
        transition={{ duration: 4, times: [0, 0.3, 0.9, 1] }}
      />
      <motion.div
        className="box-container"
        animate={{ x: 100 }}
        transition={{ type: "spring", duration: 4.8, bounce: 30.25 }}
      />
      <motion.a
        className="box-container"
        style={{ backgroundColor: "red" }}
        animate={{ x: 180 }}
        transition={{
          type: "spring",
          damping: 1,
          mass: 1.5,
          stiffness: 100,
          velocity: 100,
        }}
      />
      <motion.a
        className="box-container"
        style={{ backgroundColor: "green" }}
        animate={{ x: 180 }}
        transition={{ type: "spring",duration:6, restSpeed: 20.5,restDelta: 0.5 }}
      />
    </div>
  );
};

export default Transition;
