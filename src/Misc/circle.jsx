import React, { useState } from "react";
import { motion } from "framer-motion";

const CircleAnimation = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#FFFFFF", "#33FFA8"];

  const circleVariants = {
    initial: { opacity: 0.1 },
    animate: {
      opacity: 0.5,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const handleColorChange = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div>
      <motion.div
        variants={circleVariants}
        initial="initial"
        animate="animate"
        style={{
          width: "1000px",
          height: "1000px",
          borderRadius: "50%",
          background: colors[colorIndex],
          filter: "blur(250px)",
        }}
        onAnimationComplete={handleColorChange}
      />
    </div>
  );
};

export default CircleAnimation;
