import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
const list = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
      when: "beforeChildren",
      staggerChildren: 0.6,
      delayChildren: 0.4,
    },
  },
};
const item = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: { opacity: 1, x: 0 },
};

const dynamicVariants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.9,
    },
  }),
  hidden: { opacity: 0 },
};

const Overview = () => {
  const count = useMotionValue(0);
  console.log(count);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const animation = animate(count, 100, { duration: 5 });
  }, []);
  const x = useMotionValue(0)

  useEffect(() => {
    const controls = animate(x, 100, {
      type: "spring",
      stiffness: 2000,
      onComplete: v => {}
    })
  
    return controls.stop
  })
  return (
    <>
      <div>
        <motion.circle
          className="box-container"
          cx={500}
          animate={{ cx: [null, 100, 200] }}
          transition={{ duration: 3, times: [0, 0.2, 1] }}
        />
      </div>
      <motion.button
        initial={{ opacity: 0.3 }}
        whileHover={{
          scale: 1.2,
          x: [null, 10, 60, 130, 180, 250],
          transition: { duration: 6, times: [0, 0.1, 0.8, 0.8, 0.9, 1] },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        ddd
      </motion.button>

      {/* variants */}

      <motion.ul
        style={{ backgroundColor: "green" }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>

      {/*dynamic variants*/}
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <motion.p
            key={item}
            variants={dynamicVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {item}
          </motion.p>
        );
      })}
      <motion.div>{rounded}</motion.div>
      <motion.div animate={{controls}}></motion.div>
    </>
  );
};

export default Overview;
