import React, { useRef, useEffect } from 'react';

const BackgroundEffect = () => {
  const ref = useRef();

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove, {
      delay: 1000,
    });
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
      const divWidth = ref.current.offsetWidth;
      const divHeight = ref.current.offsetHeight;
      ref.current.style.left = clientX - divWidth / 2 + 'px';
      ref.current.style.top = clientY - divHeight / 2 + 'px';
  };

  return (
    // INSPIRATION!!! https://www.poppr.be/en
    <div ref={ref} className="hole w-[calc(100%*3)] h-[calc(100%*3)] rounded-full bg-gray-50">
      <div className=''></div>
    </div>
  );
};

export default BackgroundEffect;
