import { motion } from "framer-motion";
const Motion = () => {
  function template({ rotate, x }) {
    return `rotate(${rotate}) translateX(${x})`;
  }
  return (
    <div>
      <motion.div
        className="box-container"
        animate={{
          backgroundColor: "#000",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          transition: {
            duration: 2,
          },
        }}
      />
      <motion.div
        className="box-container"
        transformTemplate={template}
        animate={{
          rotate: 360,
          transition: {
            duration: 2,
          },
        }}
        style={{ rotate: 0, x: "calc(50vh - 100px)" }}
      />
      <motion.ul
        className="box-container"
        initial={{ "--rotate": "0deg" }}
        animate={{ "--rotate": "360deg" }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <li style={{ transform: "rotate(var(--rotate))" }} />
        <li style={{ transform: "rotate(var(--rotate))" }} />
        <li style={{ transform: "rotate(var(--rotate))" }} />
      </motion.ul>
    </div>
  );
};

export default Motion;
