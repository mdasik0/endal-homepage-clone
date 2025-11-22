import React from "react";
import Image from "next/image";
import number1 from "@/public/numbers/1.svg";
import number2 from "@/public/numbers/2.svg";
import number3 from "@/public/numbers/3.svg";
import number4 from "@/public/numbers/4.svg";
import { HiArrowSmUp } from "react-icons/hi";
const BackedByScienceSection = () => {
  return (
    <div>
      {/* title */}
      <div className="w-[888px] h-[160px] mx-auto text-center flex flex-col gap-3 mb-6 mt-[100px] line items-center justify-center">
        <h1 className="text-[44px] font-semibold ">Backed by neuroscience</h1>

        <p className="text-[22px] leading-[28px] px-20">
          Our patented technology creates soundscapes that adapt in real-time.
          It reacts to inputs like time of day, weather, heart rate, and
          location. Neuroscience shows Endel consistently improves focus and
          lowers stress.
        </p>
      </div>

      {/* numbers svg */}
      <div className="w-[1152px] h-[224px] mx-auto flex items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[270px] h-full">
            <Image
              className="w-full h-full object-contain"
              src={number1}
              alt="number-1"
              width={270}
              height={224}
            />
          </div>
          <p className="text-[18px] text-[#bfbfbf] ">
            for increasing focus vs playlists1
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[270px] h-full">
            <Image
              className="w-full h-full object-contain"
              src={number2}
              alt="number-2"
              width={270}
              height={224}
            />
          </div>
          <p className="text-[18px] text-[#bfbfbf] ">increase in focus1</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[270px] h-full">
            <Image
              className="w-full h-full object-contain"
              src={number3}
              alt="number-3"
              width={270}
              height={224}
            />
          </div>
          <p className="text-[18px] text-[#bfbfbf] ">
            decrease in stress with regular use2
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[270px] h-full">
            <Image
              className="w-full h-full object-contain"
              src={number4}
              alt="number-4"
              width={270}
              height={224}
            />
          </div>
          <p className="text-[18px] text-[#bfbfbf] ">
            Longer, more consistent focus; maintained 95% of listening time2
          </p>
        </div>
      </div>

      {/* description */}
      <div className="w-[564px] h-[108px] mx-auto mt-[48px] flex flex-col items-center text-[#bfbfbf] text-center justify-center gap-3">
        <div className="flex items-center gap-1.5 ">
          <p className="hover:underline decoration-[#262626] decoration-4">
            {"1) *Read the Whitepaper on Bioarxiv"}
          </p>
          <HiArrowSmUp className="rotate-45" />
        </div>
        <p>{"2) Survey methodology: The Experience Sampling Method provided by Mihaly Csikszentmihalyi (Professor of Psychology and Management at Claremont Graduate University, author of the best-selling book Flow)"}</p>
      </div>
    </div>
  );
};

export default BackedByScienceSection;
