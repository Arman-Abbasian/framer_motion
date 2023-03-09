import { motion } from "framer-motion";
import { useRef } from "react";
const Gestures = () => {
  const constraintsRef = useRef(null);
  return (
    <div>
      <motion.div
        className="box-container"
        whileTap={{ scale: 2, transition: { duration: 3 } }}
      >
        <button onPointerDownCapture={(e) => e.stopPropagation()} />
      </motion.div>
      <motion.div
        className="box-container"
        onHoverStart={(e, info) => console.log("Hover starts", e, info)}
        onHoverEnd={(e, info) => console.log("Hover Ends", e, info)}
      />
      <motion.div
        className="box-container"
        whileTap={{ scale: 1.2 }}
        onTap={(e, info) => console.log("onTap", e, info)}
        onTapStart={(e, info) => console.log("onTapStart", e, info)}
        onTapCancel={(e, info) => console.log("onTapCancel", e, info)}
      />
      <motion.div
        className="box-container"
        onPan={(e, info) => console.log("onPan", info.point.x, info.point.y)}
        onPanStart={(e, info) =>
          console.log("onPanStart", info.point.x, info.point.y)
        }
        onPanEnd={(e, info) => console.log("onPanCancel", e, info)}
      />
      <motion.div className="box-container" ref={constraintsRef}>
        <motion.div
          className="child-box-container"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        />
      </motion.div>
      <motion.div
        className="box-container"
        drag
        dragElastic={0.1}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragPropagation={true}
      >
        <motion.div className="child-box-container" />
      </motion.div>
      <motion.div
        className="box-container"
        drag
        dragDirectionLock
        onDirectionLock={(axis) => console.log(axis)}
      />
    </div>
  );
};

export default Gestures;
