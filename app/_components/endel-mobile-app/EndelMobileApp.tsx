import React from "react";
import Image from "next/image";
import mobileApp1 from "@/public/endel-mobile/image-1.svg";
import mobileApp2 from "@/public/endel-mobile/image-2.svg";
import { HiArrowSmUp } from "react-icons/hi";

const EndelMobileApp = () => {
  return (
    <div>
      {/* title */}
      <div className="w-[760px] h-[188px] mx-auto mt-[100px] mb-[48px] text-center flex flex-col gap-5  items-center justify-center">
        <h1 className="text-[44px] leading-[56px] font-semibold">
          Endel Mobile App. <br /> Sound wellness anywhere.
        </h1>
        <p className="text-[22px] text-[#bfbfbf] leading-[28px]">
          With over 4 million downloads, our award-winning app for iOS and
          Android puts powerful wellness and productivity tools in the palm of
          your hand.
        </p>
      </div>

      {/* 2 big cards */}
      <div className="flex items-center justify-center gap-6">
        {/* first card */}
        <div className="w-[564px] h-[742px] rounded-[20px] overflow-hidden">
          {/* image */}
          <div className="h-[361px] w-full">
            <Image
              className="w-full h-full object-contain object-top"
              src={mobileApp1}
              alt="mobile-app-1"
            />
          </div>
          {/* text content */}
          <div
            className="h-[354px] w-full p-6 flex flex-col gap-[20px]"
            style={{
              background: "linear-gradient(rgb(24, 24, 24), rgba(0, 0, 0, 0))",
            }}
          >
            <h1 className="text-[44px] leading-[56px] font-semibold">
              Real-time personalized soundscapes
            </h1>
            <p className="text-[22px] text-[#bfbfbf] leading-[28px]">
              Focus, relax, and sleep with personalized sounds that adapt to you
              and your environment in real-time. Each with their own generative
              visual to help put you in the right state of mind.
            </p>
            <div className="flex items-center gap-1.5">
              <p className="text-[22px] text-white font-medium cursor-pointer hover:underline decoration-[#262626] decoration-4">
                Try Now
              </p>
              <HiArrowSmUp className="rotate-45" />
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="w-[564px] h-[742px] rounded-[20px] overflow-hidden">
          {/* image */}
          <div className="h-[361px] w-full">
            <Image
              className="w-full h-full object-contain object-top"
              src={mobileApp2}
              alt="mobile-app-2"
            />
          </div>
          {/* text content */}
          <div
            className="h-[354px] w-full p-6 flex flex-col gap-[20px]"
            style={{
              background: "linear-gradient(rgb(24, 24, 24), rgba(0, 0, 0, 0))",
            }}
          >
            <h1 className="text-[44px] leading-[56px] font-semibold">
              Round-the-clock sound with Autoplay
            </h1>
            <p className="text-[22px] text-[#bfbfbf] leading-[28px]">
              Autoplay automatically chooses the perfect soundscape for your
              current state. Whether it’s your morning productivity peak, or an
              early-evening time-out, Endel supports you with Focus, Relax, or
              Sleep. Just press start.
            </p>
            <div className="flex items-center gap-1.5">
              <p className="text-[22px] text-white font-medium cursor-pointer hover:underline decoration-[#262626] decoration-4">
                Try Now
              </p>
              <HiArrowSmUp className="rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndelMobileApp;
