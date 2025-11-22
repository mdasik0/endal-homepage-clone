import React from "react";
import Image from "next/image";
import billboard from "@/public/brands/billboard.svg";
import dazed from "@/public/brands/dazed.svg";
import hypebeast from "@/public/brands/hypebeast.svg";
import id from "@/public/brands/id.svg";
import pitchfork from "@/public/brands/pitchfork.svg";
import rollingStone from "@/public/brands/rolling-stone.svg";
import tc from "@/public/brands/tc.svg";
import theGuardian from "@/public/brands/the-guardian.svg";
import theNewYorker from "@/public/brands/the-new-yorker.svg";
import theVerge from "@/public/brands/the-verge.svg";
import theWallStreet from "@/public/brands/the-wall-street.svg";
import vMagazine from "@/public/brands/v-magazine.svg";
import variety from "@/public/brands/variety.svg";
import vogue from "@/public/brands/vogue.svg";
import wired from "@/public/brands/wired.svg";

const brands = [
  theWallStreet,
  rollingStone,
  wired,
  pitchfork,
  theGuardian,
  hypebeast,
  dazed,
  billboard,
  id,
  theNewYorker,
  vMagazine,
  vogue,
  tc,
  theVerge,
  variety,
];

const Brands = () => {
  return (
    <div className="grid grid-cols-5 w-[1152px] mx-auto gap-x-6 gap-y-7 mb-10 -mt-24">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex items-center justify-center group cursor-pointer"
        >
          <Image
            src={brand}
            alt={`Brand ${index + 1}`}
            className="w-full h-auto object-contain opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert "
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;
