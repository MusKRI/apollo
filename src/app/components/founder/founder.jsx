// **** Library Imports ****

// **** Local Imports ****
import GPImg from "./images/gp.png";
import SectionHeading from "../SectionHeading";

const Founder = ({ data }) => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="absolute inset-0 z-[-2] clipGradient"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between py-16 md:py-32 relative">
        <div className="flex-1 px-6 flex flex-col gap-3 order-1 md:order-[0] self-center">
          <SectionHeading>{data.humbleSection}</SectionHeading>
          <SectionHeading classes="font-bold self-end md:self-start"></SectionHeading>

          {/* <p className="text-body-text">{data.humbleSubSection}</p> */}

          <h4 className="italic text-xl whitespace-pre-line font-bold">
            &quot;{data.humbleFinalSection}&quot;
          </h4>
        </div>

        <div className="flex-1 flex flex-row justify-center order-[0] md:order-1">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={GPImg}
              alt="about-img1"
              className="w-[400px] md:w-[540px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
