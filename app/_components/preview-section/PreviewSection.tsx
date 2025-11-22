"use client";
import { useState } from "react";
import PreviewCardGrid from "./PreviewCardGrid";
import VideoPlayerDisplay from "./VideoPlayerDisplay";
const PreviewSection = () => {
  const [play, setPlay] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
 

  const handlePlay = (videoId: string) => {
    console.log(videoId);
    setSelectedVideoId(videoId);
    setPlay(true);
  };

  const handlePausePlay = () => {
    console.log("clicked");
    console.log(play);
    if (play) {
      return setPlay(false);
    }
    return setPlay(true);
  };

  return (
    <>
      {/* VideoPlayerDisplay: Main video player component with iPhone frame that displays the selected video content */}
      <VideoPlayerDisplay play={play} selectedVideoId={selectedVideoId} handlePausePlay={handlePausePlay} />

      {/* PreviewCardGrid: Container component that renders the grid of music selection cards */}
      <PreviewCardGrid play={play} selectedVideoId={selectedVideoId} handlePlay={handlePlay} handlePausePlay={handlePausePlay} />
    </>
  );
};

export default PreviewSection;