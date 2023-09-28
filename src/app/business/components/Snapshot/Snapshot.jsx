// **** Library Imports ****
import { motion } from "framer-motion";

// **** Local Imports *****
import GImg1 from "../../images/grid-img1.png";
import GImg2 from "../../images/grid-img2.png";
import GImg3 from "../../images/grid-img3.png";
import GImg4 from "../../images/grid-img4.png";
import GImg5 from "../../images/grid-img5.png";

const imageVariants = {
  hidden: {
    left: 0,
    right: 0,
    top: 0,
    opacity: 0,
  },
  onHover: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 1,
    mixBlendMode: "hard-light",
  },
};

const Snapshot = () => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-16 md:py-32">
        <div className="flex flex-col gap-7">
          <h2 className="text-3xl text-main-text">Snapshot</h2>
        </div>

        <div className="mt-10 business_snapshot_imgages">
          <motion.div
            initial="hidden"
            whileHover="onHover"
            className="ga-1 relative"
          >
            <motion.div
              variants={imageVariants}
              className="absolute gradient flex items-center justify-center"
            ></motion.div>
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
      </div>
    </section>
  );
};

export default Snapshot;
