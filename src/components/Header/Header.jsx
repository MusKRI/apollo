// **** Library Imports ****
import { BsSearch } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

// **** Local Imports ****
import LinkWithoutChildren from "./components/LinkWithoutChildren";
import LinkWithChildren from "./components/LinkWithChildren";

import Logo from "./images/logo.png";
import { useState } from "react";

const navLinks = [
  // {
  //   id: "home",
  //   label: "Home",
  //   children: null,
  //   slug: "/",
  // },

  {
    id: "about-us",
    label: "About Us",
    isDrapdown: true,
    children: [
      {
        id: "aboutus",
        label: "Who We Are",
        slug: "/aboutus",
      },

      {
        id: "aboutus",
        label: "Purpose & Values",
        slug: "/aboutus",
      },

      {
        id: "aboutus",
        label: "Leadership",
        slug: "/aboutus",
      },
    ],
  },

  {
    id: "our-businesses",
    label: "Our Businesses",
    isDrapdown: true,
    children: [
      {
        id: "supply-chain",
        label: "Supply Chain",
        slug: "/supply-chain",
      },

      {
        id: "fashion",
        label: "Fashion",
        slug: "/fashion",
      },

      {
        id: "marketplace",
        label: "Marketplace",
        slug: "/marketplace",
      },
      {
        id: "prox",
        label: "ProX",
        slug: "/prox",
      },
    ],
  },

  {
    id: "people-planet",
    label: "People & Planet",
    isDrapdown: false,
    children: null,
    slug: "/people-planet",
  },
  {
    id: "media-center",
    label: "Media Center",
    isDrapdown: true,
    children: [
      {
        id: "aboutus",
        label: "Blogs",
        slug: "/blogs",
      },
      {
        id: "aboutus",
        label: "News",
        slug: "/news",
      },
    ],
  },

  {
    id: "careers",
    label: "Careers",
    isDrapdown: false,
    children: null,
    slug: "/career",
  },

  {
    id: "contact",
    label: "Contact",
    isDrapdown: false,
    children: null,
    slug: "/contact",
  },
];

const Header = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  const [state, setState] = useState(false);

  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  return (
    <motion.header
      className="bg-white h-[72px] px-3 md:px-5 fixed top-0 w-full z-50"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="">
          <div className="relative">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        <div
          className={`nav-menu flex-1 absolute top-[72px] left-0 w-full bg-white lg:hidden px-8 py-4 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="items-center space-y-6">
            {navLinks.map((item, idx) => {
              return (
                <li key={idx}>
                  {item.isDrapdown ? (
                    <button
                      className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-green"
                      onClick={() =>
                        setDrapdownState({
                          idx,
                          isActive: !drapdownState.isActive,
                        })
                      }
                    >
                      {item.label}
                      {drapdownState.idx == idx && drapdownState.isActive ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item?.slug}
                      className="block text-gray-700 hover:text-green"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.isDrapdown &&
                  drapdownState.idx == idx &&
                  drapdownState.isActive ? (
                    <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                      <ul className="max-w-screen-xl mx-auto grid items-center gap-6  pl-8">
                        {item?.children.map((dropdownItem, idx) => (
                          <li key={idx}>
                            <Link
                              to={dropdownItem?.slug}
                              className="text-black text-sm hover:text-green"
                              onClick={() => {
                                setState(false);
                                setDrapdownState({
                                  isActive: false,
                                  idx: null,
                                });
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                            {/* <ul className="mt-5 space-y-6">
                              {dropdownItem.navs.map((navItem, idx) => (
                                <li key={idx} className="group">
                                  <a
                                    href={navItem.path}
                                    className="flex gap-3 items-center"
                                  >
                                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                                      {navItem.icon}
                                    </div>
                                    <div>
                                      <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                                        {navItem.title}
                                      </span>
                                      <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                                        {navItem.desc}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              ))}
                            </ul> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* nav */}
        <nav className="h-full ml-auto hidden lg:block">
          <ul className="items-center h-full hidden lg:flex">
            {navLinks.map((link) => {
              const { id, label, slug, children } = link;
              return (
                <li
                  key={id}
                  className="relative h-full flex items-center gap-2 px-4 cursor-pointer"
                >
                  {children === null ? (
                    <LinkWithoutChildren slug={slug} label={label} />
                  ) : (
                    <LinkWithChildren label={label} childLinks={children} />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Search */}
        <div className="h-full items-center gap-4 hidden lg:flex">
          <BsSearch className="w-5 h-5" />

          <motion.button
            whileTap={{
              scale: 0.96,
            }}
            className="px-4 py-1 bg-[#2e3192] rounded-sm text-white"
          >
            Enquire now
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
