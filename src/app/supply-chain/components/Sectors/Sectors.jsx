// **** Library Imports *****
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import TransportImage from "../../images/sectors/transport.png";
import { useState } from "react";

const keySectors = [
  {
    id: "1",
    pv: "Consumer Durables & High-Tech Industries",
    image: TransportImage
  },
  {
    id: "2",
    pv: "Automotive & Industrial Sector",
    image: TransportImage
  },
  {
    id: "3",
    pv: "E-Commerce & FMCG",
    image: TransportImage
  },
  {
    id: "4",
    pv: "Healthcare & Pharmaceuticals",
    image: TransportImage
  },
  {
    id: "5",
    pv: "Lifestyle & Retail",
    image: TransportImage
  },
];

// const pvVariants = {
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
//   },
// };

const Sectors = () => {
  const [currentImage, setCurrentImage] = useState(keySectors[0]?.image);

  const handleCurrentImage = (index) => {
    setCurrentImage(keySectors[index]?.image);
  };

  return (
    <section className="relative px-3 md:px-5 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 lg:flex-row lg:justify-between py-16 md:py-32">
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl text-body-text">Sectors</h2>
          <h1 className="text-4xl lg:text-6xl text-main-text">
            Key Sectors We Serve
          </h1>

          <div className="aspect-square relative">
            <img
              alt="Transport"
              src={currentImage}
              className="mix-blend-multiply"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="lg:max-w-[75%] ml-auto flex flex-col">
            <div className="pb-10">
              <h3 className="text-body-text text-lg">
                Apollo Supply Chain serve a diverse range of key sectors:
              </h3>
            </div>
            <div className="relative">
              {keySectors.map((keySector, index) => {
                return (
                  <motion.div
                    initial="hidden"
                    whileHover="onHover"
                    key={keySector.id}
                    className="flex flex-row items-center justify-between p-5 relative first:border-t-2 border-b-2 group"
                    onClick={() => handleCurrentImage(index)}
                  >
                    {/* <motion.div
                      variants={pvVariants}
                      className="absolute bg-white"
                    ></motion.div> */}
                    <p className="text-xl relative z-[2] text-body-text group-hover:text-main-text">
                      {index + 1 >= 10 ? index + 1 : `0${index + 1}`}{" "}
                    </p>
                    <p className="text-xl basis-3/5 relative z-[2] text-body-text group-hover:text-main-text">
                      {keySector.pv}
                    </p>

                    <div className="w-12 h-12 flex items-center justify-center rounded-full relative z-[2]">
                      <ArrowUpRight className="w-6 h-6 text-body-text group-hover:text-main-text" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
