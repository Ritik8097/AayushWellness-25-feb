import React, { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AccordionItem from './AccordionItem';
import Header from './Header';
import NewFooter from './NewFooter';
import MissionHeader from "./MissionHeader"

let faqs = require('./faqs.json');

// Replace with your Cloudinary .m3u8 video URLs
const DESKTOP_VIDEO_URL = 'https://res.cloudinary.com/dudn5tfkq/video/upload/v1744192698/investor_banner_bldv7e.m3u8';
const MOBILE_VIDEO_URL = 'https://res.cloudinary.com/dudn5tfkq/video/upload/v1744190595/investor_banner_-_portrait_dsika5.m3u8';

const Accordionweb = () => {
  const [active, setActive] = useState(faqs[0].id);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (Hls.isSupported()) {
      if (desktopVideoRef.current) {
        const hls = new Hls();
        hls.loadSource(DESKTOP_VIDEO_URL);
        hls.attachMedia(desktopVideoRef.current);
      }
      if (mobileVideoRef.current) {
        const hls = new Hls();
        hls.loadSource(MOBILE_VIDEO_URL);
        hls.attachMedia(mobileVideoRef.current);
      }
    }
  }, []);

  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <>
      <MissionHeader />

      <div className="relative h-[100vh] md:h-[100vh] overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black bg-opacity-30" />

        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          className="w-full h-full object-cover hidden md:block relative z-0"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          className="w-full h-full object-cover md:hidden block relative z-0"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        {/* Text over Video */}
        <div className="absolute inset-0 flex flex-col items-start justify-end md:justify-center text-left px-6 md:px-[5vw] z-20 pb-[15vh] md:pb-0">
          <h1
            className="text-white font-semibold"
            style={{
              fontSize: '56px',
              lineHeight: '100%',
            }}
          >
            <span className="hidden md:inline" style={{ fontSize: '5.8vw' }}>
            Invest, Impact, Inspire.
            </span>
            <span className="md:hidden block">
            Invest Impact Inspire
            </span>
          </h1>
          <p
            className="text-white font-medium mt-4"
            style={{
              fontSize: '16px',
              lineHeight: '180%',
              maxWidth: '90%',
            }}
          >
            <span className="hidden md:inline" style={{ fontSize: '1.25vw', maxWidth: '38.4vw' }}>
            Scalable, sustainable, and aligned with tomorrow’s health needs.
            </span>
            <span className="md:hidden block">
            Scalable, sustainable, and aligned with tomorrow’s health needs.
            </span>
          </p>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="first" style={{ backgroundColor: "#ffffff" }}>
        <div className="container-fluid mt-5 mb-5 flex justify-center">
          <div className="w-full max-w-[1168px] p-2">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card" style={{ backgroundColor: "#ffffff", boxShadow: "none", width: "100%" }}>
                  <div className="card-body p-3">
                    <h4 className="form-heading text-primary text-start text-[34px] mt-3 mb-8">REPORTS</h4>
                    {faqs.map((faq) => (
                      <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewFooter />
    </>
  );
};

export default Accordionweb;
