"use client";
import "../app/globals.css";

const Dot = ({
  color,
  activeWatchImage,
  setActiveWatchImage,
  relatedImage,
}) => {
  return (
    <div
      onClick={() => setActiveWatchImage(relatedImage)}
      style={{ backgroundColor: color }}
      className={`cursor-pointer w-10 h-10 rounded-full ${
        activeWatchImage === relatedImage
          ? "border-3 border-white shadow-iwatch"
          : ""
      }`}
    ></div>
  );
};

export default Dot;
