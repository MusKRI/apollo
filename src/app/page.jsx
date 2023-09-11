// **** Library Imports ****

// **** Local Imports ****
import Carousel from "./components/carousel/carousel";
import HomeAboutUs from "./components/about-us/about-us";
import Founder from "./components/founder/founder";

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <Carousel />
      {/* About us Section */}
      <HomeAboutUs />
      {/* Founder Section */}
      <Founder />
    </div>
  );
};

export default Home;
