// **** Library Imports ****
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";

// **** Local Imports ****

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9]">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-[0.65] px-4 lg:pl-20 py-10 flex-col gap-8 order-1 lg:order-0">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            {/* Column 1 -> Businesses */}
            <div className="flex flex-col gap-4 lg:basis-1/3">
              <h3 className="border-b text-xl font-medium text-main-text">
                Businesses
              </h3>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-body-text">
                    Projects
                  </Link>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-body-text">
                    Apparel & Footwear
                  </Link>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-body-text">
                    Automotive Components
                  </Link>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-body-text">
                    Logistics & Supply Chain
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2 -> About Us */}
            <div className="flex flex-col gap-4 lg:basis-1/3">
              <h3 className="border-b text-xl font-medium text-main-text">
                About Us
              </h3>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-body-text">
                    Who We Are
                  </Link>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-body-text">
                    Purpose & Values
                  </Link>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400" />
                  <Link to="#" className="text-body-text">
                    Leadership
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 3 -> Corporate Office */}
            <div className="flex flex-col gap-4 lg:basis-1/3">
              <h3 className="border-b text-xl font-medium text-main-text">
                Corporate Office
              </h3>

              <div className="flex flex-col gap-2">
                <h2 className="text-lg text-main-text">
                  Apollo International Limited
                </h2>
                <p className="text-body-text text-[16px]">
                  Apollo Towers, Plot No 20, Sector 44 Gurgaon - 122002,
                  Haryana, India
                </p>

                <div className="flex flex-row items-center gap-3 text-body-text">
                  <span className="p-2 shadow-md rounded-md">
                    <BsFillTelephoneFill className="w-4 h-4 text-body-text" />
                  </span>
                  <span>(91-124) 6740100</span>
                </div>

                <div className="flex flex-row items-center gap-3 text-body-text">
                  <span className="p-2 shadow-md rounded-md">
                    <BsFillTelephoneFill className="w-4 h-4 text-body-text" />
                  </span>
                  <span>(91-124) 6740200</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between mt-10">
            <p className="text-body-text order-1 lg:order-0 text-center">
              Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>

            <div className="flex flex-col gap-1 order-0 lg:order-1 lg:flex-row lg:items-center lg:gap-6">
              <Link to="#" className="text-body-text">
                Privacy Statement
              </Link>
              <Link to="#" className="text-body-text">
                Terms & Condition
              </Link>
              <Link to="#" className="text-body-text">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-[0.35] pr-20 order-0 lg:order-1 gradient px-4 lg:pr-20 py-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl border-b text-white">Join our Newsletter</h2>
            <p className="text-white">
              and get information about our new products, special offers, and
              upcoming events.
            </p>

            <div className="bg-white w-full flex p-1 rounded-md">
              <input
                type="text"
                className="flex-1 outline-none text-xl text-body-text"
              />

              <button className="btn_gradient px-3 py-1 text-xs lg:px-5 lg:py-2 lg:text-base rounded-md text-white uppercase tracking-wider">
                Subscribe
              </button>
            </div>

            <div className="flex flex-row gap-4 items-center mt:10">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
