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

  // our focus data
  ppFocusTitle: "Our Focus",
  ppFocusDescription:
    "At Apollo Green Energy, we deeply care about making a real difference. We work hard to boost the economy while making life better for everyone in our communities. It&apos;s not just business to us; it&apos;s about touching lives, bringing hope, and leaving a positive mark on the world. Because, What’s good for people and the planet, is good for us.",
  ppFocusVideo: "",

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

  // making difference data
  mdTitle: "Making a difference, one project at a time",
  mdDescription1:
    "For each of us in the Apollo Green Energy/ Apollo Group, every project&apos;s successful execution fills our hearts with deep satisfaction. It&apos;s a tangible reflection of our dedication to embodying our values and playing a leadership role, all while being a caring and responsible corporate citizen.",
  mdDescription2:
    "As we contribute in our humble way, we&apos;re inspired by the realization that there&apos;s much more to do, especially considering the size and unique challenges of our country.",
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

      <OurFocus
        data={{
          title: peopleplanetData.ppFocusTitle,
          description: peopleplanetData.ppFocusDescription,
          video: peopleplanetData.ppFocusVideo,
        }}
      />

      <TabSection data={peopleplanetData.tabs} />

      <MakingDifference
        data={{
          title: peopleplanetData.mdTitle,
          desc1: peopleplanetData.mdDescription1,
          desc2: peopleplanetData.mdDescription2,
        }}
      />
    </>
  );
};

export default PeoplePlanet;
