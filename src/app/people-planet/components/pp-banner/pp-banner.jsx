const PeoplePlanetBanner = ({ data }) => {
  return (
    <div className="relative h-[calc(100vh-72px)]">
      <img
        src={data.bgImage}
        alt="People Planet Banner"
        className="h-[calc(100vh-72px)] w-full object-cover"
      />

      <div className="absolute inset-0 top-0 z-[1] backdrop-brightness-[0.5] px-3 md:px-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 py-16 h-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-2xl">{data.tag}</h4>
            <div className="h-1 w-10 bg-white" />
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-white text-5xl lg:text-7xl font-semibold">
              {data.heading}
            </h1>

            <p className="text-white max-w-md text-lg ml-4 lg:ml-20">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePlanetBanner;
