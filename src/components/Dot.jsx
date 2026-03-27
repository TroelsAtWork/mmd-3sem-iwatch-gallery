"use client";
import "../app/globals.css";

const Dot = ({
  color,
  activeWatchImage,
  setActiveWatchImage,
  relatedWatchImage,
}) => {
  return (
    <div
      onClick={() => setActiveWatchImage(relatedWatchImage)}
      style={{ backgroundColor: `var(--${color})` }}
      // className="cursor-pointer w-10 h-10 rounded-full"
      className={`cursor-pointer w-10 h-10 rounded-full ${
        activeWatchImage === relatedWatchImage ? "border-3" : ""
      }`}
    ></div>
  );
};

export default Dot;
