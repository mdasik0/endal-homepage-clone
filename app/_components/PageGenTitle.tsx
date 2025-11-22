interface PageGenTitleProps {
  title_part_one: string;
  title_part_two: string;
  description: string;
}

const PageGenTitle = ({ title_part_one, title_part_two, description }: PageGenTitleProps) => {
  return (
    <div className="w-[760px] h-[188px] mx-auto mt-[100px] mb-[48px] text-center flex flex-col gap-5  items-center justify-center">
      <h1 className="text-[44px] leading-[56px] font-semibold">
        {title_part_one} <br /> {title_part_two}
      </h1>
      <p className="text-[22px] text-[#bfbfbf] leading-[28px]">
        {description}
      </p>
    </div>
  );
};

export default PageGenTitle;
