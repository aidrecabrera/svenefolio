import { useEffect, useState } from "react";

const fields = ["TECHNOLOGY.", "RESEARCH.", "WRITING.", "COMPUTER SCIENCE"];

const MyFields = () => {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [writingEffect, setWritingEffect] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFieldIndex((prevIndex) => (prevIndex + 1) % fields.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const field = fields[currentFieldIndex];
    let writtenText = "";

    const writingInterval = setInterval(() => {
      writtenText = field.substring(0, writtenText.length + 1);
      setWritingEffect(writtenText);

      if (writtenText === field) {
        clearInterval(writingInterval);
        setTimeout(() => {
          setShowCursor(false);
        }, 500);
      }
    }, 100);

    return () => clearInterval(writingInterval);
  }, [currentFieldIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div>
      <p className="font-inter font-normal text-2xl leading-2 tracking-tight">
        I am an <span className="text-red-700">autodidact</span> with
        <br /> a passion in fields such as
        <br />{" "}
        <span className="text-red-700 font-black text-3xl tracking-normal">
          {writingEffect}
          {showCursor && <span className="cursor">|</span>}
        </span>
      </p>
    </div>
  );
};

export default MyFields;
