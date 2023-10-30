import Map from "../../images/map.png";

const ContactMap = () => {
  return (
    <div className="relative h-screen bg-[#2e3192]">
      <div className="relative w-full h-full flex items-center justify-center">
        <img src={Map} alt="" className="max-w-full object-cover mix-blend-" />
      </div>
    </div>
  );
};

export default ContactMap;
