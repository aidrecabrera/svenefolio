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
    <div ref={ref} className=" duration-75 delay ease-in-out fixed hole w-36 h-36 border-radius-50 rounded-full backdrop-invert">
    </div>
  );
};

export default Cursor;
