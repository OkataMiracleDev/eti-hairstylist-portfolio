import { bric } from "@/app/font";
import Collage from "@/components/Collage/Collage";
import Image from "next/image";
import React from "react";

const HomeGallery = () => {
  return (
    <div className="mt-20 md:mt-30 lg:-mt-180 flex flex-col items-center">
      <div className="w-[120%] h-300 relative hidden lg:flex flex-col ">
        <Image
          src={"/svg/line-pc.svg"}
          alt="gallery-line"
          width={2000}
          height={2000}
          className="w-full h-full object-contain"
        />
        <div className="absolute top-65 left-150 hover:rotate-12 transition-all duration-500 rotate-6">
          <Collage title="#1" image="/hair/hair-1.jpg" />
        </div>
        <div className="absolute top-50 left-5 hover:-rotate-12 transition-all duration-500 rotate-20">
          <Collage title="#2" image="/hair/hair-2.jpg" />
        </div>
        <div className="absolute top-35 right-69 hover:rotate-6 transition-all duration-500 rotate-20">
          <Collage title="#3" image="/hair/hair-3.jpg" />
        </div>
        <div className="absolute top-140 right-105 hover:-rotate-12 transition-all duration-500 rotate-6">
          <Collage title="#4" image="/hair/hair-4.jpg" />
        </div>
        <div className="absolute top-145 left-42 hover:rotate-6 transition-all duration-500 -rotate-16">
          <Collage title="#5" image="/hair/hair-5.jpg" />
        </div>
        <div className="absolute top-80 right-15 hover:rotate-12 transition-all duration-500 -rotate-20">
          <Collage title="#6" image="/hair/hair-6.jpg" />
        </div>
        <div className="absolute top-215 right-72 hover:rotate-6 transition-all duration-500 -rotate-16">
          <Collage title="#7" image="/hair/hair-7.jpg" />
        </div>
        <div className="absolute top-235 left-72 hover:-rotate-6 transition-all duration-500 rotate-16">
          <Collage title="#8" image="/hair/hair-8.jpg" />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
