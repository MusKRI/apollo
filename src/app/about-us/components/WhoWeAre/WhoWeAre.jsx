// **** Library imports *****
import { motion } from "framer-motion";

const imgNodes = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1534709153997-d6659469f951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    title: "Excepteur sint occaecat",
    description:
      "Excepteur sint occaecat cupdatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1534709153997-d6659469f951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    title: "Excepteur sint occaecat",
    description:
      "Excepteur sint occaecat cupdatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1534709153997-d6659469f951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    title: "Excepteur sint occaecat",
    description:
      "Excepteur sint occaecat cupdatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1534709153997-d6659469f951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    title: "Excepteur sint occaecat",
    description:
      "Excepteur sint occaecat cupdatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32">
        <div className="flex flex-col gap-7 items-center">
          <h2 className="text-green text-center text-2xl">About Us</h2>
          <h1 className="text-6xl">Who We Are</h1>
        </div>

        <motion.div
          layout="position"
          className="mt-20 flex flex-row items-center flex-wrap justify-center gap-10"
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.3,
              duration: 0.8,
            },
          }}
        >
          {imgNodes.map((imgNode) => {
            return (
              <motion.div
                layout="position"
                className="flex flex-col gap-3 h-full w-72 items-center"
                key={imgNode.id}
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    when: "beforeChildren",
                  },
                }}
              >
                <motion.div className="relative w-64 h-60 border-2 border-black rounded-lg p-4 flex flex-col gap-4">
                  <motion.img
                    layout="size"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      height: "100%",
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.8,
                      },
                    }}
                    src={imgNode.img}
                    alt="IMG1"
                    className="rounded-lg -mt-12 w-60 h-48"
                  />
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.8,
                      },
                    }}
                    className="text-xl bg-white -ml-10"
                  >
                    {imgNode.title}
                  </motion.h4>
                </motion.div>
                <motion.p
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8
                    }
                  }}
                  className="text-lg text-[#525252] text-center overflow-hidden"
                >
                  {imgNode.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
