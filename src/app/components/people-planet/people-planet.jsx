// **** Library Imports ****
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// **** Local Imports ****
// import SectionHeading from "../SectionHeading";
import SectionHeading from "../SectionHeading";
import SectionButton from "../SectionButton";

import {
  useCustomCursorText,
  useCustomCursorVariant,
} from "../../../components/CustomCursor/useCustomCursor";

const nodes = [
  {
    image: "/images/seg.png",
    tag: "Planet & Society",
    title: "What's Good for People & Planet is Good for Us",
    description:
      "At Apollo International Limited, we believe that uplifting the lives of people will pave the way for a developed and sustainable nation.",
  },
  {
    image: "/images/seg2.png",
    tag: "Planet & Society",
    title: "What's Good for People & Planet is Good for Us",
    description:
      "At Apollo International Limited, we believe that uplifting the lives of people will pave the way for a developed and sustainable nation.",
  },
  {
    image: "/images/seg3.png",
    tag: "Planet & Society",
    title: "What's Good for People & Planet is Good for Us",
    description:
      "At Apollo International Limited, we believe that uplifting the lives of people will pave the way for a developed and sustainable nation.",
  },
  {
    image: "/images/seg4.png",
    tag: "Planet & Society",
    title: "What's Good for People & Planet is Good for Us",
    description:
      "At Apollo International Limited, we believe that uplifting the lives of people will pave the way for a developed and sustainable nation.",
  },
];

const PeoplePlanet = () => {
  const MotionLink = motion(Link);

  const { setCursorText } = useCustomCursorText();
  const { setCursorVariant } = useCustomCursorVariant();

  function ppEnter(event) {
    setCursorText("View");
    setCursorVariant("pp");
  }

  function ppLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col py-16">
        <div className="flex flex-col gap-2">
          <SectionHeading
            classes="font-bold"
            initial={{
              y: 20,
              opacity: 0,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            People & Planet
          </SectionHeading>
          <motion.p
            initial={{
              y: 20,
              opacity: 0,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className=""
          >
            From insights to action, the path to 360° value starts here.
          </motion.p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-6 2lg:gap-0 justify-center w-full 2lg:[&>*:nth-child(1)]:mt-0 2lg:[&>*:nth-child(2)]:mt-[50px] 2lg:[&>*:nth-child(3)]:mt-[100px] 2lg:[&>*:nth-child(4)]:mt-[150px]">
            {nodes.map((node, index) => {
              return (
                <div
                  className="flex flex-col gap-1 2lg:gap-3 relative max-w-[294px]"
                  key={index}
                >
                  <motion.div
                    initial={{
                      width: 0,
                      opacity: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileInView={{
                      width: 293,
                      opacity: 1,
                      transition: {
                        duration: 1,
                      },
                    }}
                    layout
                    className="relative w-[293px] z-[2] cursor-none hidden 2lg:block"
                    onMouseEnter={ppEnter}
                    onMouseLeave={ppLeave}
                  >
                    <motion.img
                      layout
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                          duration: 1,
                        },
                      }}
                      src={node.image}
                      alt={node.title}
                    />
                  </motion.div>

                  <div className="relative w-[293px] z-[2] 2lg:hidden">
                    <img src={node.image} alt={node.title} />
                  </div>

                  <span className="text-base font-medium">{node.tag}</span>

                  <MotionLink className="text-2xl font-semibold hover:text-green hover:underline">
                    {node.title}
                  </MotionLink>
                  <p className="text-base">{node.description}</p>

                  <SectionButton slug="#" classes="self-start">
                    Read more
                  </SectionButton>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeoplePlanet;
