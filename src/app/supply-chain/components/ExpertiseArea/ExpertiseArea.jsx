// **** Library Imports ****

import SectionHeading from "../../../components/SectionHeading";

// **** Local Imports ****

const ExpertiseArea = () => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32 gap-10">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-[#f7931e] text-xl font-medium">
            Areas of Expertise
          </h3>

          <SectionHeading classes="text-center mt-2">
            Our Businesses
          </SectionHeading>

          <p className="text-body-text text-center max-w-lg text-lg">
            Apollo Supply Chain&apos;s customized integrated solutions for
            supply chain competitiveness and resilience include:
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseArea;
