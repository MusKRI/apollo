import Arrow from "../../images/arrow.png";

const MakingDifference = () => {
  return (
    <div className="relative py-4 md:py-20">
      <div className="px-8 flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex justify-end relative">
          <h1 className="text-5xl font-semibold">
            Making a difference, one
            <br />
            project at a time
          </h1>

          <div className="absolute bottom-4 w-60 hidden md:block">
            <img alt="Arrow" src={Arrow} />
          </div>
        </div>
        <div className="flex-1 flex-col flex gap-4">
          <p className="text-lg max-w-xl">
            For each of us in the Apollo Green Energy/ Apollo Group, every
            project&apos;s successful execution fills our hearts with deep
            satisfaction. It&apos;s a tangible reflection of our dedication to
            embodying our values and playing a leadership role, all while being
            a caring and responsible corporate citizen.
          </p>
          <p className="text-lg max-w-xl">
            As we contribute in our humble way, we&apos;re inspired by the
            realization that there&apos;s much more to do, especially
            considering the size and unique challenges of our country.
          </p>

          <button className="self-start border p-8 text-center flex items-center justify-center rounded-full animate-pulse">
            Explore
            <br />
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakingDifference;
