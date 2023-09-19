// **** Library Imports ****
import { useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

// **** Local Imports ****
import { useCustomCursorText, useCustomCursorVariant } from "./useCustomCursor";

const CustomCursor = ({ children }) => {
  const { cursorText } = useCustomCursorText();
  const { cursorVariant } = useCustomCursorVariant();

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition - 5,
      y: mouseYPosition - 5,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    pp: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    // contact: {
    //   opacity: 1,
    //   backgroundColor: "#FFBCBC",
    //   color: "#000",
    //   height: 64,
    //   width: 64,
    //   fontSize: "32px",
    //   x: mouseXPosition - 48,
    //   y: mouseYPosition - 48
    // }
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <main ref={ref}>
      <motion.div
        variants={variants}
        className="circle static md:fixed md:!flex"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>
      {children}
    </main>
  );
};

export default CustomCursor;
