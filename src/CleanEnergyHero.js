import React, { useEffect, useRef, useState } from "react";
import "./CleanEnergyHero.css";
import BlurText from "./BlurText";
import Hls from "hls.js";

const CleanEnergyHero = () => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const mobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);
  }, []);

  // Load HLS video dynamically
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videos = {
       desktop: {
        src: "https://res.cloudinary.com/da2qlhv5l/video/upload/v1751521982/nidxfgeqigjs3ttwflv1_nrryfs.m3u8",
        text: "Transforming Wellness , Transforming Lives",
      },
      mobile: {
        src: "https://res.cloudinary.com/da2qlhv5l/video/upload/v1751521982/nidxfgeqigjs3ttwflv1_nrryfs.m3u8",
        text: "Transforming wellness, transforming lives",
      },
    };

    const videoSrc = isMobile ? videos.mobile.src : videos.desktop.src;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari fallback
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }
  }, [isMobile]);

  return (
    <div className="md:flex md:w-full bg-[#000] block items-center pl-[20px] blocks">
      {/* Text Content */}
      <div className="HomeHero_content__DYNN6" style={{fontFamily: "ROGBold"}}>
        <BlurText
          text="Science & Ayurveda for a Healthier Tomorrow"
          
          delay={150}
          animateBy="words"
          direction="top"
          className="md:text-6xl mb-8 text-[30px] font-bold text-[#fff] uppercase" style={{ fontFamily: "ROGBold" }}
        />
        <p className="HomeHero_copy__GS3c3 !text-[#fff]" style={{fontFamily: "Minionpro"}}>
          Aayush Wellness blends ancient Ayurveda with modern science to create
          premium wellness solutions for your body, mind, and soul.
        </p>
        <div className="MultiButton_multiButton__iqSU8 HomeHero_multiButton__TZa0b">
          <a
            className="BaseButton_baseButton__gki38"
            href="/ourproduct"
          >
            <span>Explore Our Products</span>
            <svg
              width={11}
              height={10}
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="HomeHero_mediaWrapper__g_1Dk">
        <div className="Video_container__CkVas HomeHero_media__R_Dw1">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default CleanEnergyHero;
