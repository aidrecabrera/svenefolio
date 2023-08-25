import React, { useState } from 'react';

const TextHover = () => {
  const [fontWeight, setFontWeight] = useState(900);

  const handleMouseEnter = () => {
    const start = 100;
    const end = 900;
  
    for (let i = start; i <= end; i++) {
      setFontWeight(i);
      console.log(i)
    }
  };

  const handleMouseLeave = () => {
    const start = 900;
    const end = 100;
    for (let i = start; i >= end; i--) {
        setFontWeight(i);
        console.log(i)
      }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <h1
        className={`text-lg transition font-roboto text-10xl font-[${fontWeight}]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover me!
      </h1>
    </div>
  );
};

export default TextHover;

