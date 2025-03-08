import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid",
    title: "Smart Preventive Healthcare",
    // description: "Early Detection & Personalised Care",
    buttonText: "Enquire Now", // Dynamic Button Text
    path: "/healthcare",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid",
    title: "Personalised Health Consultation",
    // description: "Health Consultation at your fingertips",
    buttonText: "Enquire Now", // Dynamic Button Text
    path: "/healthcare",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/portrait-biologist-scientist-white-coat-working-expertise-laboratory-looking-into-microscope-analyzing-organic-gmo-leaf_482257-2118.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid",
    title: "Science-Backed Nutrition",
    // description: "Short product description",
    buttonText: "Order Now", // Dynamic Button Text
    path: "https://aayushlife.com/",
  },
  {
    id: 4,
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-03-08_at_3.53.38_PM.jpg?v=1741430393",
    title: "Herbal Tobacco Alternative",
    // description: "Another product description",
    buttonText: "Order Now", // Dynamic Button Text
    path: "http://aayushveda.in/",
  },
];

const ImageSlider = () => {
  const navigate = useNavigate();
  

  const handleRedirect = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank"); // Open external links in a new tab
    } else {
      navigate(path); // Navigate within the React app
    }
  };

  return (
    <div className="relative bottom-4 w-[331px]">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
           <div className="flex bg-white/10 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden md:w-[331px] w-[100%] h-[145px] p-3">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-1/3 !pt-0 h-full object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between ml-3 w-2/3">
                <div>
                  <h3 className="text-lg !text-[#ffebc4]  w-[80%]">
                    {slide.title}
                  </h3>
                  {/* <p className="text-sm text-[#ffebc4]">{slide.description}</p> */}
                </div>
                {/* Buy Now Button with Click Event */}
                <button
                  onClick={() => handleRedirect(slide.path)}
                  className="border-4  whitespace-nowrap  uppercase border-blue-500 bg-transparent text-[#ffebc4] text-lg py-1 px-3 rounded-lg w-fit flex items-center justify-center transition-all duration-300 hover:bg-[#ffebc4] hover:text-black"
                  style={{ border: "1px solid #ffebc4", height: "28px", fontSize: "14px" }}
                >
                 {slide.buttonText}
                </button>
              </div>
              {/* Card Number on Top-Right */}
              <span className="absolute top-2 right-2 text-[#ffebc4] text-sm  px-2 py-1 rounded-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation & Pagination */}
      <div className="flex flex-col items-center mt-2">
        <div className="flex items-center gap-4">
          <button className="custom-prev bg-[#ffebc4] hover:bg-[#ffebc4] p-2 rounded-full">
            <ChevronLeft size={20} />
          </button>

          <div className="custom-pagination flex gap-1 [&>.swiper-pagination-bullet]:bg-white [&>.swiper-pagination-bullet-active]:bg-white"></div>

          <button className="custom-next bg-[#ffebc4] hover:bg-[#ffebc4] p-2 rounded-full">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
