// **** Library Imports ****
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// **** Local Imports ****
// import Slide1 from "../../images/hero-slider/slider-img1.png";
import Slide2 from "../../images/hero-slider/slider-img2.png";
// import Slide3 from "../../images/hero-slider/slider-img3.png";
import SupplyChainCarousel from "./Carousel";

const slideNodes = [
  {
    id: "1",
    slideImage: Slide2,
  },
  {
    id: "2",
    slideImage: Slide2,
  },
  {
    id: "3",
    slideImage: Slide2,
  },
];

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

const SupplyChainBanner = () => {
  const MotionLink = motion(Link);
  const MotionArrowRight = motion(BsArrowRight);

  return (
    <div className="relative h-[calc(100vh-72px)] bg-[#f7931e]">
      <div className="px-3 md:px-5 h-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between py-16 h-full">
          <div className="flex flex-col justify-between gap-3 flex-[0.5] order-1 lg:order-0">
            <h4 className="relative leading-snug text-2xl text-white after:absolute after:border-2 after:left-0 after:-bottom-4 after:w-10 after:border-white mb-4">
              Apollo Supply Chain
            </h4>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl md:text-6xl font-semibold">
                Complex Supply Chain. Simplified
              </h1>
              <p className="text-white text-lg">
                We offer customized solutions for supply chain competitiveness
                and resilience.
              </p>

              <div className="flex items-center justify-start">
                <MotionLink
                  className="relative flex items-center text-white"
                  to={"#"}
                  initial="rest"
                  whileHover="whileHover"
                >
                  <span className="font-medium text-lg text-white">
                    Read more
                  </span>
                  <motion.div
                    variants={buttonVariants}
                    layout
                    className="border border-white absolute p-3 rounded-full flex justify-end "
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

          <div className="flex items-center justify-center flex-1 lg:flex-[0.5] supplychainBanner-carousel mb-10 order-0 lg:order-1">
            <SupplyChainCarousel slideNodes={slideNodes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainBanner;
