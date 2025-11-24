const HeroSection = () => {
  return (
    <>
      <div className="w-full text-center ">
        <div className="w-[564px] mx-auto text-center flex flex-col gap-6 mt-12 line items-center justify-center">
          <h1 className="text-6xl font-medium">Endel</h1>
          <p className="text-[#bfbfbf] text-[22px] leading-[28px]">
            Personalized soundscapes to help you focus, relax, and sleep. Backed
            by neuroscience.
          </p>
        </div>
        <button className="px-10 mt-10 py-2.5 bg-[#262626] hover:bg-[#808080] border-2 border-white hover:border-[#808080] text-white font-medium text-[22px] rounded-xl duration-300 cursor-pointer">
          Try Today
        </button>
      </div>
      <div 
        className='w-[1480px] h-[804px] -mt-36 bg-contain bg-top mx-auto'
        style={{
          backgroundImage: "url(/HeroBanner/hero-top-banner-desktop.avif)",
        }}
      ></div>
    </>
  );
};

export default HeroSection;
