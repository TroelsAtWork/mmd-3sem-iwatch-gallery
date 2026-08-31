"use client";
import "../app/globals.css";

const Dot = ({ color, relatedImage, activeImage, setActiveImage }) => {
  return (
    <div
      onClick={() => setActiveImage(relatedImage)}
      style={{ backgroundColor: color }}
      className={`cursor-pointer w-10 h-10 rounded-full ${relatedImage == activeImage && "myborder"}`}
    ></div>
  );
};

export default Dot;
