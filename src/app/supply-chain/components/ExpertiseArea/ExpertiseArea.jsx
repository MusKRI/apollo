// **** Library Imports ****
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./index.css";

// **** Local Imports ****
import SectionHeading from "../../../components/SectionHeading";

import slide1Img from "../../images/sc-business/slide1.png";
import slide2Img from "../../images/sc-business/slide2.png";
import slide3Img from "../../images/sc-business/slide3.png";

const slideNodes = [
  {
    id: "1",
    slideImage: slide1Img,
    slideTitle: "Warehousing",
  },
  {
    id: "2",
    slideImage: slide2Img,
    slideTitle: "In-plant Warehousing",
  },
  {
    id: "3",
    slideImage: slide3Img,
    slideTitle: "Surface Transport",
  },
  {
    id: "4",
    slideImage: slide3Img,
    slideTitle: "Surface Transport",
  },
  {
    id: "5",
    slideImage: slide3Img,
    slideTitle: "Surface Transport",
  },
  {
    id: "6",
    slideImage: slide3Img,
    slideTitle: "Surface Transport",
  },
];

const ExpertiseArea = () => {
  return (
    <section className="relative px-3 md:px-5 ExpertiseArea">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32 gap-10">
        <div className="flex flex-col gap-4 items-center">
          <SectionHeading classes="text-center mt-2 text-[#f7931e]">
            Areas of Expertise
          </SectionHeading>

          <p className="text-body-text text-center max-w-lg text-lg">
            Apollo Supply Chain&apos;s customized integrated solutions for
            supply chain competitiveness and resilience include:
          </p>
        </div>

        <div className="min-h-[250px] md:min-h-[450px] flex items-center mb-40 md:mb-0 overflow-x-clip">
          <Splide
            hasTrack={false}
            options={{
              height: "350px",
              arrows: false,
              perPage: 3,
              perMove: 1,
              // focus: "center",
              pagination: true,
              gap: "10px",
              breakpoints: {
                840: {
                  perPage: 1,
                  height: "150px",
                  gap: "10px",
                },
              },
            }}
          >
            <SplideTrack className="overflow-visible overflow-x-clip">
              {slideNodes.map((slide) => {
                return (
                  <SplideSlide key={slide.id} className="">
                    <div className="flex flex-col gap-3 h-full items-center">
                      <div className="relative border-2 border-black rounded-lg p-4 flex flex-col gap-4">
                        <img
                          src={slide.slideImage}
                          alt="IMG1"
                          className="rounded-lg -mt-12"
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
        </div>
      </div>
    </section>
  );
};

export default ExpertiseArea;
