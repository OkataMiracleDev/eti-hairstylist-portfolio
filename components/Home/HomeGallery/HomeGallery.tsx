import { bric } from "@/app/font";
import Collage from "@/components/Collage/Collage";
import Image from "next/image";
import React from "react";

const HomeGallery = () => {
  return (
    <div
      data-aos="fade-up"
      className="md:mt-10 lg:-mt-180 flex flex-col items-center"
    >
      <div className="w-[120%] h-300 relative hidden lg:flex flex-col ">
        <div className="w-full h-full absolute"></div>
        <Image
          src={"/svg/line-pc.svg"}
          alt="gallery-line"
          width={500}
          height={500}
          className="w-full h-full object-contain -z-10"
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
      <div className="w-[160%] h-300 relative lg:hidden flex flex-col ">
        <div className="w-full h-full absolute"></div>
        <Image
          src={"/svg/line-mobile.svg"}
          alt="gallery-line"
          width={500}
          height={500}
          className="w-full h-full object-contain -z-10"
        />
        <div className="absolute right-20 md:right-60 top-43 md:top-26 active:rotate-12 transition-all duration-500 rotate-6">
          <Collage title="#1" image="/hair/hair-1.jpg" />
        </div>
        <div className="absolute left-10 md:left-55 top-63 md:top-66 active:-rotate-12 transition-all duration-500 rotate-20">
          <Collage title="#2" image="/hair/hair-2.jpg" />
        </div>
        <div className="absolute right-10 md:right-40 top-93 md:top-106 active:rotate-6 transition-all duration-500 rotate-20">
          <Collage title="#3" image="/hair/hair-3.jpg" />
        </div>
        <div className="absolute left-50 md:left-95 top-135 md:top-130 active:rotate-12 transition-all duration-500 -rotate-6 z-20">
          <Collage title="#4" image="/hair/hair-4.jpg" />
        </div>
        <div className="absolute right-20 md:right-65 top-170 md:top-200 active:rotate-6 transition-all duration-500 rotate-16">
          <Collage title="#5" image="/hair/hair-5.jpg" />
        </div>
        <div className="absolute left-20 md:left-35 top-175 md:top-160 active:-rotate-6 transition-all duration-500 rotate-8 z-10">
          <Collage title="#6" image="/hair/hair-6.jpg" />
        </div>
        <div className="absolute left-10 md:left-40 top-225 md:top-235 active:rotate-6 transition-all duration-500 -rotate-16">
          <Collage title="#7" image="/hair/hair-7.jpg" />
        </div>
        <div className="absolute right-20 md:right-50 top-255 md:top-275 active:-rotate-6 transition-all duration-500 rotate-16">
          <Collage title="#8" image="/hair/hair-8.jpg" />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
