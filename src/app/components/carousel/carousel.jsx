/* eslint-disable react-hooks/exhaustive-deps */
// **** Library Imports ****
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import videos from "../../../assets/Mainvideo.mp4"
// **** Local Imports ****
import { cn } from "../../../lib/utils";

const images = [
  {
    src: videos,
    alt: "Image 1",
  },
];

const Carousel = () => {
  const [change, setChange] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    watchDrag: true,
    breakpoints: {
      "(min-width:768px)": {
        watchDrag: false,
      },
    },
  });
  const activeSnap = useCallback(() => {
    if (emblaApi) return emblaApi.selectedScrollSnap();
  }, [emblaApi, change]);

  const scrollToSnap = useCallback(
    (activeIndex) => {
      if (emblaApi) emblaApi.scrollTo(activeIndex);
    },
    [emblaApi, change]
  );

  return (
    <div className="relative">
      <div className="embla overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container flex xl:h-[650px]">
          {images.map((image) => {
            return (
              <div
                className="embla__slide flex-[0_0_100%] min-w-0 max-w-full relative"
                key={image.alt}
              >
                <div className="">
                  <video
                    muted
                    loop="true"
                    autoplay="autoplay"
                    src={image.src}
                    alt={image.alt}
                    autoPlay="true"
                    className="object-fill"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute left-0 bottom-12 right-0 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center gap-5 px-5">
          {images.map((item, index) => {
            const isActive = index === activeSnap();

            return (
              <div
                key={item.alt}
                
                className="cursor-pointer"
                onClick={() => {
                  setChange((prev) => prev + 1);
                  scrollToSnap(index);
                }}
              >
                <div className="flex flex-col">
                   
                  <div
                    className={cn(
                      "h-[2px] w-20",
                      isActive ? "bg-white" : "bg-slate-300"
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
