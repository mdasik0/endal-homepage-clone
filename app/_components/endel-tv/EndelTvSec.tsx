"use client";
import React, { useState, useRef, useEffect } from "react";
import PageGenTitle from "../PageGenTitle";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const EndelTvSec = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Preload video when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video to load
    video.load();
  }, []);

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
    <div className="">
      <PageGenTitle
        title_part_one="Endel for TV."
        title_part_two="Wellness on fullscreen."
        description="Transform your TV into a tool for wellness with the Endel for Apple TV and Amazon Fire TV. Chill to big-screen animations from your favorite soundscapes with any Amazon Fire TV device. Or unwind after a long day with James Blake: Wind Down on Apple TV."
      />
      <div className='w-full h-[780px] bg-[url("/endel-tv/background.avif")] bg-cover bg-center bg-no-repeat pt-[54px]'>
        <div className="w-[1152px] h-[648px] mx-auto relative">
          <div
            onClick={() => setPlay(!play)}
            className="inset-[10px] bg-transparent absolute z-20 flex items-center justify-center cursor-pointer"
          >
            {!play && (
              <button className="w-[70px] h-[70px] bg-white hover:bg-[#808080] duration-200 rounded-full flex items-center justify-center cursor-pointer">
                <FaPlay className="text-[26px] ml-1 text-black" />
              </button>
            )}
          </div>

          <Image
            className="absolute top-0 left-0 z-10"
            src="/endel-tv/tv.svg"
            alt="endel-tv"
            width={1152}
            height={648}
          />

          <div className="w-full h-full relative">
            <video
              ref={videoRef}
              src="/endel-tv/endel-tv-video.mp4"
              className={`w-full h-full object-contain object-bottom mx-auto absolute inset-0 ${
                play ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              playsInline
              loop
              preload="auto"
            />
            {!play && (
              <Image
                src="/endel-tv/apple-tv-cover.avif"
                alt="endel-tv"
                width={1152}
                height={648}
                className="relative z-20"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndelTvSec;
