import { motion } from "framer-motion";

const list = { hidden: { opacity: 0.5, x: 0 } };
const item = { hidden: { x: 40, opacity: 1 } };
const Doc1 = () => {
  return (
    <div className="container">
      <motion.div
        className="box-container"
        style={{ marginBottom: "1rem" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      ></motion.div>
      <motion.div className="box-container">
        <motion.ul
          variants={list}
          animate="hidden"
          style={{ backgroundColor: "red" }}
        >
          <motion.li variants={item} animate="hidden" />
          <motion.li />
          <motion.li />
        </motion.ul>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt sequi dicta dolore distinctio itaque quia voluptatem vitae! Ea,
        aut. Quae unde maxime quos minima aliquid commodi beatae inventore
        illum!
      </motion.div>
    </div>
  );
};

export default Doc1;
