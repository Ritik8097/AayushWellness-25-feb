import React from "react";
import { motion } from "framer-motion";

const Asection2 = () => {
  return (
    <div className="w-full flex justify-center">
      {/* Image Background Container with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden and move up
        animate={{ opacity: 1, y: 0 }} // Fade in and move to position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
        className="w-[368px] h-[196px] md:w-[80vw] md:h-[29.5vw] max-w-[80vw] rounded-[48px] overflow-hidden mt-[40px] mx-auto"
      >
        {/* Image inside the container */}
        <img
          src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/woman-8180786_1920.png?v=1740572847"
          alt="Be Relax Spa Philadelphia"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Asection2;
