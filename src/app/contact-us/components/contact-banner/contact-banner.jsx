import { MoveDown } from "lucide-react";

import "./contact-banner.css";

// import BgContactUsImage from "../../images/bg-contactus.png";

const ContactBanner = ({ data }) => {
  return (
    <div className="relative h-[calc(100vh-72px)]">
      <div className="img-gradient">
        <img
          src={data?.bannerImage}
          alt="Contact Banner"
          className="h-[calc(100vh-72px)] max-w-full min-w-0 object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center p-10 md:p-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl md:text-8xl font-bold text-white">
            {data?.bannerTitle}
          </h1>

          <p className="text-white max-w-xl text-lg md:text-xl">
            {data?.bannerDescription}
          </p>

          <div className="border self-start py-2 rounded-full">
            <MoveDown className="h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
