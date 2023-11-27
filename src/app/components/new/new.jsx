import Imgs from "./imgs2.jpeg";

const NewSection = ({ data }) => {
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
            {data?.description ??
              "Since our inception, we've dedicated ourselves to delivering sustainable value creation. Our initiatives span education, healthcare, and environmental sustainability, aiming to uplift underserved communities and foster a sustainable nation. Each project we undertake reflects our dedication to embodying our values and serving as responsible corporate citizens, all while making a tangible difference."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
