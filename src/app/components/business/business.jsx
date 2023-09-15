// **** Library Imports ****
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

// **** Local Imports ****
import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DotButton } from "./EmblaCarouselArrowsDotsButtons";

import { cn } from "../../../lib/utils";

const images = [
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    overlayTag: "Fashion Company",
    overlayTitle: "Most Critical Business Priority",
    overlaytDescription:
      "We are providing loream services in this sector to wide area of world",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    overlayTag: "Green Energy",
    overlayTitle: "Most Critical Business Priority",
    overlaytDescription:
      "We are providing loream services in this sector to wide area of world",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    overlayTag: "Supply Chain",
    overlayTitle: "Most Critical Business Priority",
    overlaytDescription:
      "We are providing loream services in this sector to wide area of world",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    overlayTag: "Supply Chain",
    overlayTitle: "Most Critical Business Priority",
    overlaytDescription:
      "We are providing loream services in this sector to wide area of world",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    overlayTag: "Supply Chain",
    overlayTitle: "Most Critical Business Priority",
    overlaytDescription:
      "We are providing loream services in this sector to wide area of world",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    overlayTag: "Supply Chain",
    overlayTitle: "Most Critical Business Priority",
    overlaytDescription:
      "We are providing loream services in this sector to wide area of world",
  },
];

const cardVariants = {
  hidden: {
    background: "linear-gradient(to bottom, transparent, transparent)",
  },
  hover: {
    background: "linear-gradient(to bottom, #238e34, #23278c)",
    transition: {
      duration: 2,
    },
  },
};

const cardLinkVariants = {
  hidden: {
    y: 200,
    display: "none",
  },
  hover: {
    y: 0,
    display: "flex",
  },
};

const Business = () => {
  const MotionLink = motion(Link);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="relative px-3 md:px-5 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32 gap-10">
        <div className="flex flex-col gap-4 items-center">
          <SectionHeading classes="font-bold text-center">
            Make your business visible online.
          </SectionHeading>

          <p className="text-body-text text-center">
            Open an online store and become an international seller. Your
            customers will enjoy shopping online!
          </p>
        </div>

        <div className="px-6 relative">
          <div className="embla">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex touch-pan-y">
                {images.map((image, index) => (
                  <div
                    className={cn(
                      "border embla__slide flex-[0_0_100%] sm:flex-[0_0_90%] md:flex-[0_0_80%] lg:flex-[0_0_33%] min-w-0 relative mx-2 flex justify-center transition-transform",
                      index === selectedIndex ? "lg:scale-100" : "lg:scale-90"
                    )}
                    key={index}
                  >
                    <div
                      className="relative overflow-hidden rounded-lg w-full h-[460px] md:h-[500px] lg:h-[600px]"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileHover="hover"
                        className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
                      >
                        <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                          Business
                        </div>

                        <div className="text-white px-6 py-4 flex flex-col gap-3">
                          <h1 className="text-4xl font-semibold transition">
                            Most Critical Business Priority
                          </h1>
                          <p className="transition">
                            We are providing loream services in this sector to
                            wide area of world
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => scrollTo(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>

        {/* <div className="flex-1 flex flex-row items-center justify-center lg:justify-stretch flex-wrap gap-4 order-0 lg:order-1">
       
          <div
            className="relative overflow-hidden rounded-lg w-80 lg:w-[280px] h-[440px] lg:h-[500px] xl:-mt-[50px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileHover="hover"
              className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
            >
              <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                Business
              </div>

              <div className="text-white px-6 py-4 flex flex-col gap-3">
                <h1 className="text-4xl font-semibold transition">
                  Most Critical Business Priority
                </h1>
                <p className="transition">
                  We are providing loream services in this sector to wide area
                  of world
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

          <div
            className="relative overflow-hidden rounded-lg w-80 lg:w-[280px] h-[440px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileHover="hover"
              className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
            >
              <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                Business
              </div>

              <div className="text-white px-6 py-4 flex flex-col gap-3">
                <h1 className="text-4xl font-semibold transition">
                  Most Critical Business Priority
                </h1>
                <p className="transition">
                  We are providing loream services in this sector to wide area
                  of world
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

          <div
            className="relative overflow-hidden rounded-lg w-80 lg:w-[280px] h-[440px] lg:h-[500px] xl:-mt-[50px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileHover="hover"
              className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
            >
              <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                Business
              </div>

              <div className="text-white px-6 py-4 flex flex-col gap-3">
                <h1 className="text-4xl font-semibold transition">
                  Most Critical Business Priority
                </h1>
                <p className="transition">
                  We are providing loream services in this sector to wide area
                  of world
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

          <div
            className="relative overflow-hidden rounded-lg w-80 lg:w-[280px] h-[440px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileHover="hover"
              className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end group hover:mix-blend-hard-light"
            >
              <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                Business
              </div>

              <div className="text-white px-6 py-4 flex flex-col gap-3">
                <h1 className="text-4xl font-semibold transition">
                  Most Critical Business Priority
                </h1>
                <p className="transition">
                  We are providing loream services in this sector to wide area
                  of world
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
        </div> */}
      </div>
    </section>
  );
};

export default Business;
