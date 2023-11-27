// **** Library imports *****
// import { motion } from "framer-motion";

// local imports
import Imgs from "./images/imgs2.jpeg";

// const imgNodes = [
//   {
//     id: "1",
//     img: "https://images.unsplash.com/photo-1534709153997-d6659469f951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
//     title: "Excepteur sint occaecat",
//     description:
//       "Excepteur sint occaecat cupdatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",
//   },
// ];

const WhoWeAre = ({ data }) => {
  return (
    <div className="relative h-[60vh]">
      <div className="img-gradient">
        <img
          src={data.image ?? Imgs}
          alt="Contact Banner"
          className="h-[60vh] max-w-full w-full min-w-0 object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center p-10 md:p-20">
        <div className="flex flex-col gap-10">
          <p className="text-white max-w-xl text-lg md:text-xl">
            {data?.nodes?.title}
            {data?.nodes?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
