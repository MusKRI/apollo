import { motion } from "framer-motion";

import OurFocus from "./components/our-focus/page";
import PeoplePlanetBanner from "./components/pp-banner/pp-banner";
import TabSection from "./components/tab-section/tab-section";

// pp hero images
import Banner from "./images/banner.png";
import sh1 from "./images/sh-1.png";
import sh2 from "./images/sh-2.png";
import sh3 from "./images/sh-3.png";
import sh4 from "./images/sh-4.png";

// tab section images
import TabImage from "./images/4.png";
import educationImg from "./images/education.jpg";
import envImg from "./images/environment.jpg";
import healthcareImg from "./images/Healthcare.jpeg";

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
      image: educationImg,
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
      image: healthcareImg,
      name: "Healthcare",
      subheading1:
        "Research has shown that access to healthcare has not been identified as a rural priority for many years now. Apollo Green Energy has partnered with Dasra, a Mumbai-based strategic philanthropy foundation. As a part of that, Apollo Green Energy supports the AHAAR program under SNEHA (Society for Nutrition, Education and Health Action) Through this partnership, we are helping the organisation in making efforts towards eliminating child malnutrition within the Dharavi region.",
      subheading2: "",
      subheading3: "",
    },
    {
      id: "environment",
      image: envImg,
      name: "Environment",
      subheading1:
        "Apollo Green Energy’s goal is to make not only a societal but also an environmental impact. We have ensured that all our business verticals take steps towards being environmentally conscious.",
      subheading2:
        "Actively engaged win the implementation of biz practices; Rainwater Harvesting, utilizing solar power as an electricity source at many of our warehouses, conducting an e-saver campaign wherein energy-saving measures are taken throughout the organisation in daily activities and more. Our fashion vertical implements ethical sourcing and continuous recycling to create a highly sustainable standard of conducting business.",
      subheading3: "",
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

      <div className="relative py-4 md:py-32 my-20">
        <div className="px-16 md:px-32 flex flex-col md:flex-row ">
          <div className="flex-1 flex flex-wrap gap-3">
            <motion.div
              initial={{
                x: -50,
                y: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="relative"
            >
              <img src={sh1} alt="" />
            </motion.div>
            <motion.div
              initial={{
                x: 50,
                y: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="relative"
            >
              <img src={sh2} alt="" />
            </motion.div>
            <motion.div
              initial={{
                x: -50,
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="relative"
            >
              <img src={sh3} alt="" />
            </motion.div>
            <motion.div
              initial={{
                x: 50,
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="relative"
            >
              <img src={sh4} alt="" />
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col gap-4 self-center">
            <motion.h1
              initial={{
                x: 50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="text-3xl lg:text-5xl font-semibold"
            >
              What’s good for people and the planet, is good for us.
            </motion.h1>
            <motion.p
              initial={{
                x: 50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="text-lg"
            >
              We are focused on achieving excellence in our business vertices
              and creating a positive impact on the lives of those who need it.
            </motion.p>
            <motion.p
              initial={{
                x: 50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
            >
              We have undertaken various initiatives and campaigns in areas of
              healthcare, education, nutrition, and environment along with the
              well-being of women, adolescent girls, and younger children. We
              are dedicated to addressing these concerns and using our resources
              to reach out to as many individuals as possible and transform
              their lives. At Apollo Green Energy, we believe that uplifting the
              weaker sections of society, will fast-track the growth towards a
              developed and sustainable nation.
            </motion.p>
          </div>
        </div>
      </div>

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
