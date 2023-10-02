// **** Library Imports ****
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// **** Local Imports ****
import FeatImage from "../../images/identity/supply-chain-img.png";

import BadgeSvg from "../../images/identity/badge.svg";
import FileDocSvg from "../../images/identity/filedoc.svg";
import TrophySvg from "../../images/identity/trophy.svg";

const ScIdentity = () => {
  const MotionLink = motion(Link);
  const MotionArrowRight = motion(BsArrowRight);

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
    <section className="relative px-3 md:px-5 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto py-16 md:py-32">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex flex-row justify-center gap-6">
            <div className="relative overflow-hidden">
              <img
                src={FeatImage}
                alt="SC Identity"
                className="mix-blend-multiply"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <p className="text-lg font-medium text-[#f7931e]">Our Identity</p>
            <h1 className="relative leading-snug text-[28px] md:text-5xl text-main-text after:absolute after:border-2 after:left-0 after:-bottom-4 after:w-10 after:border-main-text">
              Our logistics Services Empower Businesses For Growth And
              Sustainability.
            </h1>

            <p className="text-[#525252] mt-4 text-lg">
              As a single-source integrated supply chain specialist, Apollo
              Supply Chain provide innovative, tech-driven solutions for your
              logistics requirements so that you can focus on your core business
              and profitability.
            </p>

            <p className="text-[#525252] text-lg">
              Driven by a strong brand lineage, we deliver bespoke solutions
              that simplify, protect, and transform supply chains. Our
              customer-first approach and a sharp focus on IT-based logistics
              solutions catalyze business growth and provide significant savings
              in time and operational expenses.
            </p>

            <div className="flex items-center justify-start">
              <MotionLink
                className="relative flex items-center text-[#f7931e]"
                to={"#"}
                initial="rest"
                whileHover="whileHover"
              >
                <span className="text-main-text font-medium text-lg text-[#f7931e]">
                  Read more
                </span>
                <motion.div
                  variants={buttonVariants}
                  layout
                  className="border border-[#f7931e] absolute p-3 rounded-full flex justify-end "
                >
                  <MotionArrowRight
                    className="w-4 h-4 self-end"
                    variants={iconVariants}
                  />
                </motion.div>
              </MotionLink>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full border mt-6 md:mt-20 mb-6 md:mb-16" />

        <div className="flex flex-col lg:flex-row md:justify-between md:items-center gap-4">
          <div className="flex-1 flex flex-row gap-6">
            <div className="w-20 md:w-28 h-20 md:h-28 flex items-center justify-center rounded-2xl bg-[#ffe8e8]">
              <img src={BadgeSvg} alt="Badge" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-main-text tracking-wide">
                150+
              </h1>
              <p className="text-main-text">
                Large Customers Across Industries
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-row gap-6">
            <div className="w-20 md:w-28 h-20 md:h-28 flex items-center justify-center rounded-2xl bg-[#e2dfff]">
              <img src={FileDocSvg} alt="Badge" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-main-text tracking-wide">
                18,000+
              </h1>
              <p className="text-main-text">Pin Codes Coverage Across India</p>
            </div>
          </div>
          <div className="flex-1 flex flex-row gap-6">
            <div className="w-20 md:w-28 h-20 md:h-28 flex items-center justify-center rounded-2xl bg-[#d3ffcb]">
              <img src={TrophySvg} alt="Badge" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-main-text tracking-wide">
                2,500+
              </h1>
              <p className="text-main-text">Experienced Employees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScIdentity;
