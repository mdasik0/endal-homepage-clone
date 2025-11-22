import Image from "next/image";
import React, { useEffect, useRef } from "react";
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
      if (play && videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      } else if (!play && videoRef.current) {
        videoRef.current.pause();
      }
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
        <div className="w-[368px] shadow-effect h-full mx-auto absolute z-10 bg-black">
          {(play && !selectedVideoId) ||
          (play && selectedVideoId === "video-1") ? (
            <video
              ref={videoRef}
              src="/preview-videos/video-1.mp4"
              className="w-full h-full object-contain object-bottom mx-auto pt-10"
              autoPlay
              playsInline
              loop
            />
          ) : play && selectedVideoId === "video-2" ? (
            <video
              ref={videoRef}
              src="/preview-videos/video-2.mp4"
              className="w-full h-full object-contain object-bottom mx-auto pt-10"
              autoPlay
              playsInline
              loop
            />
          ) : play && selectedVideoId === "video-3" ? (
            <video
              ref={videoRef}
              src="/preview-videos/video-3.mp4"
              className="w-full h-full object-contain object-bottom mx-auto pt-10"
              autoPlay
              playsInline
              loop
            />
          ) : play && selectedVideoId === "video-4" ? (
            <video
              ref={videoRef}
              src="/preview-videos/video-4.mp4"
              className="w-full h-full object-contain object-bottom mx-auto pt-10"
              autoPlay
              playsInline
              loop
            />
          ) : (
            !play && (
              <Image
                className="w-full h-full object-contain object-bottom mx-auto pt-10"
                src={cover}
                alt="cover"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerDisplay;
