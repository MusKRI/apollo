// **** Library Imports *****

// **** Local Imports ****

const AboutBusiness = () => {
  return (
    <section className="relative py-16 md:py-32 flex flex-col lg:flex-row lg:items-center">
      <div className="flex-1">
        <div className="w-3/4 h-40 bg-[#2e3192] rounded-tr-full rounded-br-full flex items-center justify-end">
          <h1 className="pr-4 text-3xl lg:text-5xl text-white">
            Landmarks in the making
          </h1>
        </div>
      </div>
      <div className="flex-1">
        <div className="max-w-2xl mr-auto">
          <h4 className="text-body-text leading-8 text-lg">
            We are presenlty executing several mega projects ranging from
            high-speed rail & dedicated freight corridors to metro rail systems,
            from river & sea bridges to large water, power & solar
            infrastructure, many of which will be the first of their kind.
            Constructing to speed & scale, we continue to do what we do best:
            engineering defining infrastructure and building nations.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default AboutBusiness;
