// **** Library Imports ****
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { motion } from "framer-motion";

// **** Local Imports ****

const Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-black">
      <motion.div
        initial="hidden"
        whileInView="whileInView"
        className="flex flex-col lg:flex-row"
      >
        <div className="flex-[0.65] px-4 lg:pl-20 py-10 flex-col gap-8 order-1 lg:order-0">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            {/* Column 1 -> Businesses */}
            <div className="flex flex-col gap-4 lg:basis-1/3">
              <motion.h3
                variants={Variants}
                className="border-b text-xl font-medium text-white"
              >
                Businesses
              </motion.h3>

              <div className="flex flex-col gap-2">
                <motion.div
                  variants={Variants}
                  className="flex flex-row items-center gap-2"
                >
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-white">
                    Projects
                  </Link>
                </motion.div>

                <motion.div
                  variants={Variants}
                  className="flex flex-row items-center gap-2"
                >
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-white">
                    Apparel & Footwear
                  </Link>
                </motion.div>

                <motion.div
                  variants={Variants}
                  className="flex flex-row items-center gap-2"
                >
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-white">
                    Automotive Components
                  </Link>
                </motion.div>

                <motion.div
                  variants={Variants}
                  className="flex flex-row items-center gap-2"
                >
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-white">
                    Logistics & Supply Chain
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Column 2 -> About Us */}
            <div className="flex flex-col gap-4 lg:basis-1/3">
              <motion.h3
                variants={Variants}
                className="border-b text-xl font-medium text-white"
              >
                About Us
              </motion.h3>

              <div className="flex flex-col gap-2">
                <motion.div
                  variants={Variants}
                  className="flex flex-row items-center gap-2"
                >
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-white">
                    Who We Are
                  </Link>
                </motion.div>

                <motion.div
                  variants={Variants}
                  className="flex flex-row items-center gap-2"
                >
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-white">
                    Purpose & Values
                  </Link>
                </motion.div>

                <motion.div
                  variants={Variants}
                  className="flex flex-row items-center gap-2"
                >
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-white">
                    Leadership
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Column 3 -> Corporate Office */}
            <div className="flex flex-col gap-4 lg:basis-1/3">
              <motion.h3
                variants={Variants}
                className="border-b text-xl font-medium text-white"
              >
                Corporate Office
              </motion.h3>

              <div className="flex flex-col gap-2">
                <motion.h2 variants={Variants} className="text-lg text-white">
                  Apollo International Limited
                </motion.h2>
                <motion.p
                  variants={Variants}
                  className="text-white text-[16px]"
                >
                  Apollo Towers, Plot No 20, Sector 44 Gurgaon - 122002,
                  Haryana, India
                </motion.p>

                <motion.div
                  variants={Variants}
                  className="flex flex-row items-center gap-3 text-white"
                >
                  <span className="p-2 shadow-md rounded-md bg-white">
                    <BsFillTelephoneFill className="w-4 h-4 text-body-text" />
                  </span>
                  <span>(91-124) 6740100</span>
                </motion.div>

                <motion.div
                  variants={Variants}
                  className="flex flex-row items-center gap-3 text-white"
                >
                  <span className="p-2 shadow-md rounded-md bg-white">
                    <BsFillTelephoneFill className="w-4 h-4 text-body-text" />
                  </span>
                  <span>(91-124) 6740200</span>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between mt-10">
            <motion.p
              variants={Variants}
              className="text-white order-1 lg:order-0 text-center"
            >
              Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </motion.p>

            <motion.div
              variants={Variants}
              className="flex flex-col gap-1 order-0 lg:order-1 lg:flex-row lg:items-center lg:gap-6"
            >
              <Link to="#" className="text-white">
                Privacy Statement
              </Link>
              <Link to="#" className="text-white">
                Terms & Condition
              </Link>
              <Link to="#" className="text-white">
                Sitemap
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex-[0.35] pr-20 order-0 lg:order-1 px-4 lg:pr-20 py-10">
          <div className="flex flex-col gap-6">
            <motion.h2
              variants={Variants}
              className="text-xl border-b text-white"
            >
              Join our Newsletter
            </motion.h2>
            <motion.p variants={Variants} className="text-white">
              and get information about our new products, special offers, and
              upcoming events.
            </motion.p>

            <motion.div
              variants={Variants}
              className="bg-white w-full flex p-1 rounded-md"
            >
              <input
                type="text"
                className="flex-1 outline-none text-xl text-body-text"
              />

              <button className="btn_gradient px-3 py-1 text-xs lg:px-5 lg:py-2 lg:text-base rounded-md text-white uppercase tracking-wider">
                Subscribe
              </button>
            </motion.div>

            <motion.div
              variants={Variants}
              className="flex flex-row gap-4 items-center mt:10"
            >
              <h4 className="text-white">Connect with Us!</h4>

              <div className="flex flex-row items-center gap-2">
                <Link to="#" className="p-2 shadow-sm rounded-md bg-white">
                  <BiLogoFacebook className="w-4 h-4 text-main-text" />
                </Link>
                <Link to="#" className="p-2 shadow-sm rounded-md bg-white">
                  <AiOutlineTwitter className="w-4 h-4 text-main-text" />
                </Link>
                <Link to="#" className="p-2 shadow-sm rounded-md bg-white">
                  <AiOutlineInstagram className="w-4 h-4 text-main-text" />
                </Link>
                <Link to="#" className="p-2 shadow-sm rounded-md bg-white">
                  <TfiYoutube className="w-4 h-4 text-main-text" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
