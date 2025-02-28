import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AccordionItem from './AccordionItem'; // Ensure the correct path
import Header from './Header';
import NewFooter from './NewFooter';

let faqs = require('./faqs.json');



// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};



const Accordionweb = () => {
    const [active, setActive] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile and desktop images
  const mobileImages = [
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Investors_banner_mobile_1.jpg?v=1724668205",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/investors_banner_2_mobile_1.jpg?v=1724668205",
   
  ];

  const desktopImages = [
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Investors_banner.jpg?v=1724326524",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/investors_banner_2.jpg?v=1724326524",
   
];

  // Choose images based on screen size
  const images = isMobile ? mobileImages : desktopImages;

    const handleToggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <>
            <Header />
            <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img loading='lazy' className="w-full object-contain" src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <div className='first' style={{ backgroundColor: "#f9f3e8", height:"100vh" }}>
            <div className="container-fluid mt-5 mb-5 max-w-3xl mx-auto p-2" style={{ backgroundColor: "#f9f3e8" }}>
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card" style={{ backgroundColor: "#f9f3e8", boxShadow: "none" }}>
                            <div className="card-body p-3">
                                <h4 className="form-heading mb-4 text-primary text-center mt-3">Reports</h4>
                                {faqs.map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        active={active}
                                        handleToggle={handleToggle}
                                        faq={faq}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <NewFooter/>
        </>
    );
};

export default Accordionweb;
