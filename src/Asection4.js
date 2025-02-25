// "use client"

// import { useEffect, useRef, useState } from "react"

// export default function Asection4() {
//   const sectionRef = useRef(null)
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//           observer.unobserve(entry.target)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current)
//       }
//     }
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         padding: "120px 100px 0",
//         opacity: isVisible ? 1 : 0,
//         transform: `translateY(${isVisible ? "0" : "50px"})`,
//         transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "80vw",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "repeat(2,1fr)",
//           columnGap: "32px",
//           rowGap: "20px",
//         }}
//       >
//         {[
//           {
//             img: "https://berelax.com/wp-content/uploads/2025/01/travel-pillow-comfortable-neck-support-resized-1-1024x1007.webp",
//             // subtitle: "Wellness at the airport",
//             title: "What We Do",
//             link: "find-us/",
//             buttonText: "Explore Aayush Wellness",
//           },
//           {
//             img: "https://berelax.com/wp-content/uploads/2025/01/leg-therapy-massage-be-relax-1024x1007.webp",
//             // subtitle: "Relax everywhere",
//             title: "Why Aayush Wellness?",
//             link: "/products",
//             buttonText: "Explore Aayush Wellness",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             style={{
//               padding: "64px 64px 40px",
//               position: "relative",
//               borderRadius: "48px",
//               overflow: "hidden",
//               height: "41.2vw",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               maxHeight: "650px",
//               transition: "all .5s ease-in-out",
//             }}
//             onMouseEnter={(e) => {
//               if (window.innerWidth > 768) {
//                 e.currentTarget.querySelector("a").style.transform = "translateY(0)"
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (window.innerWidth > 768) {
//                 e.currentTarget.querySelector("a").style.transform = "translateY(calc(100% + 40px))"
//               }
//             }}
//           >
//             <div
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 top: 0,
//                 left: 0,
//                 position: "absolute",
//               }}
//             >
//               <img
//                 src={item.img || "/placeholder.svg"}
//                 alt=""
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   transform: "scale(1.1)",
//                   transition: "all .5s ease-in-out",
//                 }}
//               />
//             </div>
//             <div style={{ width: "100%", height: "100%" }}>
//               <div
//                 style={{
//                   fontFamily: "Gotham Pro",
//                   fontSize: "16px",
//                   lineHeight: "100%",
//                   textTransform: "uppercase",
//                   color: "rgba(32,42,65,.7)",
//                   marginBottom: "12px",
//                   fontWeight: 400,
//                   position: "relative",
//                   zIndex: 1,
//                 }}
//               >
//                 {item.subtitle}
//               </div>
//               <div
//                 style={{
//                   fontFamily: "Antic Didone",
//                   fontSize: "54px",
//                   lineHeight: "120%",
//                   letterSpacing: ".02em",
//                   color: "#000",
//                   fontWeight: 400,
//                   position: "relative",
//                   zIndex: 1,
//                 }}
//               >
//                 {item.title}
//               </div>
//             </div>
//             <a
//               href={item.link}
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 cursor: "pointer",
//                 borderRadius: "100px",
//                 fontFamily: "Gotham Pro",
//                 fontSize: "20px",
//                 whiteSpace: "nowrap",
//                 background: "#fff",
//                 color: "#13233b",
//                 padding: "24px",
//                 transition: "all .8s ease-in-out",
//                 position: "relative",
//                 zIndex: 1,
//                 transform: "translateY(calc(100% + 40px))",
//               }}
//             >
//               {item.buttonText}
//               <svg
//                 viewBox="0 0 26 17"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{
//                   marginLeft: "12px",
//                   transition: "all .8s ease-in-out",
//                   maxWidth: "24px",
//                   minWidth: "24px",
//                 }}
//               >
//                 <path d="M0 8.5h24m0 0-6.857-7M24 8.5l-6.857 7" stroke="#fff" strokeWidth="1.5" />
//               </svg>
//             </a>
//           </div>
//         ))}
//       </div>
//       <style>{`
//             @media (max-width: 768px) {
//               div[style*="display: grid"] {
//                 grid-template-columns: 1fr !important;
//                 justify-content: center;
//                 align-items: center;
//               }
//               div[style*="height: 41.2vw"] {
//                 height: 225px !important;
//                 width: 404px !important;
//                 max-width: 100%;
//                 margin: 0 auto;
//                 padding-left: 16px;
//                 padding-right: 16px;
//               }
//               div[style*="display: flex"] {
//                 flex-direction: column !important;
//                 align-items: center;
//               }
//               div[style*="font-size: 54px"] {
//                 font-size: 36px !important;
//               }
//               div[style*="font-size: 16px"] {
//                 font-size: 16px !important;
//               }
//               a {
//                 transform: translateY(0) !important;
//               }
//             }
//           `}</style>
//     </section>
//   )
// }





"use client"

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
      img: "https://berelax.com/wp-content/uploads/2025/01/travel-pillow-comfortable-neck-support-resized-1-1024x1007.webp",
      title: "What We Do",
      link: "find-us/",
      buttonText: "Explore Aayush Wellness",
    },
    {
      img: "https://berelax.com/wp-content/uploads/2025/01/leg-therapy-massage-be-relax-1024x1007.webp",
      title: "Why Aayush Wellness?",
      link: "/products",
      buttonText: "Explore Aayush Wellness",
    },
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "120px 100px 0",
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
          display: "grid",
          rowGap: "20px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
              columnGap: "32px",
            }}
          >
            {index % 2 === 0 ? (
              <>
                <div
                  style={{
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
                    cursor: "pointer",
                    transform: "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "all .5s ease-in-out",
                    }}
                  />
                  <a
                    href={item.link}
                    style={{
                      display: "inline-block",
                      marginTop: "16px",
                      padding: "12px 24px",
                      borderRadius: "100px",
                      background: "#fff",
                      color: "#13233b",
                      textDecoration: "none",
                      fontWeight: "bold",
                      transition: "all .3s ease-in-out",
                      alignSelf: "center",
                      position: "absolute",
                      bottom: "20px",
                    }}
                  >
                    {item.buttonText}
                  </a>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Antic Didone",
                      fontSize: "54px",
                      lineHeight: "120%",
                      letterSpacing: ".02em",
                      color: "#000",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div
                    style={{
                      fontFamily: "Antic Didone",
                      fontSize: "54px",
                      lineHeight: "120%",
                      letterSpacing: ".02em",
                      color: "#000",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </div>
                </div>
                <div
                  style={{
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
                    cursor: "pointer",
                    transform: "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "all .5s ease-in-out",
                    }}
                  />
                  <a
                    href={item.link}
                    style={{
                      display: "inline-block",
                      marginTop: "16px",
                      padding: "12px 24px",
                      borderRadius: "100px",
                      background: "#fff",
                      color: "#13233b",
                      textDecoration: "none",
                      fontWeight: "bold",
                      transition: "all .3s ease-in-out",
                      alignSelf: "center",
                      position: "absolute",
                      bottom: "20px",
                    }}
                  >
                    {item.buttonText}
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

