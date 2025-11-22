"use client";

import Image from "next/image";
import { useState } from "react";
import offer1 from "@/public/NavDrop/nav-offer-1.svg";
import offer2 from "@/public/NavDrop/nav-offer-2.svg";
import offer3 from "@/public/NavDrop/nav-offer-3.svg";
import { ChevronDown } from "lucide-react";

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center gap-1 hover:text-gray-200"
      >
        More{" "}
        <ChevronDown className={`${isOpen ? "rotate-180 transition-transform" : "transition-transform"}`} />
      </div>
      <div
        className={`absolute top-18 left-1/2 -translate-x-1/2 w-[724px] h-[312px] bg-[#1A1A1A] bg-linear-to-b from-[rgb(24, 24, 24)] to-black rounded-xl p-6 z-50 transition-opacity duration-400 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-[172px_172px_1fr] gap-6">
          {/* Company Column */}
          <div className="">
            <p className="text-[#bfbfbf] text-sm font-medium mb-4 ">Company</p>
            <ul className="space-y-1.5">
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Team
              </li>
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Manifesto
              </li>
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Newsroom
              </li>
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Community
              </li>
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Blog
              </li>
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Merch
              </li>
            </ul>
          </div>

          {/* Technology Column */}
          <div>
            <p className="text-[#bfbfbf] text-sm font-medium mb-4 ">
              Technology
            </p>

            <ul className="space-y-1.5">
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Science
              </li>
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Technology
              </li>
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Streaming
              </li>
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Soundscapes
              </li>
              <li className="text-white hover:underline decoration-stone-500 hover:text-gray-300 cursor-pointer transition-colors">
                Scenarios
              </li>
            </ul>
          </div>

          {/* Offers Column */}
          <div className="flex flex-col items-start">
            <p className="text-[#bfbfbf] text-sm font-medium mb-4 ">Offers</p>

            <div className="flex flex-col items-start gap-4">
              <NavDropdownItem
                title="Endel for Students"
                description="Get 66% off of Endel Premium!"
              >
                <Image
                  src={offer1}
                  alt="offer-1"
                  className="h-[56px] w-[56px] object-cover"
                />
              </NavDropdownItem>
              <NavDropdownItem
                title="Endel for Teams"
                description="Share Endel with your team."
              >
                <Image
                  src={offer2}
                  alt="offer-2"
                  className="h-[56px] w-[56px] object-cover"
                />
              </NavDropdownItem>
              <NavDropdownItem
                title="Gift Endel"
                description="Gift the power of sound"
              >
                <Image
                  src={offer3}
                  alt="offer-3"
                  className="h-[56px] w-[56px] object-cover"
                />
              </NavDropdownItem>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavDropdown;

interface NavDropdownItemProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
const NavDropdownItem = ({
  title,
  description,
  children,
}: NavDropdownItemProps) => {
  return (
    <div className="w-full flex items-center gap-2 hover:bg-[#262626] rounded cursor-pointer hover:shadow-[0_0_0_8px_#262626]">
      {children}
      <div>
        <h4>{title}</h4>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};
