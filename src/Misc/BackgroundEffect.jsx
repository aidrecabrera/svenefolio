import React, { useRef, useEffect } from 'react';

const Cursor = () => {
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
    <div ref={ref} className="fixed w-1/4 h-1/2 border-radius-50 bg-white rounded-full">
    </div>
  );
};

export default Cursor;
