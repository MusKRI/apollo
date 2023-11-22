// **** Library Imports ****
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import LogisticImage from "../../images/the-edge/logistic.png";
import ApolloAccordion from "../../../../components/ui/accordion/accordion";
import { useState } from "react";

const TheEdge = () => {
  const MotionLink = motion(Link);
  const MotionArrowRight = motion(BsArrowRight);

  const images = [
    "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld2.jpg",
    "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld1.jpg",
    "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld3.jpg",
    "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleCurrentImage = (index) => {
    setCurrentImage(images[index]);
  };

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

  const accordionItems = [
    {
      id: 1,
      triggerItem: "Global Reach. Local Play:",
      content:
        "Large network of reliable partners and associates supporting assets for transportation and warehousing across India",
    },
    {
      id: 2,
      triggerItem: "Tech-Driven Solutions:",
      content:
        "Large network of reliable partners and associates supporting assets for transportation and warehousing across India",
    },
    {
      id: 3,
      triggerItem: "Consultative Solutions:",
      content:
        "Large network of reliable partners and associates supporting assets for transportation and warehousing across India",
    },
    {
      id: 4,
      triggerItem: "Strong Leadership &amp; Robust Operating Processes:",
      content:
        "Large network of reliable partners and associates supporting assets for transportation and warehousing across India",
    },
  ];

  return (
    <section className="relative px-3 md:px-5 bg-[#101021]">
      <div className="max-w-7xl mx-auto py-16 md:py-32">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex flex-row justify-center gap-6">
            <div className="relative overflow-hidden self-center mr-6">
              <img src={currentImage} alt="The Edge" />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <p className="text-lg font-medium text-[#f08f1e]">The Edge</p>
            <h1 className="relative leading-snug text-[28px] md:text-5xl text-white after:absolute after:border-2 after:left-0 after:-bottom-4 after:w-10 after:border-white">
              We do more than solve the immediate logistics need.
            </h1>

            <p className="text-white mt-4 text-lg">
              Integrated Logistics Services: Apollo Supply Chain covers the
              end-to-end supply chain from raw-material sourcing to after-sales
              services offering a complete portfolio of services including
              freight forwarding, contract logistics, warehousing, and
              transportation services.
            </p>

            <ApolloAccordion
              items={accordionItems}
              setCurrentImage={handleCurrentImage}
            />

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
      </div>
    </section>
  );
};

export default TheEdge;
