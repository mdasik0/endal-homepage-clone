import React from "react";
import Image from "next/image";

const brands = [
  "/brands/the-wall-street.svg",
  "/brands/rolling-stone.svg",
  "/brands/wired.svg",
  "/brands/pitchfork.svg",
  "/brands/the-guardian.svg",
  "/brands/hypebeast.svg",
  "/brands/dazed.svg",
  "/brands/billboard.svg",
  "/brands/id.svg",
  "/brands/the-new-yorker.svg",
  "/brands/v-magazine.svg",
  "/brands/vogue.svg",
  "/brands/tc.svg",
  "/brands/the-verge.svg",
  "/brands/variety.svg",
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
            width={200}
            height={100}
            className="w-full h-auto object-contain opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;
