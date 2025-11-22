import Image from "next/image";
import mobileApp1 from "@/public/endel-mobile/image-1.svg";
import mobileApp2 from "@/public/endel-mobile/image-2.svg";
import PageGenTitle from "../PageGenTitle";
import BigCard from "../BigCard";

const EndelMobileApp = () => {
  return (
    <div>
      <PageGenTitle
        title_part_one="Endel Mobile App."
        title_part_two="Sound wellness anywhere."
        description="With over 4 million downloads, our award-winning app for iOS and Android puts powerful wellness and productivity tools in the palm of your hand."
      />

      {/* 2 big cards */}
      <div className="flex items-center justify-center gap-6">
        {/* first card */}
        <BigCard
          title="Real-time personalized soundscapes"
          description="Focus, relax, and sleep with personalized sounds that adapt to you and your environment in real-time. Each with their own generative visual to help put you in the right state of mind."
        >
          <Image
            className="w-full h-full object-contain object-top"
            src={mobileApp1}
            alt="mobile-app-1"
          />
        </BigCard>
        {/* second card */}
        <BigCard title="Round-the-clock sound with Autoplay" description="Autoplay automatically chooses the perfect soundscape for your current state. Whether it’s your morning productivity peak, or an early-evening time-out, Endel supports you with Focus, Relax, or Sleep. Just press start.">
          <Image
            className="w-full h-full object-contain object-top"
            src={mobileApp2}
            alt="mobile-app-2"
          />
        </BigCard>
      </div>
    </div>
  );
};

export default EndelMobileApp;
