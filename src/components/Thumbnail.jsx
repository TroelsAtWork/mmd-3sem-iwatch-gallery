"use client";
import Image from "next/image";

const Figure = ({ imgsrc, setActiveWatch }) => {
  return (
    <figure>
      <Image
        onClick={() => setActiveWatch(imgsrc)}
        src={imgsrc}
        alt=""
        width="500"
        height="500"
        className="w-35 cursor-pointer"
      />
    </figure>
  );
};

export default Figure;
