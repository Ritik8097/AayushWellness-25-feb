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
          src="https://img.freepik.com/free-photo/healthy-young-asian-runner-woman-warm-up-body-stretching-before-exercise_7861-1084.jpg?t=st=1740549773~exp=1740553373~hmac=927706fb364df1f465e61a4d1c89b4d72d65fc55f57b35ee59862a698431aa68&w=1060"
          alt="Be Relax Spa Philadelphia"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Asection2;
