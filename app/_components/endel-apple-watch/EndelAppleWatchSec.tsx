import React from "react";
import PageGenTitle from "../PageGenTitle";
import Image from "next/image";
import BigCard from "../BigCard";
import cardImg1 from "@/public/endal-apple-watch/card-img-1.svg";
import cardImg2 from "@/public/endal-apple-watch/card-img-2.svg";

const EndelAppleWatchSec = () => {
  return (
    <div>
      <PageGenTitle
        title_part_one="Endel for Apple Watch."
        title_part_two="A wearable award winner."
        description="Endless soundscapes on the go, in an award-winning format. Taking our patented tech down to watch size made Endel the winner of Apple Watch App of the Year 2020."
      />

      <div className="flex items-center justify-center gap-6">
        {/* first card */}
        <BigCard
          title="Detailed personal inputs"
          description="Using accurate heart rate sensors, light intake and other biometric data makes Endel’s Apple Watch soundscapes intricately personalized and increasingly effective."
        >
          <Image
            className="w-full h-full object-contain object-top"
            src={cardImg1}
            alt="mobile-app-1"
          />
        </BigCard>
        {/* second card */}
        <BigCard
          title="Keep your phone at home"
          description="Go anywhere with soundscapes on your wrist. Working independently from the iPhone, the Apple Watch app is a standalone product that generates endlessly supporting sound on the fly."
        >
          <Image
            className="w-full h-full object-contain object-top"
            src={cardImg2}
            alt="mobile-app-2"
          />
        </BigCard>
      </div>
    </div>
  );
};

export default EndelAppleWatchSec;
