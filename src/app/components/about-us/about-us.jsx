// **** Library Imports ****
import * as Tabs from "@radix-ui/react-tabs";

// **** Local Imports ****
import SectionHeading from "../SectionHeading";
import SectionButton from "../SectionButton";

const HomeAboutUs = () => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-32">
        <div className="flex-1 flex flex-row gap-6">
          <div className="relative overflow-hidden rounded-lg -mt-0: md:-mt-10">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt="about-img1"
              className="w-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
                alt="about-img2"
                className="w-64 object-cover rounded-lg"
              />
            </div>

            <div className="relative overflow-hidden rounded-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                alt="about-img3"
                className="w-[248px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 px-6 flex flex-col gap-3">
          <p className="text-lg font-medium text-main-text">About us</p>

          <SectionHeading>
            India&apos;s Leading
            <br />
            GlobalBusiness Conglomerate
          </SectionHeading>

          <p className="text-body-text">
            To deliver superior value to our customers, shareholders, employees,
            and community through a diversified global of emergent businesses
            that are driven by limitless innovation, collective wisdom, and
            ingenious models.
          </p>

          <p className="text-body-text">
            Our values continue to direct the growth of businesses under Apollo
            International
          </p>

          {/* Tabs Content */}
          <div className="mb-5">
            <Tabs.Root className="flex flex-col" defaultValue="tab1">
              <Tabs.List
                className="shrink-0 flex border-b mb-5"
                aria-label="Purpose and Values"
              >
                <Tabs.Trigger
                  className="bg-white pr-5 h-[45px] flex items-center justify-center text-[22px] font-medium leading-none select-none outline-none cursor-pointer data-[state=active]:text-green data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
                  value="tab1"
                >
                  Purpose
                </Tabs.Trigger>

                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex items-center justify-center text-[22px] font-medium leading-none select-none outline-none cursor-pointer data-[state=active]:text-green data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
                  value="tab2"
                >
                  Values
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content className="grow bg-white outline-none" value="tab1">
                <p className="text-body-text">
                  1 To deliver superior value to our customers, shareholders,
                  employees, and community through a diversified global of
                  emergent businesses that are driven by limitless innovation,
                  collective wisdom, and ingenious models.
                </p>
              </Tabs.Content>

              <Tabs.Content className="grow bg-white outline-none" value="tab2">
                <p className="text-body-text">
                  2 To deliver superior value to our customers, shareholders,
                  employees, and community through a diversified global of
                  emergent businesses that are driven by limitless innovation,
                  collective wisdom, and ingenious models.
                </p>
              </Tabs.Content>
            </Tabs.Root>
          </div>

          <div className="flex items-center justify-start">
            <SectionButton slug="/purpose-values">Read more</SectionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
