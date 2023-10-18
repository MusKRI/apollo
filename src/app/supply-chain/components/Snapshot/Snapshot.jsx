// **** Library Imports ****
import { motion } from "framer-motion";

// **** Local Imports *****
import GImg1 from "../../../business/images/grid-img1.png";
import GImg2 from "../../../business/images/grid-img2.png";
import GImg3 from "../../../business/images/grid-img3.png";
import GImg4 from "../../../business/images/grid-img4.png";
import GImg5 from "../../../business/images/grid-img5.png";

// const imageVariants = {
//   hidden: {
//     left: 0,
//     right: 0,
//     top: 0,
//     opacity: 0,
//   },
//   onHover: {
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     opacity: 1,
//     mixBlendMode: "hard-light",
//   },
// };

const Snapshot = () => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-16 md:py-32">
        <div className="flex flex-col gap-7">
          <h2 className="relative leading-snug text-3xl text-main-text after:absolute after:border-2 after:left-0 after:-bottom-4 after:w-10 after:border-main-text">
            Snapshot
          </h2>
        </div>

        <div className="mt-10 business_snapshot_imgages">
          <motion.div
            initial="hidden"
            whileHover="onHover"
            className="ga-1 relative"
          >
            <img src={GImg1} alt="Image 1" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileHover="onHover"
            className="ga-2 relative"
          >
            <img src={GImg2} alt="Image 1" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileHover="onHover"
            className="ga-3 relative"
          >
            <img src={GImg3} alt="Image 1" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileHover="onHover"
            className="ga-4 relative"
          >
            <img src={GImg4} alt="Image 1" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileHover="onHover"
            className="ga-5 relative"
          >
            <img src={GImg5} alt="Image 1" />
          </motion.div>
        </div>

        <div className="mt-10 px-4">
          <div className="border p-6 rounded-md bg-[#f7931e] flex flex-col lg:flex-row justify-center gap-x-10 lg:gap-x-20">
            <div className="flex flex-col gap-1 self-center">
              <span className="text-white text-base text-center">
                Interact with us
              </span>
              <span className="text-white text-lg text-center">
                0124-674-0200
              </span>
            </div>
            <div className="border-r relative my-4 self-center">
              <span className="absolute top-1/2 -translate-y-1/2 left-[-13px] p-1 rounded-full bg-[#f7931e] text-white">
                OR
              </span>
            </div>
            <div className="self-center">
              <span className="text-white text-base">
                connect@apollosupplychain.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snapshot;
