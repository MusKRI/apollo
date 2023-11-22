// **** Library Imports ****
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";

// **** Local Imports ****
import SectionHeading from "../SectionHeading";
// import { DotButton } from "./EmblaCarouselArrowsDotsButtons";

// const cardVariants = {
//   hidden: {
//     background: "linear-gradient(to bottom, transparent, transparent)",
//   },
//   hover: {
//     background: "linear-gradient(to bottom, #238e34, #23278c)",
//     transition: {
//       duration: 2,
//     },
//   },
// };

const cardLinkVariants = {
  hidden: {
    y: 200,
  },
  hover: {
    y: 0,
    display: "flex",
  },
};

const Business = ({ mainData, slides }) => {
  console.log("business data", slides);

  const MotionLink = motion(Link);

  const slidesIds = useMemo(() => {
    const result = slides.map((_, index) => `slide_${index}`);

    return result;
  }, [slides]);

  const [currentSlide, setCurrentSlide] = useState(slidesIds[0]);

  // const [emblaRef, emblaApi] = useEmblaCarousel({
  //   align: "center",
  // });
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [scrollSnaps, setScrollSnaps] = useState([]);

  // const scrollTo = useCallback(
  //   (index) => emblaApi && emblaApi.scrollTo(index),
  //   [emblaApi]
  // );

  // const onInit = useCallback((emblaApi) => {
  //   setScrollSnaps(emblaApi.scrollSnapList());
  // }, []);

  // const onSelect = useCallback((emblaApi) => {
  //   setSelectedIndex(emblaApi.selectedScrollSnap());
  // }, []);

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   onInit(emblaApi);
  //   onSelect(emblaApi);
  //   emblaApi.on("reInit", onInit);
  //   emblaApi.on("reInit", onSelect);
  //   emblaApi.on("select", onSelect);
  // }, [emblaApi, onInit, onSelect]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentSlideIndex = slidesIds.indexOf(currentSlide);
      let nextSlideIndex;

      if (currentSlideIndex === 0) {
        nextSlideIndex = currentSlideIndex + 1;
      } else if (currentSlideIndex === slidesIds.length - 1) {
        nextSlideIndex = 0;
      } else {
        nextSlideIndex = currentSlideIndex + 1;
      }

      setCurrentSlide(`slide_${nextSlideIndex}`);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative px-3 md:px-5 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32 gap-10">
        <div className="flex flex-col gap-4 items-center">
          <SectionHeading classes="font-bold text-center">
            {mainData.mainHeading ?? "Make your business visible online"}
          </SectionHeading>

          <p className="text-body-text text-center">{mainData.subHeading}</p>
        </div>

        <div className="px-6 relative">
          <Tabs.Root
            value={currentSlide}
            defaultValue={currentSlide}
            onValueChange={setCurrentSlide}
          >
            <div className="flex flex-row gap-10 justify-center">
              {(() => {
                const currentSlideIndex = slidesIds.indexOf(currentSlide);
                let previousSlideIndex;

                if (currentSlideIndex === 0) {
                  previousSlideIndex = slidesIds.length - 1;
                } else if (currentSlideIndex === slidesIds.length - 1) {
                  previousSlideIndex = currentSlideIndex - 1;
                } else {
                  previousSlideIndex = currentSlideIndex - 1;
                }

                const previousSlide = slides[previousSlideIndex];

                return (
                  <AnimatePresence>
                    <motion.div
                      key="previous"
                      className="flex-1 hidden md:block"
                      initial={{
                        x: 10,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                        },
                      }}
                    >
                      <div className="relative overflow-hidden rounded-lg w-full h-[500px]">
                        <div className="h-full relative z-0 max-w-full">
                          <img
                            src={previousSlide.backgroundImage}
                            className="max-w-full h-full"
                          />
                        </div>
                        <motion.div
                          // variants={cardVariants}
                          initial="hidden"
                          whileHover="hover"
                          className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
                        >
                          <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                            {previousSlide.cardHeading}
                          </div>

                          <div className="text-white px-6 py-4 flex flex-col gap-3">
                            {/* <h1 className="text-4xl font-semibold transition">
                              {previousSlide.cardHeading}
                            </h1> */}
                            <p className="transition">
                              {previousSlide.cardContent}
                            </p>

                            <MotionLink
                              variants={cardLinkVariants}
                              layout
                              to="#"
                              className="flex items-center gap-2"
                            >
                              <span className="text-lg">Know more</span>
                              <span className="p-2 rounded-full bg-yellow-500">
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </MotionLink>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                );
              })()}

              {slides.map((slide, index) => {
                return (
                  <Tabs.Content
                    key={`slide_${index}`}
                    value={`slide_${index}`}
                    className="flex-1 md:scale-105 self-center"
                  >
                    <motion.div
                      initial={{
                        x: 10,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                        },
                      }}
                      className="relative overflow-hidden rounded-lg w-full h-[500px]"
                    >
                      <div className="h-full relative z-0 max-w-full">
                        <img
                          src={slide.backgroundImage}
                          className="max-w-full h-full"
                        />
                      </div>
                      <motion.div
                        // variants={cardVariants}
                        initial="hidden"
                        whileHover="hover"
                        className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
                      >
                        <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                          {slide.cardHeading}
                        </div>

                        <div className="text-white px-6 py-4 flex flex-col gap-3">
                          {/* <h1 className="text-4xl font-semibold transition">
                            {slide.cardHeading}
                          </h1> */}
                          <p className="transition">{slide.cardContent}</p>

                          <MotionLink
                            variants={cardLinkVariants}
                            layout
                            to="#"
                            className="flex items-center gap-2"
                          >
                            <span className="text-lg">Know more</span>
                            <span className="p-2 rounded-full bg-yellow-500">
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </MotionLink>
                        </div>
                      </motion.div>
                    </motion.div>
                  </Tabs.Content>
                );
              })}

              {(() => {
                const currentSlideIndex = slidesIds.indexOf(currentSlide);
                let nextSlideIndex;

                if (currentSlideIndex === 0) {
                  nextSlideIndex = currentSlideIndex + 1;
                } else if (currentSlideIndex === slidesIds.length - 1) {
                  nextSlideIndex = 0;
                } else {
                  nextSlideIndex = currentSlideIndex + 1;
                }
                const nextSlide = slides[nextSlideIndex];

                return (
                  <motion.div
                    initial={{
                      x: 10,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                      },
                    }}
                    className="flex-1 hidden md:block"
                  >
                    <div className="relative overflow-hidden rounded-lg w-full h-[500px]">
                      <div className="h-full relative z-0 max-w-full">
                        <img
                          src={nextSlide.backgroundImage}
                          className="max-w-full h-full"
                        />
                      </div>

                      <motion.div
                        // variants={cardVariants}
                        initial="hidden"
                        whileHover="hover"
                        className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
                      >
                        <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                          {nextSlide.cardHeading}
                        </div>

                        <div className="text-white px-6 py-4 flex flex-col gap-3">
                          {/* <h1 className="text-4xl font-semibold transition">
                            {nextSlide.cardHeading}
                          </h1> */}
                          <p className="transition">{nextSlide.cardContent}</p>

                          <MotionLink
                            variants={cardLinkVariants}
                            layout
                            to="#"
                            className="flex items-center gap-2"
                          >
                            <span className="text-lg">Know more</span>
                            <span className="p-2 rounded-full bg-yellow-500">
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </MotionLink>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })()}
            </div>

            <Tabs.List>
              <div className="mt-4 md:mt-5 flex items-center justify-center gap-4">
                {slides.map((slide, index) => {
                  const isActive = currentSlide === `slide_${index}`;

                  return (
                    <Tabs.Trigger
                      value={`slide_${index}`}
                      key={`slide_${index}`}
                      className="w-4 h-4 rounded-full border !border-[#2e3192] flex items-center justify-center p-[2px]"
                    >
                      {isActive && (
                        <div className="block bg-[#2e3192] rounded-full p-1" />
                      )}
                    </Tabs.Trigger>
                  );
                })}
              </div>
            </Tabs.List>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
};

export default Business;
