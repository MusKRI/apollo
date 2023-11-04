// **** Library Imports ****

// **** Local Imports ****

import Carousel from "./components/carousel/carousel";
import HomeAboutUs from "./components/about-us/about-us";
import Founder from "./components/founder/founder";
import Business from "./components/business/business";
// import PeoplePlanet from "./components/people-planet/people-planet";

// images
import BusinessGreenEnerygImg from "./components/business/images/green-energy.png";
import BusinessSupplyChainImg from "./components/business/images/supply chain.jpeg";
import BusinessFashionImg from "./components/business/images/Fashion.jpeg";
import BusinessXImg from "./components/business/images/ProX.jpeg";

// import ContactMap from "./contact-us/components/map/map";
import NewSection from "./components/new/new";
import Map from "./map";

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
    BusinessMainHeading: "One Group. Diversified Business Interests",
    BusinessSubHeading: "",
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
    BusinessSlide4: BusinessXImg,
    BusinessSlideContent4:
      "Apollo Pro X essentially serves as an all-encompassing EPC (Engineering, Procurement, and Construction) solution, executing large industrial and infrastructure projects",
    BusinessCardName4: "Business",
    BusinessCardHeading4: ".Apollo Pro X",
    BusinessKnowMore4: "",
    BusinessSlide5: BusinessXImg,
    BusinessSlideContent5:
      "Apollo Marketplace is a trading and distribution company with a global network that can benefit your business.",
    BusinessCardName5: "Business",
    BusinessCardHeading5: "Apollo Marketplace",
    BusinessKnowMore5: "",
    HumbleSection: "",
    HumbleSubSection:
      "A scion of the Kanwar family, the founders of Apollo Tyers, Raaja kanwar chose to carve a path following his passion for start-ups using disruptive technology. As a passionate investor, Raaja takes a keen interest in entrepreneurial visions that hold a promise to make the world a better place for the next generations. Under his tutelage, using smart technology, innovative practices executed by best-in-class talent in the country, Apollo International Limited is delivering high quality, bespoke products and solutions across sectors.",
    HumbleFinalSection:
      "We started our journey with a clear vision to build an organisation that can solve real-world challenges and makes a distinct positive difference to the economy, people, and the planet.\n\nMr. Raaja Kanwar, Chairman & Managing Director, Apollo Green Energy",
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
          {
            backgroundImage: wholeData.BusinessSlide4,
            cardTag: wholeData.BusinessCardName4,
            cardHeading: wholeData.BusinessCardHeading4,
            cardContent: wholeData.BusinessSlideContent4,
          },
          {
            backgroundImage: wholeData.BusinessSlide5,
            cardTag: wholeData.BusinessCardName5,
            cardHeading: wholeData.BusinessCardHeading5,
            cardContent: wholeData.BusinessSlideContent5,
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
      {/* //map Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-center text-[28px] md:text-5xl text-main-text font-bold">
            Making Impact Across Globe
          </div>
          {/* <div className="col-12"><ContactMap/></div> */}
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-12">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* People Planet */}
      {/* map-section */}

      {/* <PeoplePlanet /> */}

      <NewSection
        data={{
          humbleSection: "",
          humbleSubSection: "",
          humbleFinalSection:
            "Since our inception, we've dedicated ourselves to delivering sustainable value creation. Our initiatives span education, healthcare, and environmental sustainability, aiming to uplift underserved communities and foster a sustainable nation. Each project we undertake reflects our dedication to embodying our values and serving as responsible corporate citizens, all while making a tangible difference.",
        }}
      />
    </>
  );
};

export default Home;
