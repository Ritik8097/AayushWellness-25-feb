import React, { useState, useEffect } from 'react'
import './Asection7.css'
import FooterBlock from './FooterBlock';

const Asection7 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

   const sections = [
    {
      title: "Explore",
      links: [
        { text: "About",href: "/about-us"}, 
        { text: "Modern Science", href:"/wellness/modern-science"  },          
        { text: "Ayurverda",  href:"/wellness/ayurveda" },                                     
        { text: "Health & Wellness", href:"/wellness/health-wellness"  },                
        { text: "In the News", href:"/newsroom/in-the-news"  },            
        { text: "Press Release", href:"/newsroom/press-release" },       
      ],
    },
    {
      title: "CSR",
      links: [
        { text: "Library", href:"/newsroom/library" },  
        { text: "Malnutrition",href:"/csr-at-aayush/malnutrition"  },  
        { text: "Healthcare Check", href:"/csr-at-aayush/health-check"  },    
        { text: "Sustainability",href:"/sustainability" },  
        
      ],
    },
    {
      title: "Corporate",
      links: [
        { text: "Careers", href:"/career" },   
        { text: "Pricay Policy", href: "/privacy-policy" },  
        { text: "Growth accelerator", href:"/growth-accelerator" },    
        { text: "Health", href: "/health" },      
        
       
      ],
    },
  ];

  return (
<footer className="footer snipcss-DVqsh">
      <div className="footer__block1">
        <img src="https://berelax.com/_next/static/media/4-1.515f831f.webp" className="footer__block1-img" width="100%" height="100%" />
        <div className="footer__row">
          <div className="in-view fadein animated style-ooSFT" id="style-ooSFT">
            <div className="footer__left">
              <h2 className="footer__title">Join the Aayush Wellness &amp; Travel Newsletter</h2>
              <div className="footer__form">
                <div className="footer__input"><input type="email" placeholder="Your Email"  /></div>
                <div className="button beige button-arrow"><svg viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8.5h24m0 0-6.857-7M24 8.5l-6.857 7" stroke="#fff" strokeWidth="1.5" />
                  </svg></div>
              </div>
            </div>
          </div>
          <div className="in-view fadein animated style-9mrno" id="style-9mrno">
            {!isMobile ? (
              <div className="footer__list">
                {sections.map((section, index) => (
                  <div key={index} className="footer__list-col">
                    <div className="footer__subtitle">{section.title} <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.344 5.643 8 11.3l5.657-5.657-.943-.943L8 9.415 3.286 4.7l-.942.943Z" fill="#13233B" />
                      </svg></div>
                    <div className="footer__list-sublist">
                      {section.links.map((link, idx) => (
                        <a key={idx} className="footer__link" href={link.href}>{link.text}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="footer__list flex flex-col w-full">
                {sections.map((section, index) => (
                  <div key={index} className="footer__list-col w-full border-b border-gray-300">
                    <div
                      className="footer__subtitle flex justify-between items-center py-3 cursor-pointer w-full"
                      onClick={() => toggleSection(section.title)}
                    >
                      <span>{section.title}</span>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 transform transition-transform ${
                          openSection === section.title ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <path d="M2.344 5.643 8 11.3l5.657-5.657-.943-.943L8 9.415 3.286 4.7l-.942.943Z" fill="#000000" />
                      </svg>
                    </div>
                    <div
                      className="footer__list-sublist w-full overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: openSection === section.title ? "500px" : "0px",
                        opacity: openSection === section.title ? 1 : 0,
                        transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
                      }}
                    >
                      {section.links.map((link, idx) => (
                        <a key={idx} className="footer__link block py-1 w-full" href={link.href}>
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="in-view fadein animated style-MzNLt" id="style-MzNLt">
          <div className="footer__block1-bottom">
            <div className="footer__socials">
              <a  className="footer__socials-item" target="_blank" rel="noreferrer"><img src="https://berelax.com/wp-content/uploads/2023/02/facebook.svg" width="100%" height="100%" alt="be relax" className /></a>  
              {/* href="https://www.facebook.com/berelaxspa"       */}
              <a  className="footer__socials-item" target="_blank" rel="noreferrer"><img src="https://berelax.com/wp-content/uploads/2023/02/linkedin.svg" width="100%" height="100%" alt="be relax" className /></a>
              {/* href="https://www.linkedin.com/company/be-relax/" */}
              <a  className="footer__socials-item" target="_blank" rel="noreferrer"><img src="https://berelax.com/wp-content/uploads/2023/02/instagram.svg" width="100%" height="100%" alt="be relax" className /></a>
              {/* href="https://instagram.com/berelax_spa" */}
            </div>
            <div className="footer__block1-right">
              <div className="footer__links"><a className="footer__link" href="/terms-conditions">Terms &amp; Conditions</a><a className="footer__link" href="/privacy-policy/">Privacy Policy</a></div>
              <div className="footer__select">
                <div className="footer__select-top"><svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.987a5.657 5.657 0 0 0-8 8l3.513 3.52a.667.667 0 0 0 .947 0L12 10.954a5.633 5.633 0 0 0 0-7.967ZM11.047 10 8 13.06 4.953 10a4.307 4.307 0 1 1 6.094 0ZM6 4.94a2.88 2.88 0 0 0 1.464 4.853 2.873 2.873 0 0 0 3.443-2.786 2.826 2.826 0 0 0-.84-2.033A2.867 2.867 0 0 0 6 4.94Zm3.127 3.12a1.553 1.553 0 1 1 .446-1.086c-.01.411-.182.802-.48 1.086h.034Z" fill="#3A4458" />
                  </svg><span /><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.344 5.643 8 11.3l5.657-5.657-.943-.943L8 9.415 3.286 4.7l-.942.943Z" fill="#13233B" />
                  </svg></div>
              </div>
            </div>
          </div>
        </div>
        <div className="in-view fadein animated style-zXIZf" id="style-zXIZf">
          <div className="footer__copy">
            <div className="footer__text">© Aayush Wellness. All Rights Reserved</div>
           
            <div className="footer__text">Created by<a  target="_blank" rel="noreferrer"><svg width={72} height={21} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* href="https://equal.design/" */}
                  <defs>
                    <clipPath id="equal_svg__a">
                      <path fill="#fff" d="M0 0h72v21H0z" />
                    </clipPath>
                  </defs>
                </svg></a></div>
          </div>
        </div>
      </div>
      <FooterBlock/>
    </footer> 
  )
}

export default Asection7;
