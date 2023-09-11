/* eslint-disable react-hooks/exhaustive-deps */
// **** Library Imports ****
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// **** Local Imports ****

const LinkWithChildren = ({ label, childLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen, isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen, isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (window && ref && ref.current && !ref.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const MotionLink = motion(Link);

  const menuVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex items-center justify-center relative" ref={ref}>
      <div
        className="group flex items-center justify-center text-main-text"
        onClick={toggleMenu}
      >
        <span>{label}</span>
        <BiChevronDown className="h-4 w-4 group-hover:translate-y-[1px] transition-transform" />
      </div>

      <AnimatePresence>
        {isOpen && childLinks.length > 0 && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute border top-full mt-2 left-0 w-max bg-white shadow-md py-4 px-6 rounded-md z-10 flex flex-col gap-1 overflow-hidden"
          >
            {childLinks.map((link) => {
              const { id, label, slug } = link;
              return (
                <MotionLink
                  to={slug}
                  key={id}
                  onClick={closeMenu}
                  className="group flex items-center gap-4 text-main-text hover:text-green transition-all"
                  variants={childVariants}
                >
                  <BsArrowRight className="w-3 h-3 text-main-text" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {label}
                  </span>
                </MotionLink>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LinkWithChildren;
