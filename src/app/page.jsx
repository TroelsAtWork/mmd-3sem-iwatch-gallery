"use client";
import Image from "next/image";
import Thumbnail from "@/components/Thumbnail";
import Dot from "@/components/Dot";
import { useState } from "react";

// css
import "./globals.css";

export default function Home() {
  const [activeWatch, setActiveWatch] = useState("/mint.png");
  return (
    <main className="w-150 grid grid-cols-[486px_100px] grid-rows-[486px_fit]">
      <figure>
        <Image src={activeWatch} alt="" width={500} height={500} />
      </figure>
      <div className="flex flex-col gap-5 justify-center">
        <Dot color="#6addcc" relatedImage="/mint.png" />
        <Dot color="#434558" relatedImage="/navy.png" />
        <Dot color="#b6ccda" relatedImage="/ocean.png" />
      </div>
      <div className="flex justify-evenly">
        <Thumbnail setActiveWatch={setActiveWatch} imgsrc="/mint.png" />
        <Thumbnail setActiveWatch={setActiveWatch} imgsrc="/navy.png" />
        <Thumbnail setActiveWatch={setActiveWatch} imgsrc="/ocean.png" />
      </div>
    </main>
  );
}
