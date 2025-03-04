import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  arrows: false,
  pauseOnHover: false,
};

const Banner = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRedirect = () => {
    window.scrollTo(0, 0); // Ensure page scrolls to top
    navigate("/healthcare"); // Navigate to /healthcare route
  };

  const mobileContent = [
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/grand_opning_healthcare_ad_-_02-03-2025_-_portrait_BANNER.jpg?v=1741005542" },
    { type: "video", src: "https://cdn.shopify.com/videos/c/o/v/720f0d6cd9eb40b384d816e6513b576b.mp4" },
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Slider_banner_2_mobile_9bbc2622-bb9e-48d8-a303-b1dfd6dcd11d.jpg?v=1740134272" },
    { type: "video", src: "https://cdn.shopify.com/videos/c/o/v/3454076400644c5aa9bac0f343e93b32.mp4" },
  ];

  const desktopContent = [
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/GRAND_OPRNING.jpg?v=1741005102" },
    { type: "video", src: "https://cdn.shopify.com/videos/c/o/v/e503e53958ed4a32bfe5f570fa73dc93.mp4" },
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Slider_banner_2_158998cf-e091-408f-913c-aa86b186ea43.jpg?v=1740134272" },
    { type: "video", src: "https://cdn.shopify.com/videos/c/o/v/403fc210eec54d41b620a0cabe78c9f9.mp4" },
  ];

  const content = isMobile ? mobileContent : desktopContent;

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch((err) => console.log("Autoplay prevented:", err));
      }
    });
  }, []);

  return (
    <div className="h-[100vh]">
      <Slider {...sliderSettings}>
        {content.map((item, index) => (
          <div key={index} className="w-full cursor-pointer" onClick={handleRedirect}>
            {item.type === "image" ? (
              <img loading="lazy" className="w-full object-fill h-[100vh] pt-[80px]" src={item.src} alt={`Slide ${index + 1}`} />
            ) : (
              <video
                preload="auto"
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full object-cover h-[100vh] pt-[110px]"
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={() => {
                  videoRefs.current[index]?.play().catch((err) => console.log("Autoplay prevented:", err));
                }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
