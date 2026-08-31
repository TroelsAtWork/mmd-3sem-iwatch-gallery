"use client";
import Image from "next/image";
import ThumbNailWrapper from "@/components/ThumbnailWrapper";
import Dot from "@/components/Dot";
import { useState } from "react";
// css
import "./globals.css";

export default function Home() {
  const [activeImage, setActiveImage] = useState("/navy.png");

  return (
    <main className="w-150 grid grid-cols-[486px_100px] grid-rows-[486px_fit]">
      <figure>
        <Image src={activeImage} alt="" width={500} height={500} />
      </figure>
      <div className="flex flex-col gap-5 justify-center">
        <Dot
          color="#6addcc"
          relatedImage="/mint.png"
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
        <Dot
          color="#434558"
          relatedImage="/navy.png"
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
        <Dot
          color="#b6ccda"
          relatedImage="/ocean.png"
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
      </div>
      <div className="flex justify-evenly">
        <ThumbNailWrapper setActiveImage={setActiveImage} />
      </div>
    </main>
  );
}
