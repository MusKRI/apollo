const AboutUsBanner = () => {
  return (
    <div className="relative h-[calc(100vh-72px)]">
      <img
        src="https://images.unsplash.com/photo-1598704710590-dbb8d9815b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        alt="About Us Banner"
        className="h-[calc(100vh-72px)] w-full object-cover"
      />

      <div className="absolute inset-0 top-0 z-[1] backdrop-brightness-[0.7] px-3 md:px-5">
        <div className="max-w-7xl mx-auto flex flex-col justify-between py-16 h-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-2xl">About Apolloindia</h4>
            <div className="h-1 w-10 bg-white" />
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-white text-5xl lg:text-7xl font-semibold">
              India&apos;s Leading Global Business Conglomerate
            </h1>
            <p className="text-white max-w-sm text-lg">
              Witness our journey of building a cleaner and greener India
              harnessing the power of sun and the strength of the wind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
