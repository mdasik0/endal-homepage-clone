"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
const FAQAccordian = ({
  question,
  answer   
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <div className="rounded-[16px] bg-[#111111] p-6 ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full hover:shadow-[0_0_0_24px_#191919] hover:bg-[#191919] rounded flex items-center justify-between text-left"
      >
        <p className="text-[22px] text-white font-medium">{question}</p>
        <ChevronDown
          className={`text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-10 text-[#bfbfbf] text-[22px] leading-[28px]">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQAccordian;
