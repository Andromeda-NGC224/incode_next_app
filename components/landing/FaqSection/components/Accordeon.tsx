"use client";

import { useState } from "react";
import { faqItems } from "../config";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function Accordeon() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4 md:gap-8 xl:gap-12">
      {faqItems.map((item, index) => (
        <div key={index}>
          <button
            className={`font-semibold w-full text-[16px] sm:text-[20px] md:text-[24px] xl:text-[32px] flex justify-between items-center text-left py-4 px-6 md:py-6 md:px-8 xl:py-12 xl:px-14  text-main-text rounded-2xl ${
              activeIndex === index
                ? "rounded-b-none bg-gradient-to-tr from-[#311B92] to-[#006064]"
                : "bg-paper"
            } focus:outline-none`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            {item.question}
            <span>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="text-[16px] sm:text-[20px] md:text-[24px] xl:text-[32px] py-3 px-6 md:py-3 md:px-8 xl:py-10 xl:px-14 bg-paper text-main-text rounded-b-2xl">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
