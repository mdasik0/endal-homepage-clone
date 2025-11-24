import React from "react";
import commImage from "@/public/join-discord/background.svg";
import Image from "next/image";
import PageGenTitle from "../PageGenTitle";

const JoinEndelDiscordSec = () => {
  return (
    <div className="w-[888px] h-[720px] mx-auto mt-[100px] mb-[48px] px-[64px]">
      <div className="w-[760px] h-[482px] mx-auto">
        <Image
          className="w-full h-full object-contain object-top"
          src={commImage}
          alt="logo"
        />
      </div>
      <PageGenTitle
        title_part_one="Join Endel Bubble on Discord."
        description="You'll gain access to exclusive previews, beta versions, pro tips on using the app, AMA's with the Endel team, and a lot more!"
      />
      <button className="px-10 mx-auto block py-2.5 bg-[#262626] hover:bg-[#808080] border-2 border-white hover:border-[#808080] text-white font-medium text-[22px] rounded-xl w-[368px] duration-300 cursor-pointer">
        About Community
      </button>
    </div>
  );
};

export default JoinEndelDiscordSec;
