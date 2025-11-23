import React from "react";
import PageGenTitle from "../PageGenTitle";
import Image from "next/image";
import BigCard from "../BigCard";
import cardImg1 from "@/public/endel-amazon-alexa/card-img-1.svg";
import cardImg2 from "@/public/endel-amazon-alexa/card-img-2.avif";

const EndelAmazonAlexaSec = () => {
  return (
    <div>
      <PageGenTitle
        title_part_one="Endel for Amazon Alexa."
        title_part_two="Just a phrase away."
        description="Includes Echo devices, Fire Tablets, Fire TV, Alexa Auto, and the Alexa App. No installation needed, just say “Alexa, start Endel”."
      />

      <div className="flex items-center justify-center gap-6">
        {/* first card */}
        <BigCard
          title="Screen-free sleep with smart speakers"
          description="Make your bedroom a screen-free sleep sanctuary. Just say “Alexa, start Sleep with Endel” and be prepared for drift-off. With Routines, Timers, and Smart Alarms, you can automate your way to a better night’s sleep."
        >
          <Image
            className="w-full h-full object-contain object-top"
            src={cardImg1}
            alt="mobile-app-1"
          />
        </BigCard>
        {/* second card */}
        <BigCard
          title="Automate your day with Routine"
          description="Endel soundscapes work with Alexa Routines, meaning it can automatied to make your life more convenient. Example? You can use a phrase like “Start Bedtime Routine” to dim your smart lights and activate the Sleep soundscape."
        >
          <Image
            className="w-full h-full object-contain object-top"
            src={cardImg2}
            alt="mobile-app-2"
            unoptimized
          />
        </BigCard>
      </div>
    </div>
  );
};

export default EndelAmazonAlexaSec;
