import Image from "next/image";
import { useEffect, useRef } from "react";
import cover from "@/public/background/cover.svg";
import { FaPlay } from "react-icons/fa";

interface VideoPlayerDisplayProps {
  play: boolean;
  selectedVideoId: string | null;
  handlePausePlay: () => void;
}
const VideoPlayerDisplay = ({
  play,
  selectedVideoId,
  handlePausePlay,
}: VideoPlayerDisplayProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Preload video when selectedVideoId changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video to load when source changes
    video.load();
  }, [selectedVideoId]);

  // Handle play/pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (play) {
      // Wait for video to be ready before playing
      const playVideo = async () => {
        try {
          // If video is not loaded yet, wait for it
          if (video.readyState < 2) {
            await new Promise((resolve) => {
              video.addEventListener("loadeddata", resolve, { once: true });
            });
          }
          await video.play();
        } catch (error) {
          // Ignore AbortError - it's expected when video is paused/stopped
          if (error instanceof Error && error.name !== "AbortError") {
            console.error("Error playing video:", error);
          }
        }
      };
      playVideo();
    } else {
      video.pause();
    }

    // Cleanup function to handle component unmount
    return () => {
      if (video) {
        video.pause();
      }
    };
  }, [play]);
  return (
    <div className='w-[1152px] h-[610px] mx-auto mt-26 bg-[url("/background/background.svg")] '>
      <div className="w-[368px] h-[610px] mx-auto relative bg-transparent flex flex-col justify-end ">
        <div className=' bg-[url("/background/iphone.svg")] w-full h-full absolute z-20'>
          <div
            onClick={handlePausePlay}
            className="w-[calc(100%-40px)] mx-auto h-[calc(100%-60px)] cursor-pointer mt-14 bg-transparent flex items-center justify-center z-10"
          >
            {!play && (
              <div className="w-[70px] h-[70px] bg-white hover:bg-[#808080] duration-200 rounded-full flex items-center justify-center">
                <FaPlay className="text-[26px] ml-1 text-black" />
              </div>
            )}
          </div>
        </div>
        <div className="w-[368px] shadow-effect h-full mx-auto absolute z-10 bg-black relative">
          <video
            ref={videoRef}
            src={`/preview-videos/${selectedVideoId || "video-1"}.mp4`}
            className={`w-full h-full object-contain object-bottom mx-auto pt-10 absolute inset-0 ${
              play ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            playsInline
            loop
            preload="auto"
          />
          {!play && (
            <Image
              className="w-full h-full object-contain object-bottom mx-auto pt-10 relative z-20"
              src={cover}
              alt="cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerDisplay;
