// **** Library Imports ****

// **** Local Imports ****

import Carousel from "./components/carousel/carousel";
import HomeAboutUs from "./components/about-us/about-us";
import Founder from "./components/founder/founder";
import Business from "./components/business/business";
import PeoplePlanet from "./components/people-planet/people-planet";

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

  return (
    <>
      {/* Carousel */}
      <Carousel />

      {/* About us Section */}
      <HomeAboutUs />

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
      <Business />

      {/* Founder Section */}
      <Founder />

      {/* People Planet */}
      <PeoplePlanet />
    </>
  );
};

export default Home;
