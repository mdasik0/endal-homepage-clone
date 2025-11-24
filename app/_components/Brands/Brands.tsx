import React from "react";
import Image from "next/image";


const brands = [
  "/Brands/the-wall-street.svg",
  "/Brands/rolling-stone.svg",
  "/Brands/wired.svg",
  "/Brands/pitchfork.svg",
  "/Brands/the-guardian.svg",
  "/Brands/hypebeast.svg",
  "/Brands/dazed.svg",
  "/Brands/billboard.svg",
  "/Brands/id.svg",
  "/Brands/the-new-yorker.svg",
  "/Brands/v-magazine.svg",
  "/Brands/vogue.svg",
  "/Brands/tc.svg",
  "/Brands/the-verge.svg",
  "/Brands/variety.svg",
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
            width={212}
            height={48}
            className="w-full h-auto object-contain opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert "
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;
