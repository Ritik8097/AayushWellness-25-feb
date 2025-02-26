import { useEffect, useRef, useState } from "react"

export default function Asection4() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const items = [
    {
      img: "https://img.freepik.com/free-photo/person-running-beach-sunset_1048-4498.jpg?t=st=1740549909~exp=1740553509~hmac=4233c3d965d86576a2d03efec850c98aee088852f7f59d4276a663127d53aeaa&w=1380",
      title: "How It Started",
      link: "find-us/",
      buttonText: "Explore Aayush Wellness",
      content:"A vision to transform everyday health.",
        content2: "Our journey began with a simple yet profound question:How can we make holistic wellness more accessible, personalized, and proactive? This led us to build Aayush Wellness, a brand that blends cutting-edge research with nature’s best-kept secrets, crafting solutions that don’t just treat but empower people to take charge of their health—every single day.From meticulously formulated nutraceuticals and dietary supplements to AI-powered preventive healthcare services, our mission has always been to bring you the best of health, backed by science.",
    },
    {
      img: "https://img.freepik.com/free-photo/question-mark-icon-solving-problem-solution-concept_53876-13887.jpg?t=st=1740549955~exp=1740553555~hmac=2e53a5f2d1debc89ee6d8fcb3b472c60cdce5a953bd841a88bce58cade5db8d2&w=1060",
      title: "What We Do",
      link: "/products",
      buttonText: "Explore Aayush Wellness",
      content: "At the intersection of wellness and technology, we are shaping the future of health.",
      content2: "Advanced Nutraceuticals & Dietary Supplements💡 AI-Driven Preventive Healthcare Solutions🌿 Organic & Functional Health Foods for Everyday Well-Being🩺 Telemedicine & Smart Health Diagnostics (Health Care Centers)Every product and service we create is designed to align with your body’s natural rhythm, enhance vitality, and offer long-term health benefits.",
    },
    {
      img: "https://img.freepik.com/free-photo/hand-holding-question-mark_1134-114.jpg?t=st=1740550013~exp=1740553613~hmac=a93affc4baa238df94424f313657f7ea1c92dccee8109da3352e028a68843dbe&w=1060",
      title: "Why Aayush Wellness?",
      link: "find-us/",
      buttonText: "Explore Aayush Wellness",
      content:"We don’t just sell wellness—we create a movement that empowers individuals to make informed choices about their health.",
        content2: "✔️ Science-Backed Formulations – Developed by leading experts in nutraceuticals & healthcare.✔️ Personalized Health Solutions – Tailored to fit individual wellness needs.✔️ Future-Ready Preventive Care – Focusing on early detection, proactive health monitoring & smart interventions.✔️ Commitment to Purity & Quality – Every product undergoes rigorous testing for safety & efficacy.",
    },
    
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "60px 0px 0",
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? "0" : "50px"})`,
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "80vw",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="item-container"
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              gap: "32px",
            }}
          >
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
                transition: "all .5s ease-in-out",
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.querySelector("a").style.transform = "translateY(0)"
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.querySelector("a").style.transform = "translateY(calc(100% + 40px))"
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
                }}
              >
                <img
                  src={item.img || "/placeholder.svg"}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.1)",
                    transition: "all .5s ease-in-out",
                  }}
                />
              </div>
              <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
                <div
                  className="font-['Antic Didone'] text-[34px] leading-[120%] tracking-[.02em] text-black font-normal mb-6 md:text-[54px]"
                >
                  {item.title}
                </div>
                <div
                  className="image-content"
                  style={{
                    fontFamily: "Gotham Pro",
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "rgba(0, 0, 0, 0.8)",
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
                  fontFamily: "Gotham Pro",
                  fontSize: "20px",
                  whiteSpace: "nowrap",
                  background: "#fff",
                  color: "#13233b",
                  padding: "24px",
                  transition: "all .8s ease-in-out",
                  position: "relative",
                  zIndex: 1,
                  transform: "translateY(calc(100% + 40px))",
                }}
              >
                {item.buttonText}
                <svg
                  viewBox="0 0 26 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginLeft: "12px",
                    transition: "all .8s ease-in-out",
                    maxWidth: "24px",
                    minWidth: "24px",
                  }}
                >
                  <path d="M0 8.5h24m0 0-6.857-7M24 8.5l-6.857 7" stroke="#13233b" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
            <div
              className="text-container"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <div
                style={{
                  fontFamily: "Gotham Pro",
                  fontSize: "18px",
                  lineHeight: "150%",
                  color: "#202A41",
                  maxWidth: "80%",
                }}
              >
                {item.content}
              </div> */}
              <div
                  className="image-content"
                  style={{
                    fontFamily: "Gotham Pro",
                    fontSize: "26px",
                    lineHeight: "150%",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {item.content2}
                </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 1200px) {
          section {
            padding: 80px 60px 0;
          }
          div[style*="maxWidth: 80vw"] {
            max-width: 90vw;
          }
          .image-container div[style*="fontSize: 54px"] {
            font-size: 42px;
          }
        }
        @media (max-width: 992px) {
          section {
            padding: 60px 40px 0;
          }
          div[style*="maxWidth: 80vw"] {
            max-width: 100%;
          }
          .item-container {
            flex-direction: column !important;
          }
          .image-container {
            height: 50vw !important;
            max-height: 400px !important;
          }
        }
        @media (max-width: 768px) {
          section {
            padding: 40px 20px 0;
          }
          .image-container {
            width: 100% !important;
            height: auto !important;
            max-height: none !important;
            padding: 32px 24px 20px !important;
          }
          .image-container div[style*="fontSize: 54px"] {
            font-size: 32px;
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
            padding: 24px 0;
          }
          .text-container div {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
