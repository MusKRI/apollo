// **** Library Imports ****
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// **** Local Imports ****
import { cn } from "../../lib/utils";

const MotionLink = motion(Link);
const MotionArrowRight = motion(BsArrowRight);

const SectionButton = ({ slug, children, classes = "" }) => {
  const buttonVariants = {
    rest: {
      right: "-2rem",
    },
    whileHover: {
      left: "-0.5rem",
    },
  };

  const iconVariants = {
    rest: {
      x: 0,
    },
    whileHover: {
      x: 50,
    },
  };

  return (
    <MotionLink
      className={cn("relative flex items-center", classes)}
      to={slug}
      initial="rest"
      whileHover="whileHover"
    >
      <span className="text-main-text font-medium text-lg">{children}</span>
      <motion.div
        variants={buttonVariants}
        layout
        className="border border-main-text absolute p-3 rounded-full flex justify-end"
      >
        <MotionArrowRight
          className="w-4 h-4 self-end"
          variants={iconVariants}
        />
      </motion.div>
    </MotionLink>
  );
};

export default SectionButton;
