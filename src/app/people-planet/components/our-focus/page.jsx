import { motion } from "framer-motion";

import FocusVideo from "../../images/focus-video.png";

const OurFocus = ({ data }) => {
  return (
    <div className="bg-white py-16 md:py-32 h-screen lg:h-[120vh]">
      <div className="relative">
        <div className="absolute max-w-4xl w-full h-[460px] left-0 top-0 p-5 bg-[#eee5e2] rounded-tr-lg rounded-br-lg flex flex-col items-center">
          <div className="flex flex-row gap-8">
            <motion.h1 className="text-7xl font-bold">{data.title}</motion.h1>
            <motion.p className="max-w-xl text-[#525252] text-lg">
              {data.description}
            </motion.p>
          </div>
        </div>

        <div className="absolute max-w-4xl w-full h-[460px] right-0 top-[400px] lg:top-72">
          <div className="relative">
            <img
              src={FocusVideo}
              alt="Focus Video"
              className="rounded-tl-lg rounded-bl-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFocus;
