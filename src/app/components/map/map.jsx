import MapImg from "./images/map.png";

const HomeMap = () => {
  return (
    <div className="relative h-auto lg:min-h-screen">
      <h1 className="text-center text-3xl lg:text-5xl py-8 font-bold">
        Making Impact Across Globe
      </h1>
      <div className="relative w-full h-full flex items-center justify-center bg-[#2e3192]">
        <img src={MapImg} alt="" className="max-w-full object-cover" />

        <div className="absolute flex items-center bg-white rounded-3xl px-[4px] py-[2px] top-[53%] right-[30vw]">
          <img
            src={
              "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png"
            }
            alt="India"
            className="w-6 max-w-full object-cover rounded-3xl"
          />
          <span className="text-sm px-1">India</span>
        </div>

        <div className="absolute flex items-center bg-white rounded-3xl px-[4px] py-[2px] top-[31%] left-[23%]">
          <img
            src={
              "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png"
            }
            alt="India"
            className="w-6 max-w-full object-cover rounded-3xl"
          />
          <span className="text-sm px-1">USA</span>
        </div>

        <div className="absolute flex items-center bg-white rounded-3xl px-[4px] py-[2px] top-[43%] left-[43%]">
          <img
            src={
              "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/spain-flag-icon.png"
            }
            alt="India"
            className="w-6 max-w-full object-cover rounded-3xl"
          />
          <span className="text-sm px-1">Spain</span>
        </div>

        <div className="absolute flex items-center bg-white rounded-3xl px-[4px] py-[2px] top-[43%] left-[55%]">
          <img
            src={
              "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/bahrain-flag-icon.png"
            }
            alt="India"
            className="w-6 max-w-full object-cover rounded-3xl"
          />
          <span className="text-sm px-1">Bahrain</span>
        </div>
      </div>
    </div>
  );
};

// https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png

export default HomeMap;
