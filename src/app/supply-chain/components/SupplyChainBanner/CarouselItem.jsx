// **** Library Imports ****
import { useState } from "react";

// **** Local Imports ****

const CarouselItem = ({ index, activeIndex, item }) => {
  const [scaled, setScaled] = useState(false);

  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProps = `
    rotateY(calc(${offset} * 45deg))
    scaleY(calc(1 +  ${absOffset}  * -0.1))
    translateX(calc( ${direction} * -3.5rem))
    translateZ(calc( ${absOffset} * -35rem))
  `;

  const cssOpacity = `${Math.abs(index - activeIndex) >= 3 ? "0" : "1"}`;

  const cssDisplay = `${Math.abs(index - activeIndex) >= 3 ? "none" : "block"}`;

  return (
    <div
      className="sc-carousel-item"
      style={{
        transform: cssTransformProps,
        opacity: cssOpacity,
        display: cssDisplay,
        // zIndex: `${scaled ? 100 : 1}`,
      }}
      // onClick={() => {
      //   setScaled(!scaled);
      // }}
    >
      <img src={item.slideImage} alt="Hello Hello" className="rounded-3xl" />
    </div>
  );
};

export default CarouselItem;
