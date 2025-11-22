import React from "react";
import { HiArrowSmUp } from "react-icons/hi";
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5";

interface PreviewCardProps {
  play: boolean;
  selectedVideoId: string | null;
  title: string;
  description: string;
  videoId: string;
  handlePlay: (videoId: string) => void;
  handlePausePlay: () => void;
}
const PreviewCard = ({
  play,
  selectedVideoId,
  title,
  description,
  videoId,
  handlePlay,
  handlePausePlay,
}: PreviewCardProps) => {
  const controlPlay = () => {
    if (play) {
      handlePlay(videoId);
      if (selectedVideoId === videoId) {
        handlePausePlay();
        return;
      }
      return;
    }
    return handlePlay(videoId);
  };
  return (
    <div
      className="w-[270px] h-[188px] rounded-xl p-4 relative"
      style={{
        background: "linear-gradient(rgb(24, 24, 24), rgba(0, 0, 0, 0))",
      }}
    >
      <div>
        <button
          onClick={controlPlay}
          className="w-[44px] h-[44px] bg-[#262626] hover:bg-[#808080] duration-200 cursor-pointer rounded-full flex items-center justify-center absolute -top-5 right-3 z-50"
        >
          {play && !selectedVideoId && videoId === "video-1" ? (
            <IoPauseOutline />
          ) : play && selectedVideoId === videoId ? (
            <IoPauseOutline />
          ) : (
            <IoPlayOutline className="text-xl ml-0.5" />
          )}
        </button>

        <div className="w-full h-full flex flex-col gap-2 justify-center">
          <h3 className="text-[22px] font-medium">{title}</h3>
          <p className="text-[18px] text-[#bfbfbf]">{description}</p>
        </div>

        <div className="flex items-center gap-1.5 mt-3">
          <p className="text-[18px] text-white font-medium cursor-pointer hover:underline decoration-[#262626] decoration-4">
            Learn More
          </p>
          <HiArrowSmUp className="rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
