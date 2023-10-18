// **** Library Imports ****
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./carousel.css";

// **** Local Imports ****
// import CarouselItem from "./CarouselItem";

const SupplyChainCarousel = ({ slideNodes }) => {
  return (
    <Splide
      hasTrack={false}
      options={{
        arrows: false,
        perPage: 1,
        perMove: 1,
        focus: "center",
        pagination: true,
        gap: "10px",
      }}
    >
      <SplideTrack className="overflow-visible overflow-x-clip">
        {slideNodes.map((slide) => {
          return (
            <SplideSlide key={slide.id} className="">
              <div className="flex flex-col gap-3 h-full items-center w-full">
                <div className="relative rounded-lg flex flex-col gap-4">
                  <img
                    src={slide.slideImage}
                    alt="IMG1"
                    className="rounded-lg w-[300px] lg:w-full"
                  />
                  <h4 className="text-xl bg-white text-center">
                    {slide.slideTitle}
                  </h4>
                </div>
                {/* <p
                
                className="text-lg text-[#525252] text-center overflow-hidden"
              >
                {imgNode.description}
              </p> */}
              </div>
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
};

export default SupplyChainCarousel;
