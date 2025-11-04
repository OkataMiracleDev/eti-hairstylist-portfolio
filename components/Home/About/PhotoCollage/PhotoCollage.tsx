import { bric } from "@/app/font";
import Image from "next/image";
import React from "react";

const PhotoCollage = () => {
  return (
    <div>
      <div className="h-full w-full flex flex-row relative">
        <div className="bg-gray-200 p-5 h-[380px] lg:h-[440px] w-[280px] lg:w-[320px] flex flex-col justify-center items-center rotate-12 active:-rotate-5 lg:hover:-rotate-5 active:scale-104 lg:hover:scale-104 transition-all duration-500 shadow-2xl shadow-gray-400">
          <Image
            src="/eti/eti-1.jpg"
            alt="eti"
            width={1000}
            height={1000}
            className="h-full w-full object-cover object-center rounded block"
          />
          <h1 className={`${bric.className} font-semibold text-gray-900`}>
            I am Eti
          </h1>
        </div>
        <div className="bg-gray-200 p-5 h-[380px] lg:h-[440px] w-[280px] lg:w-[320px] flex flex-col justify-center items-center -rotate-12 active:rotate-5 lg:hover:rotate-5 active:scale-104 lg:hover:scale-104 transition-all duration-500 absolute right-0 mt-90 md:mt-2 shadow-2xl shadow-gray-400">
          <div className="w-full h-full absolute"></div>
          <Image
            src="/eti/eti-2.jpg"
            alt="eti"
            width={1000}
            height={1000}
            className="h-full w-full object-cover object-center rounded block"
          />
          <h1 className={`${bric.className} font-semibold text-gray-900`}>
            style-by.Eti
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PhotoCollage;
