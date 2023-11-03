// **** Library Imports ****

// **** Local Imports ****

import Carousel from "./components/carousel/carousel";
import HomeAboutUs from "./components/about-us/about-us";
import Founder from "./components/founder/founder";
import Business from "./components/business/business";
import PeoplePlanet from "./components/people-planet/people-planet";

// images
import BusinessGreenEnerygImg from "./components/business/images/green-energy.png";
import BusinessSupplyChainImg from "./components/business/images/supply-chin.png";
import BusinessFashionImg from "./components/business/images/fashion.png";

const Home = () => {
  // const ref = useRef();

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0.4 center", "end end"],
  // });

  // const scrollYSpring = useSpring(scrollYProgress, {
  //   damping: 80,
  //   stiffness: 600,
  // });

  // const maskSize = useTransform(scrollYSpring, [0, 1], [510.84, 5000]);

  // const scale = useTransform(scrollYSpring, [0, 1], [0.5, 1.25]);

  // const wms = useMotionTemplate`${maskSize}px`;

  const wholeData = {
    TopSlide1: "",
    AboutMainImage: "",
    AboutminImage1: "",
    AboutinImage2: "",
    AboutMainHeading: "Discover Our Legacy",
    AboutMainDescription:
      "We are a trusted global conglomerate with a legacy spanning over three decades. With our commitment to delivering sustainable value creation, we harness the power of innovation and new age technology in our businesses to advance sustainability, enhance quality, and ensure adaptability. A premier global business conglomerate incorporated in 1994. Unlocked potential for 1000+ clients. Creating positive impact in over 45 countries. Anchored by an extraordinary force of over 6000+ employees worldwide.",
    "AboutSubHeading-1": "Purpose",
    "AboutSubHeading-1-Description":
      "To deliver superior value to our customers, shareholders, employees, and community through a diverse global portfolio of growing businesses driven by innovation, collective wisdom, and creative models.",
    "AboutSubHeading-2": "Values",
    "AboutSubHeading-2-Description":
      "Our values continue to direct the growth of businesses under Apollo Green Energy. We are driven by five core values guided by one purpose.",
    AboutReadMoreLink: "",
    BusinessMainHeading: "Making Impact Across Globe",
    BusinessSubHeading: "One Group. Diversified Business Interests",
    BusinessBusinessSlide1: BusinessGreenEnerygImg,
    BusinessCardName1: "Business",
    BusinessCardHeading1: "Apollo Green Energy",
    BusinessSlideContent:
      "Apollo Green Energy is a leading green energy and infrastructure company with rich legacy. Through a diverse range of businesses, we're driving sustainability and innovation worldwide. ",
    BusinessKnowMore1: "",
    BusinessSlide2: BusinessSupplyChainImg,
    BusinessCardName2: "Business",
    BusinessCardHeading2: "Apollo Supply Chain",
    BusinessSlideContent2:
      "Apollo Supply Chain provides integrated, tech-driven solutions for your logistics requirements so that you can focus on your core business and profitability",
    BusinessKnowMore2: "",
    BusinessSlide3: BusinessFashionImg,
    BusinessCardName3: "Business",
    BusinessCardHeading3: "Apollo Fashion",
    BusinessSlideContent3:
      "Apollo Fashion is a prominent manufacturer for leading international fashion brands.s",
    BusinessKnowMore3: "",
    BusinessSlide4: "",
    BusinessSlideContent4: "",
    BusinessCardName4: "",
    BusinessCardHeading4: "",
    BusinessKnowMore4: "",
    BusinessSlide5: "",
    BusinessSlideContent5: "",
    BusinessCardName5: "",
    BusinessCardHeading5: "",
    BusinessKnowMore5: "",
    HumbleSection: "From Humble Beginnings to Transformational, Innovation",
    HumbleSubSection:
      "A scion of the Kanwar family, the founders of Apollo Tyers, Raaja kanwar chose to carve a path following his passion for start-ups using disruptive technology. As a passionate investor, Raaja takes a keen interest in entrepreneurial visions that hold a promise to make the world a better place for the next generations. Under his tutelage, using smart technology, innovative practices executed by best-in-class talent in the country, Apollo International Limited is delivering high quality, bespoke products and solutions across sectors.",
    HumbleFinalSection:
      "We started our journey with a clear vision to build an organisation that can solve real-world challenges and makes a distinct positive difference to the economy, people, and the planet.",
    HumbleLogo: "",
  };

  return (
    <>
      {/* Carousel */}
      <Carousel />

      {/* About us Section */}
      <HomeAboutUs
        data={{
          aboutMainHeading: wholeData.AboutMainHeading,
          aboutMainDescription: wholeData.AboutMainDescription,
          aboutSubHeading1: wholeData["AboutSubHeading-1"],
          aboutSubHeading1Description:
            wholeData["AboutSubHeading-1-Description"],
          aboutSubHeading2: wholeData["AboutSubHeading-2"],
          aboutSubHeading2Description:
            wholeData["AboutSubHeading-2-Description"],
        }}
      />

      {/* <div className="h-[250vh] relative z-[2]" ref={ref}>
        <div className="sticky h-screen top-0">
          <motion.div
            style={{
              WebkitMaskSize: wms,
              maskSize: wms,
            }}
            className="h-full mask"
          >
            <div className="h-full w-full flex items-center justify-center bg-slate-200">
              <motion.img
                style={{ scale }}
                src="/logo.png"
                alt="Logo"
                className="w-80"
              />
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Business Section */}
      <Business
        slides={[
          {
            backgroundImage: wholeData.BusinessBusinessSlide1,
            cardTag: wholeData.BusinessCardName1,
            cardHeading: wholeData.BusinessCardHeading1,
            cardContent: wholeData.BusinessSlideContent,
          },
          {
            backgroundImage: wholeData.BusinessSlide2,
            cardTag: wholeData.BusinessCardName2,
            cardHeading: wholeData.BusinessCardHeading2,
            cardContent: wholeData.BusinessSlideContent2,
          },
          {
            backgroundImage: wholeData.BusinessSlide3,
            cardTag: wholeData.BusinessCardName3,
            cardHeading: wholeData.BusinessCardHeading3,
            cardContent: wholeData.BusinessSlideContent3,
          },
        ]}
        mainData={{
          mainHeading: wholeData.BusinessMainHeading,
          subHeading: wholeData.BusinessSubHeading,
        }}
      />

      {/* Founder Section */}
      <Founder
        data={{
          humbleSection: wholeData.HumbleSection,
          humbleSubSection: wholeData.HumbleSubSection,
          humbleFinalSection: wholeData.HumbleFinalSection,
        }}
      />

      {/* People Planet */}
      <PeoplePlanet />
    </>
  );
};

export default Home;
