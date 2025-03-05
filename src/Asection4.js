"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Sparkles, Shield, Activity } from "lucide-react"

export default function Asection4() {
  const sectionRef = useRef(null)
  const itemRefs = useRef([])
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          sectionObserver.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    const itemObservers = []

    itemRefs.current.forEach((item, index) => {
      if (item) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...prev, index])
              observer.unobserve(entry.target)
            }
          },
          { threshold: 0.2 },
        )

        observer.observe(item)
        itemObservers.push(observer)
      }
    })

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current)
      }

      itemObservers.forEach((observer, index) => {
        if (itemRefs.current[index]) {
          observer.unobserve(itemRefs.current[index])
        }
      })
    }
  }, [])

  const items = [
    {
      img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/woman-2592247_1920.jpg?v=1740573108",
      title: "How It Started",
      link: "/gummies-sleep",
      buttonText: "Explore Aayush Wellness",
      content: "A vision to transform everyday health.",
      icon: <Sparkles className="text-amber-500" size={32} />,
      content2: `<div style="width: 100%; max-width: 100%; padding: 0 2%; box-sizing: border-box; font-size: clamp(14px, 1.2vw, 18px); color: #3a4458; line-height: 1.8; font-weight: 400;">
    <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px;">
      <svg width="24" height="24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21 7 14.13l-5-4.86 6.91-1.01L12 2z"></path></svg>
      How It All Began
    </h3>
    <p>
      Our journey started with a simple yet profound question:
      <span style="font-style:italic; font-weight: 500; color: #000;"> "How can we make holistic wellness more accessible, personalized, and proactive?"</span>
    </p>

    <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px; margin-top: 16px;">
      <svg width="24" height="24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5m0 0L5 12m7-7l7 7"></path></svg>
      The Vision Behind Aayush Wellness
    </h3>
    <p>
      This vision led to the creation of <span style="font-weight: 600; color: #000;">Aayush Wellness</span> — a brand that seamlessly blends 
      <span style="font-weight: 500; color: #000;"> cutting-edge research</span> with nature’s best-kept secrets, crafting solutions that empower people 
      to take charge of their health.
    </p>

    <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px; margin-top: 16px;">
      <svg width="24" height="24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12a4 4 0 0 1-8 0 4 4 0 0 1 8 0z"></path></svg>
      Science Meets Nature
    </h3>
    <p>
      From meticulously formulated <span style="font-weight: 500; color: #000;">nutraceuticals and dietary supplements</span> to 
      <span style="font-weight: 500; color: #000;"> AI-powered preventive healthcare services</span>, our mission is to bring the best of health, backed by science.
    </p>

    <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px; margin-top: 16px;">
      <svg width="24" height="24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"></path><path d="M16 5H3"></path></svg>
      Empowering a Healthier Tomorrow
    </h3>
    <p>
      At Aayush Wellness, we don’t just treat health concerns; we provide <span style="font-weight: 500; color: #000;">holistic, science-backed solutions</span> 
      that empower individuals to take control of their well-being.
    </p>
  </div>`,

    },
    {
      img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/medical-artificial-intelligence.jpg?v=1740573135",
      title: "What We Do",
      link: "/health",
      buttonText: "Explore Aayush Wellness",
      content: "At the intersection of wellness and technology, we are shaping the future of health.",
      icon: <Activity className="text-emerald-500" size={32} />,
      content2: `<div style="width: 100%; max-width: 100%; padding: 0 0%; box-sizing: border-box; font-size: clamp(14px, 1.2vw, 18px); color: #3a4458; line-height: 1.8; font-weight: 400;">
      <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px;">
        <svg width="24" height="24" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5m0 0L5 12m7-7l7 7"></path></svg>
        Advanced Nutraceuticals & Supplements
      </h3>
      <p>
        Our scientifically formulated <span style="font-weight: 500; color: #000;">nutraceuticals and dietary supplements</span> are designed to enhance 
        wellness and bridge nutritional gaps effectively.
      </p>
  
      <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px; margin-top: 16px;">
        <svg width="24" height="24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21 7 14.13l-5-4.86 6.91-1.01L12 2z"></path></svg>
        AI-Driven Preventive Healthcare
      </h3>
      <p>
        By integrating <span style="font-weight: 500; color: #000;">cutting-edge AI technology</span>, we empower individuals with personalized 
        health monitoring and proactive wellness insights.
      </p>
  
      <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px; margin-top: 16px;">
        <svg width="24" height="24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"></path><path d="M20 6a10 10 0 1 1-8-4"></path></svg>
        Holistic Health Foods & Wellness
      </h3>
      <p>
        Our <span style="font-weight: 500; color: #000;">organic and functional health foods</span> are crafted to support everyday well-being 
        and promote a balanced lifestyle.
      </p>
    </div>`,
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/washing-hands-with-soap-prevent-disease.jpg?v=1740573151",
      title: "Why Aayush Wellness?",
      link: "/investors",
      buttonText: "Explore Aayush Wellness",
      icon: <Shield className="text-indigo-500" size={32} />,
      content:
        "We don't just sell wellness—we create a movement that empowers individuals to make informed choices about their health.",
        content2: `<div style="width: 100%; max-width: 100%;  box-sizing: border-box; font-size: clamp(14px, 1.2vw, 18px); color: #3a4458; line-height: 1.8; font-weight: 400;">
        <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px;">
          <svg width="24" height="24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
          Science-Backed Formulations
        </h3>
        <p>
          Our products are developed by leading experts in <span style="font-weight: 500; color: #000;">nutraceuticals and healthcare</span>, 
          ensuring safety, efficacy, and reliability.
        </p>
    
        <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px; margin-top: 16px;">
          <svg width="24" height="24" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"></path><path d="M12 3v18"></path></svg>
          Personalized Health Solutions
        </h3>
        <p>
          Our tailored wellness solutions cater to <span style="font-weight: 500; color: #000;">individual health needs</span>, ensuring a customized 
          approach to well-being.
        </p>
    
        <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px; margin-top: 16px;">
          <svg width="24" height="24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"></path></svg>
          Future-Ready Preventive Care
        </h3>
        <p>
          We focus on <span style="font-weight: 500; color: #000;">early detection and smart interventions</span>, promoting proactive health monitoring 
          for a better future.
        </p>
    
        <h3 style="font-size: clamp(18px, 1.5vw, 22px); font-weight: 600; color: #000; display: flex; align-items: center; gap: 10px; margin-top: 16px;">
          <svg width="24" height="24" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"></path></svg>
          Commitment to Purity & Quality
        </h3>
        <p>
          Every product undergoes <span style="font-weight: 500; color: #000;">rigorous testing</span> to ensure the highest standards of safety and efficacy.
        </p>
      </div>`,
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="wellness-section"
      style={{
        padding: "60px 0px 0",
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? "0" : "50px"})`,
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "80vw",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "100px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="item-container"
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              gap: "32px",
              position: "relative",
            }}
          >
            {/* Decorative elements */}
            <div
              className="decorative-circle"
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(236,246,255,0.6) 0%, rgba(236,246,255,0) 70%)",
                top: index % 2 === 0 ? "-100px" : "auto",
                bottom: index % 2 === 0 ? "auto" : "-100px",
                left: index % 2 === 0 ? "-150px" : "auto",
                right: index % 2 === 0 ? "auto" : "-150px",
                zIndex: -1,
                opacity: visibleItems.includes(index) ? 1 : 0,
                transition: "opacity 1.5s ease-out",
              }}
            />

            <div
              className="image-container"
              style={{
                flex: 1,
                padding: "64px 64px 40px",
                position: "relative",
                borderRadius: "48px",
                overflow: "hidden",
                height: "41.2vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxHeight: "650px",
                boxShadow: visibleItems.includes(index) ? "0 20px 40px rgba(0,0,0,0.08)" : "none",
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: `translateX(${visibleItems.includes(index) ? "0" : index % 2 === 0 ? "-100px" : "100px"})`,
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.8s ease-out",
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.querySelector("a").style.transform = "translateY(0)"
                  setActiveIndex(index)
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.querySelector("a").style.transform = "translateY(calc(100% + 40px))"
                  setActiveIndex(null)
                }
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  position: "absolute",
                  overflow: "hidden",
                }}
              >
                <div
                  className="image-overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)",
                    zIndex: 1,
                    opacity: activeIndex === index ? 0.7 : 0.5,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />
                <img
                  src={item.img || "/placeholder.svg"}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: activeIndex === index ? "scale(1.15)" : "scale(1.1)",
                    transition: "transform 8s ease-in-out",
                  }}
                />
              </div>
              <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
                <div
                  className="title-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    className="icon-container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      transform: visibleItems.includes(index)
                        ? "translateY(0) rotate(0deg)"
                        : "translateY(-20px) rotate(-45deg)",
                      opacity: visibleItems.includes(index) ? 1 : 0,
                      transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out",
                      transitionDelay: "0.3s",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="font-['Inter'] text-[34px] leading-[120%] tracking-[.02em] text-white font-normal mb-0 md:text-[54px]"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      transform: visibleItems.includes(index) ? "translateY(0)" : "translateY(20px)",
                      opacity: visibleItems.includes(index) ? 1 : 0,
                      transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
                      transitionDelay: "0.4s",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
                <div
                  className="image-content"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "20px",
                    lineHeight: "150%",
                    color: "rgba(255, 255, 255, 0.95)",
                    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    maxWidth: "80%",
                    transform: visibleItems.includes(index) ? "translateY(0)" : "translateY(20px)",
                    opacity: visibleItems.includes(index) ? 1 : 0,
                    transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
                    transitionDelay: "0.5s",
                  }}
                >
                  {item.content}
                </div>
              </div>
              <a
                href={item.link}
                className="action-button"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "100px",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  whiteSpace: "nowrap",
                  background: "rgba(255, 255, 255, 0.95)",
                  color: "#13233b",
                  padding: "24px",
                  transition: "all .5s ease-in-out",
                  position: "relative",
                  zIndex: 1,
                  transform: "translateY(calc(100% + 40px))",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("svg").style.transform = "translateX(5px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("svg").style.transform = "translateX(0)"
                }}
              >
                {item.buttonText}
                <ArrowRight
                  size={20}
                  style={{
                    marginLeft: "12px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </a>
            </div>
            <div
              className="text-container"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                className="content-wrapper"
                style={{
                  position: "relative",
                  width: "100%",
                  opacity: visibleItems.includes(index) ? 1 : 0,
                  transform: `translateX(${visibleItems.includes(index) ? "0" : index % 2 === 0 ? "100px" : "-100px"})`,
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                  transitionDelay: "0.3s",
                }}
              >
                {/* Animated highlight element */}
                <div
                  className="highlight-element"
                  style={{
                    position: "absolute",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(236,246,255,0.8) 0%, rgba(236,246,255,0) 70%)",
                    top: "-60px",
                    left: index % 2 === 0 ? "-60px" : "auto",
                    right: index % 2 === 0 ? "auto" : "-60px",
                    zIndex: -1,
                    opacity: visibleItems.includes(index) ? 1 : 0,
                    transition: "opacity 1s ease-out",
                    animation: visibleItems.includes(index) ? "pulse 6s infinite alternate" : "none",
                  }}
                />

                {/* Content with animated border */}
                <div
                  className="image-content"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "18px",
                    lineHeight: "160%",
                    color: "rgba(0, 0, 0, 0.8)",
                    padding: "40px",
                    borderRadius: "24px",
                    background: "rgba(255, 255, 255, 0.6)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(236,246,255,0.8)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Animated gradient border */}
                  <div
                    className="animated-border"
                    style={{
                      position: "absolute",
                      top: "-2px",
                      left: "-2px",
                      right: "-2px",
                      bottom: "-2px",
                      zIndex: -1,
                      background:
                        "linear-gradient(45deg, rgba(236,246,255,0), rgba(236,246,255,0.8), rgba(236,246,255,0))",
                      backgroundSize: "200% 200%",
                      animation: visibleItems.includes(index) ? "gradientMove 8s ease infinite" : "none",
                      borderRadius: "24px",
                      opacity: 0.6,
                    }}
                  />

                  <p dangerouslySetInnerHTML={{ __html: item.content2 }}></p>

                  {/* Animated corner accent */}
                  <div
                    className="corner-accent"
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "60px",
                      bottom: "0",
                      right: "0",
                      borderTop: "2px solid rgba(236,246,255,0.8)",
                      borderLeft: "2px solid rgba(236,246,255,0.8)",
                      opacity: visibleItems.includes(index) ? 1 : 0,
                      transform: visibleItems.includes(index) ? "translate(30px, 30px)" : "translate(0, 0)",
                      transition: "opacity 1s ease-out, transform 1s ease-out",
                      transitionDelay: "0.8s",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .wellness-section {
          --primary-color: #13233b;
          --accent-color: #ecf6ff;
        }
        
        @media (max-width: 1200px) {
          .wellness-section {
            padding: 80px 60px 0 !important;
          }
          .wellness-section div[style*="maxWidth: 80vw"] {
            max-width: 90vw !important;
            gap: 80px !important;
          }
          .image-container div[style*="fontSize: 54px"] {
            font-size: 42px !important;
          }
          .image-content {
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 992px) {
          .wellness-section {
            padding: 60px 40px 0 !important;
          }
          .wellness-section div[style*="maxWidth: 80vw"] {
            max-width: 100% !important;
            gap: 60px !important;
          }
          .item-container {
            flex-direction: column !important;
          }
          .image-container {
            height: 50vw !important;
            max-height: 400px !important;
          }
          .decorative-circle {
            width: 200px !important;
            height: 200px !important;
          }
        }
        
        @media (max-width: 768px) {
          .wellness-section {
            padding: 40px 20px 0 !important;
          }
          .wellness-section div[style*="maxWidth: 80vw"] {
            gap: 40px !important;
          }
          .image-container {
            width: 100% !important;
            height: auto !important;
            max-height: none !important;
            padding: 32px 24px 20px !important;
          }
          .image-container div[style*="fontSize: 54px"] {
            font-size: 28px !important;
          }
          .title-container {
            margin-bottom: 16px !important;
          }
          .icon-container {
            width: 40px !important;
            height: 40px !important;
          }
          .icon-container svg {
            width: 20px !important;
            height: 20px !important;
          }
          .image-content,
          .text-container div {
            font-size: 14px !important;
          }
          .action-button {
            font-size: 16px !important;
            padding: 16px !important;
            transform: translateY(0) !important;
          }
          .text-container {
            padding: 0 !important;
          }
          .highlight-element, .corner-accent {
            display: none !important;
          }

          .text-container {
    width: 100% !important;
    padding: 0 !important;
  }

  .text-container .content-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .text-container .content-wrapper .text-content {
    width: 100% !important;
    text-align: left !important; /* Adjust as needed */
    padding: 10px !important; /* Add spacing if text touches edges */
  }

  .text-container .image-content {
    width: 100% !important;
    max-width: 100% !important;
    padding: 10px !important;
    border-radius: 24px !important;
  }
        }
        
        @media (max-width: 480px) {
          .wellness-section {
            padding: 30px 16px 0 !important;
          }
          .image-container {
            padding: 24px 16px 16px !important;
            border-radius: 24px !important;
          }
          .image-container div[style*="fontSize: 54px"] {
            font-size: 24px !important;
          }
          .image-content {
            padding: 16px !important;
          }
          .decorative-circle {
            width: 120px !important;
            height: 120px !important;
          }
        }

        
      `}</style>
    </section>
  )
}
