import PageGenTitle from "../PageGenTitle";
import Image from "next/image";
import BigCard from "../BigCard";
import cardImg1 from "@/public/endel-desktop/card-img-1.svg";
import cardImg2 from "@/public/endel-desktop/card-img-2.svg";

const EndelDesktopSec = () => {
  return (
    <div>
      <PageGenTitle
        title_part_one="Endel on desktop."
        title_part_two="Work, rest, and play."
        description="Create a special place for productivity with the desktop Endel app. Get a boost of up to 7x increase in sustained Focus with our scientifically-validated soundscapes."
      />

      <div className="flex items-center justify-center gap-6">
        {/* first card */}
        <BigCard
          title="Endel for Mac"
          description="Fast, efficient, and designed to minimize distractions. Endel for Mac comes with a streamlined and discreet interface, helping you to stay focused on the task at hand."
        >
          <Image
            className="w-full h-full object-contain object-top"
            src={cardImg1}
            alt="mobile-app-1"
          />
        </BigCard>
        {/* second card */}
        <BigCard
          title="Endel web player"
          description="All your favorite Endel soundscapes, from the convenience of your browser. Enjoy Endel at work, school, or wherever. All sounds are generated in real-time, along with their signature visuals."
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

export default EndelDesktopSec;
