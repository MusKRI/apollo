// **** Library Imports ****

// **** Local Imports ****
import Carousel from "./components/carousel/carousel";
import HomeAboutUs from "./components/about-us/about-us";
import Founder from "./components/founder/founder";
import Business from "./components/business/business";

const Home = () => {
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
