// **** Library imports *****
import { motion } from "framer-motion";

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
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32">
        <div className="flex flex-col gap-7 items-center">
          <h2 className="text-green text-center text-2xl">{data?.subtitle}</h2>
          <h1 className="text-6xl">{data?.title}</h1>
        </div>

        <motion.div
          layout="position"
          className="mt-20 flex flex-row items-center flex-wrap justify-center gap-10"
          initial={{
            y: 60,
            opacity: 0,
          }}
          viewport={{
            once: true,
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
          {data?.nodes.map((imgNode) => {
            return (
              <motion.div
                layout="position"
                className="flex flex-row gap-8 h-full items-center"
                key={imgNode.id}
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                viewport={{
                  once: true,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    when: "beforeChildren",
                  },
                }}
              >
                <motion.div className="relative w-96 rounded-lg p-4 flex flex-col gap-4">
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
                    viewport={{
                      once: true,
                    }}
                    src={imgNode.img}
                    alt="IMG1"
                    className="rounded-lg w-96"
                  />
                </motion.div>

                <div className="flex flex-col gap-3 max-w-lg">
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.8,
                      },
                    }}
                    className="text-xl bg-white"
                  >
                    {imgNode.title}
                  </motion.h4>

                  <motion.p
                    initial={{
                      y: 100,
                      opacity: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    className="text-lg text-[#525252] overflow-hidden"
                  >
                    {imgNode.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
