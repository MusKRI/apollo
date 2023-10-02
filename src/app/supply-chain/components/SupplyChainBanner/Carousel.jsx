// **** Library Imports ****
import { useState } from "react";

// **** Local Imports ****
import CarouselItem from "./CarouselItem";

const SupplyChainCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleNextItemBtn() {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev;
    });
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev;
    });
  }

  return (
    <div className="sc-carousel-container">
      {items.map((item, index) => {
        return (
          <CarouselItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
          />
        );
      })}
    </div>
  );
};

export default SupplyChainCarousel;
