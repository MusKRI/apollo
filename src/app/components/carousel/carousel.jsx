/* eslint-disable react-hooks/exhaustive-deps */
// **** Library Imports ****
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import videos from "../../../assets/Mainvideo.mp4";
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
        <div className="embla__container flex">
          {images.map((image) => {
            return (
              <div
                className="embla__slide flex-[0_0_100%] min-w-0 max-w-full relative"
                key={image.alt}
              >
                <div className="h-screen">
                  <video
                    muted
                    loop="true"
                    autoPlay={true}
                    src={image.src}
                    alt={image.alt}
                    className="object-fill"
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
