
import React, { useState, useEffect, useRef } from "react";

const Asection5 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stops observing after the first appearance
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const images = [
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/sleep_gummy_product_banner1_1.jpg?v=1724399086",
    "https://img.freepik.com/free-photo/front-view-woman-meditating-nature_23-2149698178.jpg?ga=GA1.1.1002746497.1740224156&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/vibrant-appetizing-display-protein-gummies_23-2151022938.jpg?ga=GA1.1.1002746497.1740224156&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/still-life-with-gummy-bears_23-2150250931.jpg?ga=GA1.1.1002746497.1740224156&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/man-practicing-balance-yoga-pose_23-2148234142.jpg?ga=GA1.1.1002746497.1740224156&semt=ais_hybrid",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Beauty_gummy_product_bannner_1_1.jpg?v=1724399086",
  ];

  const buttonStyle = {
    background: "#fff",
    borderRadius: "100px",
    color: "#13233b",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: isMobile ? "16px 20px" : "24px",
    border: "1px solid rgba(46,99,135,.26)",
    width: isMobile ? "258px" : "392px",
    height: isMobile ? "52px" : "auto",
    margin: "20px auto",
    cursor: "pointer",
    transition: "opacity 1s ease-out, transform 1s ease-out",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    textDecoration: "none",
  };

  return (
    <div
      ref={sectionRef}
      className="follow-us__container"
      style={{ width: "100%", margin: "0 auto", maxWidth: "80vw" }}
    >
      <div
        className="follow-us__top"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
        }}
      >
        <h2 
          className="follow-us__title" 
          style={{ 
            textAlign: "center", 
            width: "100%", 
            fontWeight: "bold", 
            fontSize: "54px",
            lineHeight: "120%",
            letterSpacing: "0.02em",
            marginBottom: "12px",
            paddingTop: "60px",
          }}
        >
          The Future of Wellness is Here
        </h2>
        <div
          className="follow-us__text"
          style={{
            fontSize: "18px",
            lineHeight: "150%",
            color: "#3a4458",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          We’re not just about products; we’re about building a healthier tomorrow.
        </div>
        <div
          className="follow-us__text"
          style={{
            fontSize: "18px",
            lineHeight: "150%",
            color: "#3a4458",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          <div
          className="follow-us__text"
          style={{
            fontSize: "18px",
            lineHeight: "150%",
            color: "#3a4458",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Join us in redefining well-being, where technology, nature, and science come together to create a smarter, healthier world.
        </div>
        </div>
        <a
          href="https://www.aayushwellness.com/ourproduct"
          className="button white button-arrow button-svg p24"
          target="_blank"
          rel="noreferrer"
          style={buttonStyle}
        >
          @Explore Our Solutions 
          <svg
            viewBox="0 0 26 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "12px", maxWidth: "24px", minWidth: "24px" }}
          >
            <path
              d="M0 8.5h24m0 0-6.857-7M24 8.5l-6.857 7"
              stroke="#13233b"
              strokeWidth="1.5"
            />
          </svg>
        </a>
      </div>

      <div
        className="follow-us__list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          columnGap: "32px",
          marginTop: "40px",
        }}
      >
        {images.map((image, index) => (
          <a
            key={index}
            className="follow-us__img"
            href="#"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              borderRadius: "50px",
              overflow: "hidden",
              height: "17.4vw",
              maxHeight: "350px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              transition: `opacity 1s ease-out ${index * 0.1}s, transform 1s ease-out ${index * 0.1}s`,
            }}
          >
            <img
              src={image}
              alt="Instagram Post"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Asection5;



