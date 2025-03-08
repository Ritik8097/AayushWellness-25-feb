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
    description: "Early Detection & Personalised Care",
    path: "/healthcare",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid",
    title: "Personalised Health Consultation",
    description: "Health Consultation at your fingertips",
    path: "/healthcare",
  },
  {
    id: 3,
    image: "https://pikaso.cdnpk.net/public/media/tti-examples/42.jpg",
    title: "Product 3",
    description: "Short product description",
    path: "/product3",
  },
  {
    id: 4,
    image: "https://pikaso.cdnpk.net/public/media/tti-examples/07.jpg",
    title: "Product 4",
    description: "Another product description",
    path: "/product4",
  },
];

const ImageSlider = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="relative bottom-4 left-4 w-[331px]">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="flex bg-white/10 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden w-[331px] h-[154px] p-3">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-1/3 !pt-0 h-full object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between ml-3 w-2/3">
                <div>
                  <h3 className="text-lg !text-[#ffebc4] font-bold">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-[#ffebc4]">{slide.description}</p>
                </div>
                {/* Buy Now Button with Click Event */}
                <button
                  onClick={() => handleRedirect(slide.path)}
                  className="border-4 border-blue-500 bg-transparent text-[#ffebc4] text-xl py-1 px-3 rounded-lg w-fit transition-all duration-300 hover:bg-[#ffebc4] hover:text-black"
                  style={{ border: "1px solid #ffebc4" }}
                >
                  Enquire Now
                </button>
              </div>
              {/* Card Number on Top-Right */}
              <span className="absolute top-2 right-2 text-[#ffebc4] text-xl font-bold px-2 py-1 rounded-lg">
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
