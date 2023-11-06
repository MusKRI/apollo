const NewsHero = ({ heroData }) => {
  return (
    <div className="bg-white h-96 px-8 md:px-20">
      <div className="relative">
        <div className="absolute right-0 top-20 z-[1] w-96 md:w-auto">
          <img
            src={heroData.heroCardImage}
            alt="Blogs Hero"
            className="rounded-xl"
          />
        </div>

        <div className="absolute left-0 md:left-12 top-40 md:top-72 z-[2] bg-white shadow-md py-8 md:w-[600px] min-h-52 md:h-[300px] rounded-md w-80">
          <div className="py-3 flex flex-col gap-3 md:gap-8">
            <div className="flex items-center gap-[11px] px-4 relative">
              <span className="absolute bg-[#2e3192] left-0 top-0 w-[2px] h-full"></span>
              <span className="uppercase font-semibold">NEWS</span>
            </div>

            <div className="px-4 relative">
              <h1 className="text-xl md:text-4xl font-bold">
                {heroData.heroCardTitle}
              </h1>
            </div>

            <div className="px-4 relative">
              <span className="text-gray-400 uppercase">
                {heroData.heroCardDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
