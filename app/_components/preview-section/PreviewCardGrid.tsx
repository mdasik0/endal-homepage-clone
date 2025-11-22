import React from "react";
import PreviewCard from "./PreviewCard";

interface PreviewCardGridProps {
  play: boolean;
  selectedVideoId: string | null;
  handlePlay: (videoId: string) => void;
  handlePausePlay: () => void;
}
const PreviewCardGrid = ({
  play,
  selectedVideoId,
  handlePlay,
  handlePausePlay,
}: PreviewCardGridProps) => {
  const previewVideoArr = [
    {
      videoId: "video-1",
      title: "Relax",
      description: "Calms your mind to create feelings of comfort and safety",
    },
    {
      videoId: "video-2",
      title: "Focus",
      description:
        "Boosts your productivity by helping you concentrate for longer",
    },
    {
      videoId: "video-3",
      title: "Sleep",
      description: "Soothes you into a deep sleep with soft, gentle sounds",
    },
    {
      videoId: "video-4",
      title: "Activity",
      description:
        "Powers your movement with sounds to keep you present and grounded",
    },
  ];
  return (
    <div className="w-[1152px] h-[188px] mx-auto flex gap-6 justify-center relative z-40">
      {previewVideoArr.map((video) => (
        <PreviewCard
          key={video.videoId}
          play={play}
          selectedVideoId={selectedVideoId}
          title={video.title}
          description={video.description}
          videoId={video.videoId}
          handlePlay={handlePlay}
          handlePausePlay={handlePausePlay}
        />
      ))}
    </div>
  );
};

export default PreviewCardGrid;
