import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="relative w-full overflow-y-auto overflow-x-hidden px-5 md:px-20">
      <div className="pt-30 w-full flex flex-col md:gap-5 gap-10 justify-center items-center">
        <h1 className="text-xl md:text-3xl lg:text-5xl lg:text-center font-bold text-gray-900">
          Gallery
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Here you can see a selection of my work.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-1">
          <div className="bg-black w-full h-80">
            <Image
              src="/hair/hair-1.jpg"
              alt="1"
              width={2000}
              height={2000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-black w-full h-110">1</div>
          <div className="bg-black w-full h-65">1</div>
          <div className="bg-black md:-mt-30 w-full h-80">1</div>
          <div className="bg-black w-full h-70">1</div>
          <div className="bg-black md:-mt-45 w-full h-100">1</div>
          <div className="bg-black md:hidden w-full h-65">1</div>
        </div>
        <div className="bg-black hidden md:flex md:-mt-4 w-full h-80">1</div>
      </div>
    </div>
  );
};

export default Gallery;
