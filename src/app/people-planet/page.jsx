import OurFocus from "./components/our-focus/page";
import PeoplePlanetBanner from "./components/pp-banner/pp-banner";
import TabSection from "./components/tab-section/tab-section";

// pp hero images
import Banner from "./images/banner.png";

// tab section images
import TabImage from "./images/4.png";
import MakingDifference from "./components/making-difference/making-difference";

const peopleplanetData = {
  // People Planet Hero Data
  ppHeroTag: "People & Planet",
  ppHeroHeading: "Beyond Business",
  ppHeroDescription:
    "From traditional PR and thought leadership campaigns to storytelling and creative social media management we’ve got you covered. Something is not.",
  ppHeroBackgroundImage: Banner,

  // Tabs Section Data
  tabs: [
    {
      id: "education",
      image: TabImage,
      name: "Education",
      subheading1:
        "Women, young girls, and children are mostly left behind when it comes to getting a chance to realize their full potential via the education that they deserve.",
      subheading2:
        "Apollo Energy act in the present to work towards a better future.",
      subheading3:
        "At Apollo, we provide educational assistance to the children living near its facility in Panvel, Maharashtra by providing them with study material so they can benefit from getting the education they need to build a better future.",
    },
    {
      id: "healthcare",
      image: TabImage,
      name: "Healthcare",
      subheading1:
        "Women, young girls, and children are mostly left behind when it comes to getting a chance to realize their full potential via the education that they deserve.",
      subheading2:
        "Apollo Energy act in the present to work towards a better future.",
      subheading3:
        "At Apollo, we provide educational assistance to the children living near its facility in Panvel, Maharashtra by providing them with study material so they can benefit from getting the education they need to build a better future.",
    },
    {
      id: "environment",
      image: TabImage,
      name: "Environment",
      subheading1:
        "Women, young girls, and children are mostly left behind when it comes to getting a chance to realize their full potential via the education that they deserve.",
      subheading2:
        "Apollo Energy act in the present to work towards a better future.",
      subheading3:
        "At Apollo, we provide educational assistance to the children living near its facility in Panvel, Maharashtra by providing them with study material so they can benefit from getting the education they need to build a better future.",
    },
  ],
};

const PeoplePlanet = () => {
  return (
    <>
      <PeoplePlanetBanner
        data={{
          tag: peopleplanetData.ppHeroTag,
          heading: peopleplanetData.ppHeroHeading,
          description: peopleplanetData.ppHeroDescription,
          bgImage: peopleplanetData.ppHeroBackgroundImage,
        }}
      />

      <OurFocus />

      <TabSection data={peopleplanetData.tabs} />

      <MakingDifference />
    </>
  );
};

export default PeoplePlanet;
