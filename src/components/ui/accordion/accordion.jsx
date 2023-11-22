// ***** Library Imports *****
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { cn } from "../../../lib/utils";

const ApolloAccordion = ({ items, setCurrentImage }) => {
  return (
    <div className="">
      <Accordion.Root
        className="w-full"
        type="single"
        defaultValue={`item-1`}
        collapsible
      >
        {items.map((item, index) => {
          return (
            <AccordionItem
              value={`item-${item.id}`}
              className="border-b"
              key={item.id}
              onClick={() => setCurrentImage(index)}
            >
              <AccordionTrigger className="text-[#fa951d] text-[12px] md:text-xl font-semibold">
                {item.triggerItem}
              </AccordionTrigger>
              <AccordionContent className="text-white">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion.Root>
    </div>
  );
};

const AccordionItem = React.forwardRef(
  ({ children, className, onClick, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn("mt-px overflow-hidden first:mt-0", className)}
      {...props}
      ref={forwardedRef}
      onClick={onClick}
    >
      {children}
    </Accordion.Item>
  )
);

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-transparent px-5 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <AiOutlinePlus
          className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 block group-data-[state=open]:hidden"
          aria-hidden
        />

        <AiOutlineMinus
          className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 hidden group-data-[state=open]:block"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

export default ApolloAccordion;
