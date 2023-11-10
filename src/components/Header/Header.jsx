// **** Library Imports ****
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// **** Local Imports ****
import LinkWithoutChildren from "./components/LinkWithoutChildren";
import LinkWithChildren from "./components/LinkWithChildren";

import Logo from "./images/logo.png";

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
        slug: "#",
      },
      {
        id: "prox",
        label: "ProX",
        slug: "#",
      },
    ],
  },

  {
    id: "people-planet",
    label: "People & Planet",
    children: null,
    slug: "/people-planet",
  },
  {
    id: "media-center",
    label: "Media Center",
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
    children: null,
    slug: "#",
  },

  {
    id: "contact",
    label: "Contact",
    children: null,
    slug: "/contact",
  },
];

const Header = () => {
  return (
    <header className="bg-white h-[72px] px-3 md:px-5 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="">
          <div className="relative">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* nav */}
        <nav className="h-full ml-auto">
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
        <div className="h-full flex items-center gap-4">
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
    </header>
  );
};

export default Header;
