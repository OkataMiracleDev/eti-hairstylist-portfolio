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
    <div data-aos="fade-up">
      <div className="bg-gray-100 p-3 h-[180px] md:h-[200px] w-[130px] md:w-[150px] lg:h-[270px] lg:w-[200px] flex flex-col justify-center items-center active:scale-106 lg:hover:scale-104 transition-all duration-500 shadow-xl shadow-gray-500">
        <div className="w-full h-full absolute"></div>
        <Image
          src={image || homeData.defaultImage}
          alt={title || homeData.title}
          width={500}
          height={500}
          className="h-full w-full object-contain object-center rounded block"
        />
        <h1 className={`${bric.className} font-semibold text-gray-900`}>
          {title || homeData.title}
        </h1>
      </div>
    </div>
  );
}
