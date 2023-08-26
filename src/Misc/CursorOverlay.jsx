import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    const links = document.querySelectorAll("a"); // Select all links

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursorRef.current.style.backgroundColor = "red"; // Change cursor color on link hover
      });

      link.addEventListener("mouseleave", () => {
        cursorRef.current.style.backgroundColor = "initial"; // Reset cursor color when leaving link
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const divWidth = cursorRef.current.offsetWidth;
    const divHeight = cursorRef.current.offsetHeight;
    cursorRef.current.style.left = clientX - divWidth / 2 + "px";
    cursorRef.current.style.top = clientY - divHeight / 2 + "px";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{
        opacity: 1,
      }}
      ref={cursorRef}
      className="duration-300 ease-out fixed cursor w-20 h-20 border-radius-50 rounded-full backdrop-invert pointer-events-none"
    ></motion.div>
  );
};

export default Cursor;
