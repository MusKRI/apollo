// **** Library Imports ****

// **** Local Imports ****
import SectionHeading from "../SectionHeading";

const Founder = () => {
  return (
    <section className="relative px-3 md:px-5 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-32">
        <div className="flex-1 flex flex-row justify-end gap-6">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt="about-img1"
              className="w-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1 px-6 flex flex-col gap-3">
          <SectionHeading>
            From Humble Beginnings to Transformational, Innovation
          </SectionHeading>
          <SectionHeading classes="font-bold">- Lead Growth</SectionHeading>

          <p className="text-body-text">
            A scion of the Kanwar family, the founders of Apollo Tyers, Raaja
            kanwar chose to carve a path following his passion for start-ups
            using disruptive technology.
            <br />
            As a passionate investor, Raaja takes a keen interest in
            entrepreneurial visions that hold a promise to make the world a
            better place for the next generations.
          </p>

          <p className="text-body-text">
            Under his tutelage, using smart technology, innovative practices
            executed by best-in-class talent in the country, Apollo
            International Limited is delivering high quality, bespoke products
            and solutions across sectors.
          </p>

          <h4 className="italic text-xl">
            &quot;We started our journey with a clear vision to build an
            organisation that can solve real-world challenges and makes a
            distinct positive difference to the economy, people, and the
            planet.&quot;
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Founder;
