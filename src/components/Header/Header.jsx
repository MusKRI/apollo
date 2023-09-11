// **** Library Imports ****
import { BsSearch } from "react-icons/bs";

// **** Local Imports ****
import LinkWithoutChildren from "./components/LinkWithoutChildren";
import LinkWithChildren from "./components/LinkWithChildren";

const navLinks = [
  {
    id: "home",
    label: "Home",
    children: [],
  },

  {
    id: "about-us",
    label: "About Us",
    children: [
      {
        id: "who-we-are",
        label: "Who We Are",
        slug: "/who-we-are",
      },

      {
        id: "purpose-values",
        label: "Purpose & Values",
        slug: "/purpose-values",
      },

      {
        id: "leadership",
        label: "Leadership",
        slug: "/leadership",
      },
    ],
  },

  {
    id: "our-businesses",
    label: "Our Businesses",
    children: [
      {
        id: "projects",
        label: "Projects",
        slug: "/projects",
      },

      {
        id: "apparel-footwear",
        label: "Apparel & Footwear",
        slug: "/apparel-footwear",
      },

      {
        id: "automotive-components",
        label: "Automotive Components",
        slug: "/automotive-components",
      },

      {
        id: "logistics-supply-chain",
        label: "Logistics & Supply Chain",
        slug: "/logistics-supply-chain",
      },
    ],
  },

  {
    id: "planet-society",
    label: "Planet & Society",
    children: null,
    slug: "/planet-society",
  },

  {
    id: "careers",
    label: "Careers",
    children: [],
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
    <header className="relative bg-white h-[72px] px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="">
          <h1 className="text-4xl font-bold text-main-text">Apollo</h1>
        </div>

        {/* nav */}
        <nav className="h-full">
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
        <div className="border h-full flex items-center px-4 cursor-pointer">
          <BsSearch className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
