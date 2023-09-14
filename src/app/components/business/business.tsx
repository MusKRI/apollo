// **** Library Imports ****
import React from "react";
import { motion } from "framer-motion";

// **** Local Imports ****
import SectionHeading from "../SectionHeading";
import SectionButton from "../SectionButton";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: {
    background: "linear-gradient(to bottom, transparent, transparent)",
  },
  hover: {
    background: "linear-gradient(to bottom, #238e34, #23278c)",
    transition: {
      duration: 2,
    },
  },
};

const cardLinkVariants = {
  hidden: {
    y: 200,
    display: "none",
  },
  hover: {
    y: 0,
    display: "flex",
  },
};

const Business = () => {
  const MotionLink = motion(Link);

  return (
    <section className="relative px-3 md:px-5 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row py-16 md:py-32 gap-10">
        <div className="flex flex-col px-6 gap-6 order-1 lg:order-0">
          <SectionHeading>
            Make your business <br />
            visible online
          </SectionHeading>

          <p className="text-body-text">
            Open an online store and become an international seller.
            <br />
            Your customers will enjoy shopping online!
          </p>

          <div className="flex">
            <SectionButton slug="#">Explore more</SectionButton>
          </div>
        </div>

        <div className="flex-1 flex flex-row items-center justify-center lg:justify-stretch flex-wrap gap-4 order-0 lg:order-1">
          {/* Card 1 */}
          <div
            className="relative overflow-hidden rounded-lg w-80 lg:w-[280px] h-[440px] lg:h-[500px] xl:-mt-[50px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileHover="hover"
              className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
            >
              <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                Business
              </div>

              <div className="text-white px-6 py-4 flex flex-col gap-3">
                <h1 className="text-4xl font-semibold transition">
                  Most Critical Business Priority
                </h1>
                <p className="transition">
                  We are providing loream services in this sector to wide area
                  of world
                </p>

                <MotionLink
                  variants={cardLinkVariants}
                  layout
                  to="#"
                  className="flex items-center gap-2"
                >
                  <span className="text-lg">Know more</span>
                  <span className="p-2 rounded-full bg-yellow-500">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MotionLink>
              </div>
            </motion.div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg w-80 lg:w-[280px] h-[440px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileHover="hover"
              className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
            >
              <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                Business
              </div>

              <div className="text-white px-6 py-4 flex flex-col gap-3">
                <h1 className="text-4xl font-semibold transition">
                  Most Critical Business Priority
                </h1>
                <p className="transition">
                  We are providing loream services in this sector to wide area
                  of world
                </p>

                <MotionLink
                  variants={cardLinkVariants}
                  layout
                  to="#"
                  className="flex items-center gap-2"
                >
                  <span className="text-lg">Know more</span>
                  <span className="p-2 rounded-full bg-yellow-500">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MotionLink>
              </div>
            </motion.div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg w-80 lg:w-[280px] h-[440px] lg:h-[500px] xl:-mt-[50px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileHover="hover"
              className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
            >
              <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                Business
              </div>

              <div className="text-white px-6 py-4 flex flex-col gap-3">
                <h1 className="text-4xl font-semibold transition">
                  Most Critical Business Priority
                </h1>
                <p className="transition">
                  We are providing loream services in this sector to wide area
                  of world
                </p>

                <MotionLink
                  variants={cardLinkVariants}
                  layout
                  to="#"
                  className="flex items-center gap-2"
                >
                  <span className="text-lg">Know more</span>
                  <span className="p-2 rounded-full bg-yellow-500">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MotionLink>
              </div>
            </motion.div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg w-80 lg:w-[280px] h-[440px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileHover="hover"
              className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
            >
              <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                Business
              </div>

              <div className="text-white px-6 py-4 flex flex-col gap-3">
                <h1 className="text-4xl font-semibold transition">
                  Most Critical Business Priority
                </h1>
                <p className="transition">
                  We are providing loream services in this sector to wide area
                  of world
                </p>

                <MotionLink
                  variants={cardLinkVariants}
                  layout
                  to="#"
                  className="flex items-center gap-2"
                >
                  <span className="text-lg">Know more</span>
                  <span className="p-2 rounded-full bg-yellow-500">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MotionLink>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
