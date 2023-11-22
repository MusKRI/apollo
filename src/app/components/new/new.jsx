import Imgs from "./imgs.jpeg";

const NewSection = ({ data }) => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between py-16 md:py-32 relative">
        <div className="flex-1 flex flex-row justify-center order-[0] md:order-1">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={data.image ?? Imgs}
              alt="about-img1"
              className="w-[400px] md:w-[540px] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex-1 px-6 flex flex-col gap-3 order-1 md:order-[0] self-center">
          {/* <p className="text-body-text">{data.humbleSubSection}</p> */}

          <h4 className="text-xl">
            {data.description ??
              "Since our inception, we've dedicated ourselves to delivering sustainable value creation. Our initiatives span education, healthcare, and environmental sustainability, aiming to uplift underserved communities and foster a sustainable nation. Each project we undertake reflects our dedication to embodying our values and serving as responsible corporate citizens, all while making a tangible difference."}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
