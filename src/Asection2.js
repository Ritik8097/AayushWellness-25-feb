import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

const Asection2 = () => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const mobileVideo = "https://res.cloudinary.com/dudn5tfkq/video/upload/v1744283254/about_us_vidoes_-_portarit_bxh9dg.m3u8";
    const desktopVideo = "https://res.cloudinary.com/dudn5tfkq/video/upload/v1744283219/about_us_vidoes_hedyhq.m3u8";
    setVideoSrc(isMobile ? mobileVideo : desktopVideo);
  }, []);

  useEffect(() => {
    if (videoSrc && videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current
            .play()
            .catch((err) => console.warn("Autoplay error:", err));
        });
        return () => hls.destroy();
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = videoSrc;
        videoRef.current
          .play()
          .catch((err) => console.warn("Safari autoplay error:", err));
      }
    }
  }, [videoSrc]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <style>
        {`
          @keyframes scrollAnimation {
            0% { transform: translateY(0); }
            50% { transform: translateY(10px); }
            100% { transform: translateY(0); }
          }
          .scroll-indicator {
            position: absolute;
            bottom: 60px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 30;
          }
          .mouse {
            width: 30px;
            height: 50px;
            border: 2px solid white;
            border-radius: 20px;
            position: relative;
          }
          .scroll-line {
            position: absolute;
            width: 2px;
            height: 10px;
            background-color: white;
            left: 50%;
            top: 8px;
            transform: translateX(-50%);
            animation: scrollAnimation 1.5s infinite;
          }
        `}
      </style>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, y: 320 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          muted
          autoPlay
          playsInline
          loop
          controls={false}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-start justify-end md:justify-center text-left px-6 md:px-[5vw] z-20 pb-[15vh] md:pb-0">
      <h1 className="text-white font-semibold leading-none">
  {/* Desktop */}
  <span className=" hidden md:inline text-[5.8vw]" style={{ fontFamily: 'ROGBold' }}>
  Care, Cure, Commitment
  </span>

  {/* Mobile */}
  <span className="md:hidden block text-[9vw] leading-[100%]">
    <div className="block">Care</div>
    <div className="block">Cure</div>
    <div className="block">Commitment </div>
  </span>
</h1>

        <p className="text-white font-medium mt-4 text-[16px] leading-[180%] md:text-[1.25vw] md:max-w-[38.4vw] max-w-[90%]" style={{ fontFamily: 'Minionpro' }}>
        Putting people first, always—with precision and purpose.
        </p>
      </div>

      {/* Scroll Indicator - visible on large screens */}
      <div className="scroll-indicator hidden lg:block">
        <div className="mouse">
          <div className="scroll-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Asection2;
