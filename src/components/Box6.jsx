import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
const Box6 = () => {
  const control = useAnimation();
  const boxVariants = {};
  return (
    <div className="container">
      <div style={{ display: "flex", gap: "1rem", margin: "1rem" }}>
        <button
          className="buttonn"
          onClick={() => {
            control.start({
              x: 500,
              transition: { duration: 2 },
            });
          }}
        >
          right
        </button>
        <button
          className="buttonn"
          onClick={() => {
            control.start({
              x: 0,
              transition: { duration: 2 },
            });
          }}
        >
          left
        </button>
        <button
          className="buttonn"
          onClick={() => {
            control.start({
              borderRadius: "50%",
              transition: { duration: 2 },
            });
          }}
        >
          circle
        </button>
        <button
          className="buttonn"
          onClick={() => {
            control.start({
              borderRadius: "10%",
              transition: { duration: 2 },
            });
          }}
        >
          square
        </button>
        <button
          className="buttonn"
          onClick={() => {
            control.stop();
          }}
        >
          stop
        </button>
      </div>
      <motion.div className="box-container" animate={control}></motion.div>
    </div>
  );
};

export default Box6;
