import { cn } from "../../lib/utils";

const SectionHeading = ({ children, classes = "" }) => {
  return (
    <h1
      className={cn(
        "text-[28px] md:text-5xl font-medium text-main-text",
        classes
      )}
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
