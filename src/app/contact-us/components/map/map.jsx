import Map from "../../images/map.png";

const ContactMap = () => {
  return (
    <div className="relative h-auto lg:h-screen">
      <div className="relative w-full h-full flex items-center justify-center bg-[#2e3192]">
        <img src={Map} alt="" className="max-w-full object-cover" />

        <div className="absolute flex items-center bg-white rounded-3xl px-[4px] py-[2px] top-[53%] right-[30%]">
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
      </div>
    </div>
  );
};

export default ContactMap;
