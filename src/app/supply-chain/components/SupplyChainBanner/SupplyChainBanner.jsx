// **** Library Imports ****
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ImageCarousel } from "./Carousel";

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

const SupplyChainBanner = ({ data }) => {
  const MotionLink = motion(Link);
  const MotionArrowRight = motion(BsArrowRight);

  return (
    <div className="relative min-h-[calc(100vh-72px)] bg-[#f7931e]">
      <div className="px-3 md:px-5 h-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between py-16 h-full">
          <div className="flex flex-col gap-3">
            <h4 className="relative leading-snug text-2xl text-white after:absolute after:border-2 after:left-0 after:-bottom-4 after:w-10 after:border-white mb-4">
              {data?.subtitle}
            </h4>
            <div className="flex flex-col gap-2 py-10">
              <h1 className="text-white text-3xl md:text-6xl font-semibold">
                {data?.title}
              </h1>
              <p className="text-white text-lg">{data?.description}</p>

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

          {/* <div className="flex items-center justify-center flex-1 lg:flex-[0.5] supplychainBanner-carousel mb-10 order-0 lg:order-1">
            <SupplyChainCarousel slideNodes={data?.nodes} />
          </div> */}

          <ImageCarousel
            images={[
              "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld2.jpg",
              "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld1.jpg",
              "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld3.jpg",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SupplyChainBanner;
