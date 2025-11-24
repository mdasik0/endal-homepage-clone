import React from "react";
import Image from "next/image";


const brands = [
  "@/public/brands/the-wall-street.svg",
  "@/public/brands/rolling-stone.svg",
  "@/public/brands/wired.svg",
  "@/public/brands/pitchfork.svg",
  "@/public/brands/the-guardian.svg",
  "@/public/brands/hypebeast.svg",
  "@/public/brands/dazed.svg",
  "@/public/brands/billboard.svg",
  "@/public/brands/id.svg",
  "@/public/brands/the-new-yorker.svg",
  "@/public/brands/v-magazine.svg",
  "@/public/brands/vogue.svg",
  "@/public/brands/tc.svg",
  "@/public/brands/the-verge.svg",
  "@/public/brands/variety.svg",
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
