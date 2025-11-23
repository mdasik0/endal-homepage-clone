import React from "react";
import { HiArrowSmUp } from "react-icons/hi";

interface BigCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
}
const BigCard = ({ children, title, description }: BigCardProps) => {
  return (
    <div className="w-[564px] h- rounded-[20px] overflow-hidden">
      {/* image */}
      <div className="h-[361px] w-full">{children}</div>
      {/* text content */}
      <div
        className="h- w-full p-6 flex flex-col gap-[20px]"
        style={{
          background: "linear-gradient(rgb(24, 24, 24), rgba(0, 0, 0, 0))",
        }}
      >
        <h1 className="text-[44px]">{title}</h1>
        <p className="text-[22px] text-[#bfbfbf] leading-[28px]">
          {description}
        </p>
        <div className="flex items-center gap-1.5">
          <p className="text-[22px] text-white font-medium cursor-pointer hover:underline decoration-[#262626] decoration-4">
            Try Now
          </p>
          <HiArrowSmUp className="rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
