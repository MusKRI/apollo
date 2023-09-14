// **** Library Imports ****
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { useRef } from "react";

// **** Local Imports ****
import Carousel from "./components/carousel/carousel";
import HomeAboutUs from "./components/about-us/about-us";
import Founder from "./components/founder/founder";
import Business from "./components/business/business";

const Home = () => {
  // const ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

  // const scrollYProgressSpring = useSpring(scrollYProgress, {
  //   stiffness: 300,
  //   damping: 40,
  // });

  // const clipPath = useTransform(
  //   scrollYProgressSpring,
  //   [0, 0.1],
  //   ["inset(20%)", "inset(0%)"]
  // );

  // const opacity = useTransform(scrollYProgressSpring, [0, 0.4], [1, 0]);

  // const scale = useTransform(scrollYProgressSpring, [0, 0.3], [1, 10]);

  return (
    <div>
      {/* Carousel */}
      <Carousel />

      {/* About us Section */}
      <HomeAboutUs />

      {/* Business Section */}
      <Business />

      {/* Founder Section */}
      <Founder />
    </div>
  );
};

export default Home;
