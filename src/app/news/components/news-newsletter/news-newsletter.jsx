import { ArrowRight } from "lucide-react";
import "./news-newsletter.css";

const NewsNewsletter = () => {
  return (
    <div className="py-12 blogs">
      <div className="px-8 md:px-20">
        <div className="bg-[#2e3192] text-white p-10 py-16 rounded-xl flex flex-col gap-5">
          <h1 className="text-[32px] md:text-[42px] font-bold">
            Subscribe to our Newsletter
          </h1>

          <div className="relative max-w-4xl">
            <div className="form__group field !m-0 !max-w-full">
              <input
                type="input"
                className="form__field !m-0 !focus:border-white"
                placeholder="Name"
                required=""
              />
              <label htmlFor="name" className="form__label">
                Enter your email
              </label>
            </div>

            <button className="absolute right-0 bottom-2">
              <ArrowRight className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsNewsletter;
