// **** Library Imports ****
import axios from "axios";

// **** Local Imports ****

import Carousel from "./components/carousel/carousel";
import HomeAboutUs from "./components/about-us/about-us";
import Founder from "./components/founder/founder";
import Business from "./components/business/business";
// import PeoplePlanet from "./components/people-planet/people-planet";

// images
// import BusinessGreenEnerygImg from "./components/business/images/green-energy.png";
// import BusinessSupplyChainImg from "./components/business/images/supply chain.jpeg";
// import BusinessFashionImg from "./components/business/images/Fashion.jpeg";
// import BusinessXImg from "./components/business/images/ProX.jpeg";

// import ContactMap from "./contact-us/components/map/map";
import NewSection from "./components/new/new";
import { useEffect, useState } from "react";
import HomeMap from "./components/map/map";

const Home = () => {
  const [initialData, setInitialData] = useState({});

  console.log(initialData);

  // const wholeData = {
  //   TopSlide1: "",
  //   AboutMainImage: "",
  //   AboutminImage1: "",
  //   AboutinImage2: "",
  //   AboutMainHeading: "Discover Our Legacy",
  //   AboutMainDescription:
  //     "We are a trusted global conglomerate with a legacy spanning over three decades. With our commitment to delivering sustainable value creation, we harness the power of innovation and new age technology in our businesses to advance sustainability, enhance quality, and ensure adaptability. A premier global business conglomerate incorporated in 1994. Unlocked potential for 1000+ clients. Creating positive impact in over 45 countries. Anchored by an extraordinary force of over 6000+ employees worldwide.",
  //   "AboutSubHeading-1": "Purpose",
  //   "AboutSubHeading-1-Description":
  //     "To deliver superior value to our customers, shareholders, employees, and community through a diverse global portfolio of growing businesses driven by innovation, collective wisdom, and creative models.",
  //   "AboutSubHeading-2": "Values",
  //   "AboutSubHeading-2-Description":
  //     "Our values continue to direct the growth of businesses under Apollo Green Energy. We are driven by five core values guided by one purpose.",
  //   AboutReadMoreLink: "",
  //   BusinessMainHeading: "One Group. Diversified Business Interests",
  //   BusinessSubHeading: "",
  //   BusinessBusinessSlide1: BusinessGreenEnerygImg,
  //   BusinessCardName1: "Business",
  //   BusinessCardHeading1: "Apollo Green Energy",
  //   BusinessSlideContent:
  //     "Apollo Green Energy is a leading green energy and infrastructure company with rich legacy. Through a diverse range of businesses, we're driving sustainability and innovation worldwide. ",
  //   BusinessKnowMore1: "",
  //   BusinessSlide2: BusinessSupplyChainImg,
  //   BusinessCardName2: "Business",
  //   BusinessCardHeading2: "Apollo Supply Chain",
  //   BusinessSlideContent2:
  //     "Apollo Supply Chain provides integrated, tech-driven solutions for your logistics requirements so that you can focus on your core business and profitability",
  //   BusinessKnowMore2: "",
  //   BusinessSlide3: BusinessFashionImg,
  //   BusinessCardName3: "Business",
  //   BusinessCardHeading3: "Apollo Fashion",
  //   BusinessSlideContent3:
  //     "Apollo Fashion is a prominent manufacturer for leading international fashion brands.s",
  //   BusinessKnowMore3: "",
  //   BusinessSlide4: BusinessXImg,
  //   BusinessSlideContent4:
  //     "Apollo Pro X essentially serves as an all-encompassing EPC (Engineering, Procurement, and Construction) solution, executing large industrial and infrastructure projects",
  //   BusinessCardName4: "Business",
  //   BusinessCardHeading4: "Apollo Pro X",
  //   BusinessKnowMore4: "",
  //   BusinessSlide5: BusinessXImg,
  //   BusinessSlideContent5:
  //     "Apollo Marketplace is a trading and distribution company with a global network that can benefit your business.",
  //   BusinessCardName5: "Business",
  //   BusinessCardHeading5: "Apollo Marketplace",
  //   BusinessKnowMore5: "",
  //   HumbleSection: "",
  //   HumbleSubSection:
  //     "A scion of the Kanwar family, the founders of Apollo Tyers, Raaja kanwar chose to carve a path following his passion for start-ups using disruptive technology. As a passionate investor, Raaja takes a keen interest in entrepreneurial visions that hold a promise to make the world a better place for the next generations. Under his tutelage, using smart technology, innovative practices executed by best-in-class talent in the country, Apollo International Limited is delivering high quality, bespoke products and solutions across sectors.",
  //   HumbleFinalSection: `"<i>We started our journey with a clear vision to build an organisation that can solve real-world challenges and makes a distinct positive difference to the economy, people, and the planet."</i>\n\nMr. Raaja Kanwar, Chairman & Managing Director, Apollo Green Energy`,
  //   HumbleLogo: "",
  // };

  useEffect(() => {
    axios
      .get("https://webwila.com/giftopedia/public/api/v1/page/home", {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(res.data.data.page.meta_data);
        setInitialData(res.data.data.page.meta_data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {/* Carousel */}
      <Carousel />
      {/* About us Section */}
      <HomeAboutUs
        data={{
          aboutMainHeading: initialData.AboutusMainHeading,
          aboutMainDescription: initialData.MainDescription,
          about1Img: initialData["MainImage"],
          about2Img: initialData["minImage1"],
          about3Img: initialData["minImage2"],
          aboutSubHeading1: initialData["SubHeading-1"],
          aboutSubHeading1Description: initialData["SubHeading-1-Description"],
          aboutSubHeading2: initialData["Sub-Heading-2"],
          aboutSubHeading2Description: initialData["Sub-Heading-2-Description"],
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
            backgroundImage: initialData.BusinessSlide1,
            cardTag: initialData.BusinessCardName1,
            cardHeading: initialData.CardHeading1,
            cardContent: initialData.BusinessSlideContent,
          },
          {
            backgroundImage: initialData.BusinessSlide2,
            cardTag: initialData.BusinessCardName2,
            cardHeading: initialData.CardHeading2,
            cardContent: initialData.BusinessSlideContent2,
          },
          {
            backgroundImage: initialData.BusinessSlide3,
            cardTag: initialData.BusinessCardName3,
            cardHeading: initialData.CardHeading3,
            cardContent: initialData.BusinessSlideContent3,
          },
          {
            backgroundImage: initialData.BusinessSlide4,
            cardTag: initialData.BusinessCardName4,
            cardHeading: initialData.CardHeading4,
            cardContent: initialData.BusinessSlideContent4,
          },
          {
            backgroundImage: initialData.BusinessSlide5,
            cardTag: initialData.BusinessCardName5,
            cardHeading: initialData.CardHeading5,
            cardContent: initialData.BusinessSlideContent5,
          },
        ]}
        mainData={{
          mainHeading: initialData.BusinessMainHeading,
          subHeading: initialData.BusinessSubHeading,
        }}
      />
      {/* Founder Section */}
      <Founder
        data={{
          humbleLogo: initialData.HumbleLogo,
          humbleSection: initialData.HumbleSection,
          humbleSubSection: initialData.HumbleSubSection,
          humbleFinalSection: initialData.HumbleFinalSection,
        }}
      />
      {/* //map Section */}
      <HomeMap />

      {/* People Planet */}
      {/* map-section */}

      {/* <PeoplePlanet /> */}

      <NewSection
        data={{
          image: initialData["FInal_image"],
          description: initialData["FinalSection"],
        }}
      />
    </>
  );
};

export default Home;
