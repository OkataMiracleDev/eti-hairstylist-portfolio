"use client";

import { bric } from "@/app/font";
import { homeData } from "@/data/data";
import Image from "next/image";
import React from "react";

interface CollageProps {
  image?: string;
  title?: string;
}

export default function Collage({ image, title }: CollageProps) {
  return (
    <div>
      <div className="bg-gray-300 p-3 lg:h-[270px] lg:w-[200px] flex flex-col justify-center items-center active:scale-106 lg:hover:scale-104 transition-all duration-500 drop-shadow-xl drop-shadow-gray-400">
        <Image
          src={image || homeData.defaultImage}
          alt={title || homeData.title}
          width={1000}
          height={1000}
          className="h-full w-full object-contain object-center rounded block"
        />
        <h1 className={`${bric.className} font-semibold text-gray-900`}>
          {title || homeData.title}
        </h1>
      </div>
    </div>
  );
}
