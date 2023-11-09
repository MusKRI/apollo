import FocusVideo from "../../images/focus-video.png";

const OurFocus = () => {
  return (
    <div className="bg-white py-16 md:py-32 h-screen lg:h-[120vh]">
      <div className="relative">
        <div className="absolute max-w-4xl w-full h-[460px] left-0 top-0 p-5 bg-[#eee5e2] rounded-tr-lg rounded-br-lg flex flex-col items-center">
          <div className="flex flex-row gap-8">
            <h1 className="text-7xl font-bold">
              Our
              <br />
              Focus
            </h1>
            <p className="max-w-xl text-[#525252] text-lg">
              At Apollo Green Energy, we deeply care about making a real
              difference. We work hard to boost the economy while making life
              better for everyone in our communities. It&apos;s not just
              business to us; it&apos;s about touching lives, bringing hope, and
              leaving a positive mark on the world. Because, What’s good for
              people and the planet, is good for us.
            </p>
          </div>
        </div>

        <div className="absolute max-w-4xl w-full h-[460px] right-0 top-[400px] lg:top-72">
          <div className="relative">
            <img
              src={FocusVideo}
              alt="Focus Video"
              className="rounded-tl-lg rounded-bl-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFocus;
