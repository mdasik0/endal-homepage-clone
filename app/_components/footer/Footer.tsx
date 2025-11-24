import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-[1152px] h-[570px] mx-auto mt-[120px]">
      <div className="flex items-start gap-4 pb-[100px]">
        <div className="flex items-start justify-start gap-14 w-[662px]">
          {/* logo */}
          <div className="w-[40px] h-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                fill="#fff"
                d="M24 0C12.8 0 0 12.845 0 28c0 15.423 12.578 28 28 28s28-12.577 28-28C56 12.578 43.422 0 28 0m0 2.178c14.222 0 25.822 11.6 25.822 25.822v.667H37.334a5.45 5.45 0 0 0-4.534 2.4c-1.022 1.511-1.244 3.422-.533 5.111.888 2.133 1.377 4.09 1.377 5.155 0 3.067-2.488 5.6-5.6 5.6a5.605 5.605 0 0 1-5.6-5.6c0-2.978 4.578-9.822 6.046-12.088.177-.222.31-.445.4-.579 0-.043.043-.043.043-.088.09-.178.268-.4.446-.667 2.976-4.488 6.4-10.044 6.4-13.288 0-4.268-3.468-7.778-7.778-7.778-4.267 0-7.778 3.466-7.778 7.778 0 1.866.977 4.532 1.554 5.954.4 1.023.312 2.178-.31 3.112a3.28 3.28 0 0 1-2.755 1.466H2.31C3.823 12.445 14.978 2.178 28 2.178m0 51.688c-14.222 0-25.822-11.6-25.822-25.821v-.667h16.577a5.449 5.449 0 0 0 4.534-2.4c1.022-1.512 1.244-3.423.533-5.112-.888-2.132-1.377-4.088-1.377-5.154 0-3.067 2.488-5.6 5.6-5.6 3.067 0 5.6 2.488 5.6 5.6 0 2.977-4.578 9.822-6.046 12.088-.177.223-.31.445-.4.578 0 .045-.043.045-.043.09-.09.177-.267.4-.446.666-2.976 4.489-6.399 10.044-6.399 13.289 0 4.266 3.467 7.777 7.778 7.777 4.266 0 7.777-3.466 7.777-7.777 0-1.868-.977-4.534-1.554-5.957-.4-1.021-.312-2.177.31-3.11a3.28 3.28 0 0 1 2.755-1.467h16.355c-1.465 12.89-12.441 22.977-25.73 22.977z"
              />
            </svg>
          </div>
          {/* explore and Technology */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-[#bfbfbf] text-sm">Explore</p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                ADHD
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Focus
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Sleep
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Relax
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Activity
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#bfbfbf] text-sm">Technology</p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3    ">
                Science
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Technology
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Streaming
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Soundscapes
              </p>
            </div>
          </div>
          {/* about */}
          <div className="flex flex-col gap-3">
            <p className="text-[#bfbfbf] text-sm">About</p>
            <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3    ">
              Team
            </p>
            <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
              Manifesto
            </p>
            <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
              Newsroom
            </p>
            <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
              Community
            </p>
            <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
              Blog
            </p>
            <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
              Merch
            </p>
          </div>
          {/* offers and download Endel*/}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-[#bfbfbf] text-sm">Offers</p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Endel for Students
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Endel for Teams
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Gift Endel
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#bfbfbf] text-sm">Download Endel</p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3    ">
                Endel for iOS
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Endel for Android
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Endel for Alexa
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Endel for Mac
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Endel for Web
              </p>
              <p className="text-[18px] leading-[24px] text-white cursor-pointer hover:underline decoration-stone-500 decoration-3">
                Endel for Windows
              </p>
            </div>
          </div>
        </div>
        {/* newsletter */}
        <div className="w-[466px] ml-2">
          <h1 className="text-[36px] leading-[42px] mb-4">Endel Newsletter</h1>
          <p className="text-[18px] text-[#bfbfbf] leading-[24px] mb-5">
            Subscribe to be first to hear about new soundscapes and features.
            Read stories about the Endel world and its people. Plus,
            life-enhancing, science-backed tips and advice.
          </p>
          <div className="flex flex-col gap-0.5">
            <label
              className="text-[16px] text-[#bfbfbf] leading-[24px]"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="px-3 py-4 border-2 border-[#808080] rounded-xl text-xl outline-none focus:border-white"
              type="email"
              id="email"
              placeholder="example@endel.io"
            />
          </div>
          <button className="px-10 py-2.5 mt-6 bg-[#262626] hover:bg-[#808080] border-2 border-[#262626] hover:border-[#808080] text-white font-medium text-[22px] rounded-xl duration-300 cursor-pointer w-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="border-t border-[#191919] py-6 flex items-center justify-between">
        {/* links */}
        <div className="flex items-center gap-4">
          <p className="text-[18px] leading-[24px] text-[#bfbfbf] cursor-pointer hover:underline decoration-stone-500 decoration-3">
            Endel © 2025
          </p>
          <p className="text-[18px] leading-[24px] text-[#bfbfbf] cursor-pointer hover:underline decoration-stone-500 decoration-3">
            Privacy Policy
          </p>
          <p className="text-[18px] leading-[24px] text-[#bfbfbf] cursor-pointer hover:underline decoration-stone-500 decoration-3">
            Impressum
          </p>
          <p className="text-[18px] leading-[24px] text-[#bfbfbf] cursor-pointer hover:underline decoration-stone-500 decoration-3">
            Support
          </p>
        </div>
        {/* socials */}
        <div className="flex items-center gap-6 text-white">
        <FaXTwitter className="cursor-pointer hover:text-[#bfbfbf] text-[22px]" />
        <FaFacebook className="cursor-pointer hover:text-[#bfbfbf] text-[22px]" />
        <FaDiscord className="cursor-pointer hover:text-[#bfbfbf] text-[24px]" />
        <FaInstagram className="cursor-pointer hover:text-[#bfbfbf] text-[22px]" />
        <FaLinkedin className="cursor-pointer hover:text-[#bfbfbf] text-[20px]" />
        <FaTiktok className="cursor-pointer hover:text-[#bfbfbf] text-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
