// **** Local Imports ****
import Slide1 from "../../images/hero-slider/slider-img1.png";
import Slide2 from "../../images/hero-slider/slider-img2.png";
import Slide3 from "../../images/hero-slider/slider-img3.png";
// import SupplyChainCarousel from "./Carousel";

const slideNodes = [
  {
    id: "1",
    title: "Complex Supply Chain. Simplified",
    desc: "We offer customized solutions for supply chain competitiveness and resilience.",
    slideImage: Slide1,
  },
  {
    id: "2",
    title: "Complex Supply Chain. Simplified",
    desc: "We offer customized solutions for supply chain competitiveness and resilience.",
    slideImage: Slide2,
  },
  {
    id: "3",
    title: "Complex Supply Chain. Simplified",
    desc: "We offer customized solutions for supply chain competitiveness and resilience.",
    slideImage: Slide3,
  },
];

const SupplyChainBanner = () => {
  return (
    <div className="relative h-[calc(100vh-72px)] bg-[#f7931e]">
      <div className="px-3 md:px-5 h-full">
        <div className="max-w-7xl mx-auto flex flex-col justify-between py-16 h-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-2xl">Apollo Supply Chain</h4>
            <div className="h-1 w-10 bg-white" />
          </div>

          <div className="flex items-center justify-center">
            {/* <SupplyChainCarousel items={slideNodes} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainBanner;
