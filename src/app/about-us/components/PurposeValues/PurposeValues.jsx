// **** Library Imports *****
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// const purposeValues = [
//   {
//     id: "1",
//     pv: "A premier global business conglomerate Incorporated in 1994",
//   },
//   {
//     id: "2",
//     pv: "Leading businesses trust us for our unmatched business experties and ethics",
//   },
//   {
//     id: "3",
//     pv: "Commited to innovation-led, exponential growth",
//   },
//   {
//     id: "4",
//     pv: "Anchored by an extraordinary force of over 17,500 employees",
//   },
//   {
//     id: "5",
//     pv: "Products and services making an impact in over 45 countries",
//   },
//   {
//     id: "6",
//     pv: "Our businesses have grown into global powerhouses in a wide range of sectors",
//   },
// ];

const pvVariants = {
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
  },
};

const PurposeValues = ({ data }) => {
  return (
    <section className="relative px-3 md:px-5 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 lg:flex-row lg:justify-between py-16 md:py-32">
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl text-body-text">{data?.subtitle}</h2>
          <h1 className="text-4xl lg:text-6xl text-main-text">{data?.title}</h1>
          <p className="text-body-text w-96 text-lg">{data?.description}</p>
        </div>

        <div className="flex-1">
          <div className="lg:max-w-[75%] ml-auto flex flex-col">
            <div className="relative">
              {data?.nodes?.map((purposeValue) => {
                return (
                  <motion.div
                    initial="hidden"
                    whileHover="onHover"
                    key={purposeValue.id}
                    className="flex flex-row items-center justify-between p-5 relative first:border-t-2 border-b-2"
                  >
                    <motion.div
                      variants={pvVariants}
                      className="absolute bg-white"
                    ></motion.div>
                    <p className="text-xl basis-3/5 relative z-[2]">
                      {purposeValue.pv}
                    </p>

                    <div className="border w-12 h-12 flex items-center justify-center rounded-full relative z-[2]">
                      <ArrowRight className="w-6 h-6 text-body-text" />
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

export default PurposeValues;
