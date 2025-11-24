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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (play) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Ignore AbortError - it's expected when video is paused/stopped
          if (error.name !== "AbortError") {
            console.error("Error playing video:", error);
          }
        });
      }
    } else {
      video.pause();
    }

    // Cleanup function to handle component unmount
    return () => {
      if (video) {
        video.pause();
      }
    };
  }, [play, selectedVideoId]);
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
        <div className="w-[368px] shadow-effect h-full mx-auto absolute z-10 bg-black">
          <video
            ref={videoRef}
            src={`/preview-videos/${selectedVideoId || "video-1"}.mp4`}
            className={`w-full h-full object-contain object-bottom mx-auto pt-10 ${
              play ? "block" : "hidden"
            }`}
            playsInline
            loop
            preload="auto"
          />
          {!play && (
            <Image
              className="w-full h-full object-contain object-bottom mx-auto pt-10"
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
