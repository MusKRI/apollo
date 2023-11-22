// **** Library Imports *****
import { motion } from "framer-motion";
import { RiTwitterXFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";

// ***** Local Imports ******

// const teamMembers = [
//   {
//     id: "1",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "2",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "3",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "4",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "5",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "6",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "7",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "8",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
// ];

const SocialContainerVariants = {
  hidden: {
    y: -3,
    opacity: 0,
  },
  onHover: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const socialVariants = {
  hidden: {
    y: -3,
    opacity: 0,
  },
  onHover: {
    y: 0,
    opacity: 1,
  },
};

const WonderfulTeam = ({ data }) => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32">
        <div className="flex flex-col gap-7 items-center">
          <h2 className="text-center text-2xl">{data?.subtitle}</h2>
          <h1 className="text-4xl lg:text-6xl">{data?.title}</h1>
        </div>

        <div className="mt-10 py-3">
          <div className="flex flex-wrap justify-center gap-8">
            {data?.members.map((member) => {
              return (
                <motion.div
                  className="lg:basis-1/5 relative bg-white shadow-lg rounded-lg flex flex-col lg:even:translate-y-10"
                  key={member.id}
                  initial="hidden"
                  whileHover="onHover"
                >
                  <motion.div
                    variants={SocialContainerVariants}
                    className="flex flex-row items-center gap-2 absolute top-3 right-3 z-10"
                  >
                    <motion.div
                      variants={socialVariants}
                      className="p-1 bg-white rounded-md cursor-pointer"
                    >
                      <ImLinkedin2 className="text-[#0077b8]" />
                    </motion.div>

                    <motion.div
                      variants={socialVariants}
                      className="p-1 bg-white rounded-md cursor-pointer"
                    >
                      <RiTwitterXFill />
                    </motion.div>
                  </motion.div>
                  <img
                    src={member.image}
                    alt="Member"
                    className="h-80 w-full rounded-lg"
                  />

                  <div className="px-8 py-10 text-center">
                    <h3 className="text-main-text text-xl font-bold">
                      {member.name}
                    </h3>
                    <p className="text-body-text">{member.position}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WonderfulTeam;
