// import Arrow from "../../images/arrow.png";

const MakingDifference = ({ data }) => {
  return (
    <div className="relative py-4 md:py-20">
      <div className="px-8 flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex justify-end relative">
          <h1 className="text-5xl font-semibold">{data?.title}</h1>

          {/* <div className="absolute bottom-4 w-60 hidden md:block">
            <img alt="Arrow" src={Arrow} />
          </div> */}
        </div>
        <div className="flex-1 flex-col flex gap-4">
          <p className="text-lg max-w-xl">{data?.desc1}</p>
          <p className="text-lg max-w-xl">{data?.desc2}</p>

          {/* <button className="self-start border p-8 text-center flex items-center justify-center rounded-full animate-pulse">
            Explore
            <br />
            More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MakingDifference;
