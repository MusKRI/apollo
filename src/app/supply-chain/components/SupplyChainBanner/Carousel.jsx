import { useState, useEffect } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

import "./carousel.css";

export function ImageCarousel({ images }) {
  const [animation, setAnimation] = useState({
    direction: "stop",
    imageIndex: 0,
  });

  const getSecondImageIndex = (currIndex, dir) => {
    return dir === "stop"
      ? currIndex
      : (currIndex + (dir === "right" ? 1 : -1) + images.length) %
          images.length;
  };

  const onNext = () => {
    if (animation.direction === "stop") {
      setAnimation({
        ...animation,
        direction: "right",
      });
    }
  };

  const onPrevious = () => {
    if (animation.direction === "stop") {
      setAnimation({
        ...animation,
        direction: "left",
      });
    }
  };

  const onTransitionEnd = () => {
    setAnimation((prevAnimation) => ({
      ...prevAnimation,
      direction: "stop",
      imageIndex: getSecondImageIndex(
        prevAnimation.imageIndex,
        prevAnimation.direction
      ),
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (animation.direction === "stop") {
        setAnimation((prevAnimation) => ({
          ...prevAnimation,
          direction: "right",
        }));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [animation.direction]);

  return (
    <div className="mx-auto">
      <div className="max-w-2xl w-[300px] h-[300px] lg:w-[600px] lg:h-[500px] relative overflow-hidden mx-auto">
        <img
          className="image firstImage"
          src={images[animation.imageIndex]}
          data-animate={animation.direction}
          onTransitionEnd={onTransitionEnd}
        />
        <img
          className="image"
          src={
            images[
              getSecondImageIndex(animation.imageIndex, animation.direction)
            ]
          }
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-row items-center gap-8 mt-10">
        <button
          className="border p-2 rounded-full border-gray-300"
          onClick={onPrevious}
        >
          <FiArrowLeft className="w-6 h-6 text-zinc-100" />
        </button>
        <button
          className="border p-2 rounded-full border-gray-300"
          onClick={onNext}
        >
          <FiArrowRight className="w-6 h-6 text-zinc-100" />
        </button>
      </div>
    </div>
  );
}
