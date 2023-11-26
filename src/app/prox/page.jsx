import ProxBanner from "./components/prox-banner/prox-banner";

import ProxBannerImg from "./image/banner.png";

import ProxAboutImage from "./image/about.png";

import ks1 from "./image/ks1.png";
import ks2 from "./image/ks2.png";
import ks3 from "./image/ks3.png";
import ks4 from "./image/ks4.png";

import UniqueEdge from "./image/unique-edge.png";

import GImg1 from "../business/images/grid-img1.png";
import GImg2 from "../business/images/grid-img2.png";
import GImg3 from "../business/images/grid-img3.png";
import GImg4 from "../business/images/grid-img4.png";
import GImg5 from "../business/images/grid-img5.png";

const ProXPage = () => {
  const proxData = {
    // contact banner data
    proxBannerImage: ProxBannerImg,
    proxBannerTitle: "Constructing A Safer",

    // prox about
    pAboutTitle: "About Us",
    pAboutDesc1:
      "Apollo Pro X is your comprehensive EPC (Engineering, Procurement, and Construction) partner, seamlessly delivering large-scale industrial and infrastructure projects from conception to completion. With a track record spanning two decades, we offer turnkey solutions with single-source responsibility.",
    pAboutDesc2:
      "Recognised for undertaking large, complex projects, fostering innovation, embracing emerging technologies, and making a difference to our clients, employees, and community.",
    pAboutImage: ProxAboutImage,

    // prox key services
    pKsTitle: "Our Key Services",
    pKsDescription:
      "We specialize in turnkey projects with expertise extending to operation maintenance for long-term efficiency and sustainability.",
    pKeyServices: [
      {
        icon: ks1,
        title: "Design & Build",
        desc: "Our specialized Design & Build unit is tailored to meet the demand for end-to-end delivery systems, ensuring stringent quality, cost, and schedule adherence.",
      },
      {
        icon: ks2,
        title: "Planning & Procurement Services",
        desc: "Efficient planning and streamlined procurement services to optimize resources and meet project goals.",
      },
      {
        icon: ks3,
        title: "Building Information Modelling (BIM)",
        desc: "Utilizing advanced Building Information Modelling (BIM) techniques, we ensure precise project visualization and modernized collaboration, enhancing efficiency and accuracy throughout the construction process.",
      },
      {
        icon: ks4,
        title: "Lean Construction",
        desc: "Through meticulous Lean Construction practices, we prioritize value, minimize waste, and optimize processes, ensuring cost-effective and simplified solutions.",
      },
    ],

    // broad section
    pbroadTitle: "Broad Presence in Key Segments",
    pbroadList: [
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
      "Industrial / Manufacturing",
    ],

    // unique edge
    pUEImage: UniqueEdge,
    pUETitle: "Our Unique Edge",
    pUEDesc1:
      "With an expertise spanning more than two decades and over 700 successfully completed projects, we are proud to have ZERO worksite incidents through pre-planning construction activities with 100% adherence to HSSE standards.",
    pUEDesc2:
      "Our team is equipped in providing end-to-end project solutions whilst ensuring safety standards and quality, stitching solutions to the customer's needs, and providing cost-competitive solutions.",
    pUEPoints: [
      "Technology and Innovation",
      "Timely & cost-effective project delivery",
      "Successful, seamless operations even in complex, uncertain environments",
      "Rich sectoral expertise in process industry",
      "Zero worksite incidents through pre-planning construction activities",
      "Excellent project track record & leadership through cost- efficiency",
      "Post project completion, workshops are conducted to ensure workforce at plant sites are well trained",
      "High quality material sourcing. 100% adherence to HSSE Standards",
      "ISO 90001, ISO 14001, ISO 45001 certified",
    ],
  };

  return (
    <>
      <ProxBanner
        data={{
          bannerImage: proxData.proxBannerImage,
          bannerTitle: proxData.proxBannerTitle,
          bannerDescription: proxData.proxBannerDescription,
        }}
      />

      {/* Prox About Section */}
      <section className=" bg-[#333694] text-white relative px-3 md:px-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center py-16 md:py-32">
          <div className="flex flex-col gap-4 flex-[0.6]">
            <h1 className="text-3xl lg:text-5xl font-bold">
              {proxData?.pAboutTitle}
            </h1>

            <p className="">{proxData?.pAboutDesc1}</p>
            <p className="">{proxData?.pAboutDesc2}</p>
          </div>

          <div className="relative flex-1 flex justify-center h-96">
            <img src={proxData?.pAboutImage} alt="" className="rounded-md" />
          </div>
        </div>
      </section>

      {/* Prox Key section */}
      <section className=" bg-white relative px-3 md:px-5">
        <div className="max-w-7xl mx-auto py-16 md:py-32 space-y-4">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            {proxData?.pKsTitle}
          </h1>
          <p className="font-medium max-w-lg">{proxData?.pKsDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proxData?.pKeyServices?.map((ks, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border rounded-md p-3 flex flex-col gap-3"
                >
                  <div className="relative w-16">
                    <img src={ks?.icon} alt="" />
                  </div>
                  <h2 className="text-2xl font-semibold">{ks?.title}</h2>
                  <p>{ks?.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Broad section */}
      <section className=" bg-[#f9f9f9] relative px-3 md:px-5">
        <div className="max-w-7xl mx-auto py-16 md:py-32 space-y-4">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            {proxData?.pbroadTitle}
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {proxData?.pbroadList?.map((pb, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border rounded-md p-3 flex flex-row gap-3"
                >
                  <div className="rounded-full bg-[#f7931e] p-2 w-12 flex items-center justify-center text-white shrink-0">
                    {index + 1}
                  </div>

                  <div className="border-l-2 px-5">{pb}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unique Edge Section */}
      <section className=" bg-[#333694] text-white relative px-3 md:px-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center py-16 md:py-32">
          <div className="relative flex justify-center w-96 shrink-0">
            <img src={proxData?.pUEImage} alt="" className="rounded-md -mb-8" />
          </div>
          <div className="flex flex-col gap-4 -mt-32">
            <h1 className="text-3xl lg:text-5xl font-bold">
              {proxData?.pUETitle}
            </h1>

            <p className="">{proxData?.pUEDesc1}</p>
            <p className="">{proxData?.pUEDesc2}</p>

            <div className="flex flex-col gap-2">
              {proxData?.pUEPoints?.map((point, idx) => {
                return (
                  <div key={idx} className="flex flex-row items-center gap-2">
                    <span className="border-2 w-3 h-3 rounded-full" />
                    <p>{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* snapshot */}
      <section className="relative px-3 md:px-5 bg-[#f6f7fb]">
        <div className="max-w-7xl mx-auto flex flex-col gap-5 py-16 md:py-32">
          <div className="flex flex-col gap-7">
            <h2 className="relative leading-snug text-3xl text-main-text after:absolute after:border-2 after:left-0 after:-bottom-4 after:w-10 after:border-main-text">
              Snapshot
            </h2>
          </div>

          <div className="mt-10 business_snapshot_imgages">
            <div className="ga-1 relative">
              <img src={GImg1} alt="Image 1" />
            </div>
            <div className="ga-2 relative">
              <img src={GImg2} alt="Image 1" />
            </div>
            <div className="ga-3 relative">
              <img src={GImg3} alt="Image 1" />
            </div>
            <div className="ga-4 relative">
              <img src={GImg4} alt="Image 1" />
            </div>
            <div className="ga-5 relative">
              <img src={GImg5} alt="Image 1" />
            </div>
          </div>
        </div>
      </section>

      <div className="col-12 mb-5 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <span style={{ fontWeight: "bold", fontSize: "55px" }}>
                Experience Apollo ProX
              </span>
              <div className="row">
                <div className="col-lg-6">
                  When you choose Apollo Pro X, you opt to for a safer and
                  sustainable future. Discover the difference of a reliable and
                  eco-friendly infrastructure with Apollo, where excellence is
                  not just a choice – it's the standard.
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <p style={{ fontWeight: "bold" }}>Address</p>
                      <p className="text-gray-500">
                        Apollo Marketplace, Apollo Towers, Plot No 20, Sector
                        44, Gurgaon-122002, Haryana, India
                      </p>
                    </div>
                    <div className="col-4">
                      <p style={{ fontWeight: "bold" }}>Phone</p>
                      <p className="text-gray-500">+91 120 4635800</p>
                    </div>
                    <div className="col-4">
                      <p style={{ fontWeight: "bold" }}>Email</p>
                      <p className="text-gray-500">
                        info@apollofashioncompany.com
                      </p>
                      <p className="text-gray-500">contact@apolloindia.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProXPage;
