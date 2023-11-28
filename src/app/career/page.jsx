import { motion } from "framer-motion";

import CareerBanner from "./components/career-banner/career-banner";

import BannerImg from "./images/banner.jpeg";

import sq2 from "./images/life.jpeg";
import ForceofFive from "./images/forceoffive2.jpeg";
import d1 from "./images/d1.png";
import d2 from "./images/d2.png";
import d3 from "./images/d3.png";
import d4 from "./images/d4.png";
import d5 from "./images/d5.png";

const Career = () => {
  let CardData = [
    {
      Title: "Product Designer",
      Subtitle:
        "We are looking for  a mid-level product designer to join our team.",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      Title: "Content Writer",
      Subtitle:
        "We are looking for  a mid-level Content Writer to join our team.",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },

    {
      Title: "Product Designer",
      Subtitle:
        "We are looking for a mid-level product designer to join our team.",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      Title: "Product Designer",
      Subtitle:
        "We are looking for  a mid-level product designer to join our team.",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      Title: "Content Writer",
      Subtitle:
        "We are looking for  a mid-level Content Writer to join our team.",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },

    {
      Title: "Product Designer",
      Subtitle:
        "We are looking for a mid-level product designer to join our team.",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
  ];

  let ForceFive = [
    {
      name: "Own It",
      description:
        "The entrepreneurial spirit runs strong at Apollo Green Energy. We encourage our people to think big and own their work.",
    },
    {
      name: "Do The Right",
      description:
        "Thing Integrity is the foundation for everything we do. We are admired and respected for our commitment to honesty, trust, and transparency. We do the right thing — even when no one is watching.",
    },
    {
      name: "Be The Next",
      description:
        "We strive to set the highest standard of quality in everything we do. We always want to drive towards the next great thing by constantly challenging ourselves to improve and break new ground.",
    },
    {
      name: "Action Is Our First Instinct",
      description:
        "We only succeed when our clients do — and that drives us. Our people will overcome obstacles, find solutions, and deliver exceptional results that help our clients be ahead",
    },

    {
      name: "Stronger United",
      description:
        "We’ve created a positive and inclusive culture that fosters open, honest, and meaningful relationships. We celebrate and embrace our diversity, finding ways for everyone to belong.",
    },
  ];

  const data = {
    bannerImg: BannerImg,
    bannerTitle: "Unlock Your Potential",
  };
  return (
    <>
      <CareerBanner
        data={{
          bannerImg: data?.bannerImg,
          bannerTitle: data?.bannerTitle,
        }}
      />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 py-10"
            style={{ backgroundColor: "#333694", color: "white" }}
          >
            <div className="row flex flex-col items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                  },
                }}
                className="collage col-12 flex items-center justify-center w-[500px]"
              >
                <img
                  src={sq2}
                  alt=""
                  className="rounded-md"
                  // style={{ width: "100%", height: "100px" }}
                />
              </motion.div>
              <div className="col-12">
                <div className="container-fluid mt-5">
                  <div className="row justify-content-center">
                    <div className="col-9">
                      <motion.h1
                        initial={{
                          opacity: 0,
                          x: -100,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.8,
                          },
                        }}
                        className="text-3xl font-semibold"
                      >
                        Life At Apollo Green Energy: Join Our Vision, Shape Your
                        Future
                      </motion.h1>
                    </div>
                    <div className="col-9 mt-2 mb-5">
                      <div className="row">
                        <div className="col-8">
                          <motion.p
                            initial={{
                              opacity: 0,
                              x: -100,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 0.8,
                              },
                            }}
                            className="text-lg"
                          >
                            Apollo Green Energy offers an inspiring environment,
                            fosters an inclusive work culture that thrives on
                            diversity, offering an inspiring environment and
                            work-life balance for all.
                          </motion.p>
                          <motion.p
                            initial={{
                              opacity: 0,
                              x: -100,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 0.8,
                              },
                            }}
                            className="text-lg"
                          >
                            At Apollo Green Energy, we're committed to offering
                            more than just employment. We create fresh career
                            opportunities that intersect with our business,
                            enabling you to unleash your full potential while
                            driving our growth forward. We firmly believe that
                            our employees, with their innovative skills, are the
                            driving force behind our operational efficiency
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Force Five */}
          <div className="col-12 mt-5">
            <div className="container  mb-5">
              <div className="row">
                <div className="col-12">
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    style={{ fontWeight: "bold", fontSize: "55px" }}
                  >
                    Force of Five
                  </motion.h1>
                </div>
                <div className="col-lg-4 mt-3">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -100,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    className="row"
                  >
                    <img src={ForceofFive} alt="" className="rounded-md" />
                  </motion.div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    {ForceFive.map((self, index) => {
                      return (
                        <div className="col-12" key={index}>
                          <div
                            className="card"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                              borderRadius: "0px",
                              padding: "20px 2px",
                            }}
                          >
                            <div className="row">
                              <div
                                className="col-lg-2"
                                style={{ fontWeight: "450", FontSize: "30px" }}
                              >
                                0{index}
                              </div>
                              <div
                                className="col-lg-3"
                                style={{ fontWeight: "450", FontSize: "30px" }}
                              >
                                {self.name}
                              </div>
                              <div className="col-lg-7">{self.description}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Discovery Section */}
          <div
            className="col-12 mb-5 mt-5 py-5"
            style={{ backgroundColor: "#2e3192", color: "white" }}
          >
            <div className="container">
              <div className="row">
                <div
                  className="col-12 mt-3"
                  style={{ fontWeight: "bold", fontSize: "25px" }}
                >
                  <motion.p
                    initial={{
                      opacity: 0,
                      x: -100,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                  >
                    Discover what makes Apollo
                  </motion.p>
                  <motion.p
                    initial={{
                      opacity: 0,
                      x: -100,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                  >
                    Green Energy a Sought-after Employer:{" "}
                  </motion.p>
                </div>
                <div className="col-12 mb-5  mt-5">
                  <div className="row">
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                        },
                      }}
                      className="col-lg-4 d-flex justify-content-center"
                    >
                      <img src={d1} alt="" style={{ maxWidth: "60%" }} />
                    </motion.div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                        },
                      }}
                      className="col-lg-4 mt-5"
                    >
                      A strong, consistent, and meritocratic HR framework helps
                      Apollo Green Energy in maintaining a forward-thinking work
                      environment where talent with a purpose is drawn and
                      engaged. The entrepreneurial culture at Apollo Green
                      Energy attempts to inspire all employees to play an
                      integral role in the organisation’s growth.
                    </motion.div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                        },
                      }}
                      className="col-lg-4 d-flex justify-content-space-around align=items-start"
                    >
                      <img src={d2} alt="" />
                    </motion.div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4 relative">
                      <motion.img
                        initial={{
                          x: 26,
                          y: -16,
                        }}
                        whileInView={{
                          x: 0,
                          y: 0,
                          transition: {
                            duration: 0.8,
                          },
                        }}
                        src={d3}
                        alt=""
                        style={{ maxWidth: "70%" }}
                        className="rounded-t-full relative z-[2]"
                      />
                      <div className="absolute border -top-4 left-10 w-full h-full max-w-[65%] rounded-t-full z-0"></div>
                    </div>
                    <div className="col-4 relative">
                      <motion.img
                        initial={{
                          x: 26,
                          y: -16,
                        }}
                        whileInView={{
                          x: 0,
                          y: 0,
                          transition: {
                            duration: 0.8,
                          },
                        }}
                        src={d4}
                        alt=""
                        style={{ maxWidth: "70%" }}
                        className="rounded-t-full relative z-[2]"
                      />
                      <div className="absolute border -top-4 left-10 w-full h-full max-w-[65%] rounded-t-full z-0"></div>
                    </div>
                    <div className="col-4 relative">
                      <motion.img
                        initial={{
                          x: 26,
                          y: -16,
                        }}
                        whileInView={{
                          x: 0,
                          y: 0,
                          transition: {
                            duration: 0.8,
                          },
                        }}
                        src={d5}
                        alt=""
                        style={{ maxWidth: "70%" }}
                        className="rounded-t-full relative z-[2]"
                      />
                      <div className="absolute border -top-4 left-10 w-full h-full max-w-[65%] rounded-t-full z-0"></div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 headings mt-3">
                      <div className="row">
                        <motion.div
                          initial={{
                            x: -100,
                            opacity: 0,
                          }}
                          whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                              duration: 0.8,
                            },
                          }}
                          className="col-4 text-2xl"
                        >
                          Learning and Development
                        </motion.div>
                        <motion.div
                          initial={{
                            y: 10,
                            opacity: 0,
                          }}
                          whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              duration: 0.8,
                            },
                          }}
                          className="col-4 text-2xl"
                        >
                          Diversity and Inclusion
                        </motion.div>
                        <motion.div
                          initial={{
                            x: 100,
                            opacity: 0,
                          }}
                          whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                              duration: 0.8,
                            },
                          }}
                          className="col-4 text-2xl"
                        >
                          Growth Opportunities
                        </motion.div>
                      </div>
                    </div>
                    <div className="col-12 content mt-3">
                      <div className="row">
                        <motion.div
                          initial={{
                            x: -100,
                            opacity: 0,
                          }}
                          whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                              duration: 0.8,
                            },
                          }}
                          className="col-4"
                        >
                          Apollo Green Energy nurtures high-potential people
                          inside the organization and offers them opportunities
                          for accelerated learning and development. There are
                          various vertical and team-level initiatives that help
                          hone the skills while, on the job
                        </motion.div>
                        <motion.div
                          initial={{
                            y: 10,
                            opacity: 0,
                          }}
                          whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              duration: 0.8,
                            },
                          }}
                          className="col-4"
                        >
                          Apollo Green Energy is made up of people representing
                          diverse nationalities, cultures, genders, abilities,
                          age, and experiences. This creates a very enriching
                          and holistic working environment where every employee
                          engages, contributes, and eventually grows in the
                          workplace.
                        </motion.div>
                        <motion.div
                          initial={{
                            x: 100,
                            opacity: 0,
                          }}
                          whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                              duration: 0.8,
                            },
                          }}
                          className="col-4"
                        >
                          Our businesses are shaping key sectors of the modern
                          economy. This creates an abundance of opportunities
                          for people to shine, learn a ton and create a massive
                          impact.
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CurrentOpening */}
          <div className="col-12 mt-5 py-5">
            <div className="row">
              <div
                className="col-12 d-flex justify-content-center"
                style={{ fontSize: "55px" }}
              >
                <span style={{ color: "blue" }}>Current</span>{" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  Openings
                </span>
              </div>
              <div className="col-12">
                <div className="row">
                  {CardData.map((self, index) => {
                    return (
                      <div className="col-lg-6 mt-3 mb-2" key={index}>
                        <div className="card">
                          <div className="card-body">
                            <div className="card-title">
                              <div className="row">
                                <div
                                  className="col-lg-4 d-flex justify-content-start"
                                  style={{ fontWeight: "bold" }}
                                >
                                  {self.Title}
                                </div>
                                <div className="col-lg-4">
                                  <span
                                    style={{
                                      background: "#89CFF0",
                                      border: "1px solid white",
                                      borderRadius: "50px",
                                      padding: "5px 10px",
                                    }}
                                  >
                                    {self.status}
                                  </span>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-end">
                                  <img
                                    src={self.icon}
                                    alt=""
                                    style={{ maxWidth: "20px" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="card-subtitle mb-2 text-muted">
                              <div className="row">
                                <div className="col-8 d-flex">
                                  {self?.Subtitle}
                                </div>
                              </div>
                            </div>
                            {/* <a href="#" className="card-link">
                              Card link
                            </a>
                            <a href="#" className="card-link">
                              Another link
                            </a> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
