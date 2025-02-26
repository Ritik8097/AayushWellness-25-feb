
import React from "react";
import { motion } from "framer-motion";

const Asection1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center px-4 pt-40 text-center max-w-[1200px] mx-auto"
    >
      {/* Title: "Our Story" */}
      <h1 
        className="text-[56px] md:text-[90px] leading-[100%] text-[#13233b] mb-8" 
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Our Story
      </h1>

      {/* Story Content */}
      <div className="text-[18px] md:text-[20px] leading-[155%] text-[#3a4458] max-w-[800px]">
        <p className="font-[18px]">
          <span className="font-bold text-black">Bringing the Future of Wellness to You</span>
          <br />
          At <strong className="font-semibold text-black">Aayush Wellness,</strong> we believe that <strong className="font-bold text-black">health is not just about curing
          illness—it’s about preventing it, enhancing it, and making wellness a
          way of life.</strong>
        </p>
        <br />
        <p>
          With a deep-rooted commitment to <strong className="font-semibold text-black">science-backed innovation and natural
          health solutions</strong>, we are redefining the <strong className="font-bold text-black">wellness
          experience</strong>—integrating <strong className="font-semibold text-black">nutraceuticals, personalized healthcare,
          preventive wellness</strong>, and digital health solutions to create a seamless
          journey toward <strong className="font-semibold text-black">better living.</strong>
        </p>
      </div>
    </motion.div>
  );
};

export default Asection1;

