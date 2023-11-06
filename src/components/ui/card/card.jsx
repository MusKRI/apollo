import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={data.cardSlug}>
      <div className="w-[370px] rounded-xl bg-white group shadow-md h-full">
        <div className="relative max-w-full">
          <img src={data.cardImage} alt="Blog" className="" />
        </div>
        <div className="py-3 flex flex-col gap-8">
          <div className="flex items-center gap-[11px] px-4 relative">
            <span className="absolute bg-[#2e3192] left-0 top-0 w-[2px] h-full"></span>
            <span className="uppercase font-semibold">{data.cardTag}</span>
            <span className="p-1 bg-gray-300 rounded-full" />
            <span className="text-gray-400 uppercase">{data.cardReading}</span>
            <span className="p-1 bg-gray-300 rounded-full" />
            <span className="text-gray-400 uppercase">{data.cardDate}</span>
          </div>

          <div className="px-4 relative">
            <h1 className="text-3xl font-bold">{data.cardTitle}</h1>
          </div>

          <div className="px-4 relative flex items-center">
            <Link
              to={data.cardSlug}
              className="p-1 rounded-full group-hover:bg-[#2e3192] transition delay-75"
            >
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 group-hover:text-white transition" />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
