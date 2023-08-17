import React, { useRef, useEffect } from 'react';

const BackgroundEffect = () => {
  const ref = useRef();

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const divWidth = ref.current.offsetWidth;
    const divHeight = ref.current.offsetHeight;
    ref.current.style.left = clientX - divWidth / 2 + 'px';
    ref.current.style.top = clientY - divHeight / 2 + 'px';
  };
  

  return (
    <div ref={ref} className="hole fixed w-[calc(100%*3)] h-[calc(100%*3)] rounded-full bg-gray-50 ">
    </div>
  );
};

export default BackgroundEffect;
