// **** Local Imports ****
import Banner from "../../images/banner-img.png";

const BusinessBanner = () => {
  return (
    <div className="relative h-[calc(100vh-72px)]">
      <img
        src={Banner}
        alt="Business Banner"
        className="h-[calc(100vh-72px)] w-full object-cover"
      />

      <div className="absolute inset-0 top-0 z-[1] backdrop-brightness-[0.7] px-3 md:px-5">
        <div className="max-w-7xl mx-auto flex flex-col justify-between py-16 h-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-2xl">About Business</h4>
            <div className="h-1 w-10 bg-white" />
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-white text-5xl lg:text-7xl font-semibold">
              Building a Safer
              <br />& Sustainable Tomorrow
            </h1>
            <p className="text-white max-w-md text-lg">
              Change starts with strategy. Strategy starts with change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;
