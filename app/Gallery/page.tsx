import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse the Style by Eti gallery — a curated selection of expressive hair designs: braids, plaits, color, and grooming.",
  alternates: { canonical: "/Gallery" },
  openGraph: {
    title: "Gallery | Style by Eti",
    description: "A curated selection of expressive hair designs by Eti.",
    url: "https://style-by-eti.vercel.app/Gallery",
    images: [
      { url: "/ig-page.jpg", width: 1200, height: 630, alt: "Style by Eti gallery preview" },
    ],
  },
};

const Gallery = () => {
  return (
    <div className="relative w-full overflow-x-hidden px-5 md:px-20">
      <div className="pt-30 w-full flex flex-col gap-5 justify-center items-center">
        <h1 className="text-xl md:text-3xl lg:text-5xl lg:text-center font-bold text-gray-900">
          Gallery
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-600">
          Here you can see a selection of my work.
        </p>

        <div className="md:mt-4 w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-1">
          <div className="bg-black w-full h-80 overflow-hidden relative">
            <Image
              src="/hair/hair-1.jpg"
              alt="Braided hairstyle close-up 1"
              width={500}
              height={500}
              className="w-full h-full object-cover block active:scale-120 hover:scale-120 transition-all duration-500"
            />
            <div className="w-full h-full absolute pointer-events-none"></div>
          </div>
          <div className="bg-black w-full h-110 overflow-hidden relative">
            <Image
              src="/hair/hair-3.jpg"
              alt="Textured hairstyle artistic shot 2"
              width={500}
              height={500}
              className="w-full h-full object-cover object-bottom block active:scale-120 hover:scale-120 transition-all duration-500"
            />
            <div className="w-full h-full absolute pointer-events-none"></div>
          </div>
          <div className="bg-black w-full h-65 overflow-hidden relative">
            <Image
              src="/hair/hair-2.jpg"
              alt="Plaited hairstyle portrait 3"
              width={500}
              height={500}
              className="w-full h-full object-cover object-center lg:object-top block active:scale-120 hover:scale-120 transition-all duration-500"
            />
            <div className="w-full h-full absolute pointer-events-none"></div>
          </div>
          <div className="bg-black md:-mt-30 w-full h-80 overflow-hidden relative">
            <Image
              src="/hair/hair-4.jpg"
              alt="Color-treated hairstyle detail 4"
              width={500}
              height={500}
              className="w-full h-full object-cover object-center block active:scale-120 hover:scale-120 transition-all duration-500"
            />
            <div className="w-full h-full absolute pointer-events-none"></div>
          </div>
          <div className="bg-black w-full h-70 overflow-hidden relative">
            <Image
              src="/hair/hair-7.jpg"
              alt="Groomed hairstyle lookbook 5"
              width={500}
              height={500}
              className="w-full h-full object-cover object-center block active:scale-120 hover:scale-120 transition-all duration-500"
            />
            <div className="w-full h-full absolute pointer-events-none"></div>
          </div>
          <div className="bg-black md:-mt-45 w-full h-100 overflow-hidden relative">
            <Image
              src="/hair/hair-6.jpg"
              alt="Creative hairstyle composition 6"
              width={500}
              height={500}
              className="w-full h-full object-cover object-center block active:scale-120 hover:scale-120 transition-all duration-500"
            />
            <div className="w-full h-full absolute pointer-events-none"></div>
          </div>
          <div className="bg-black md:hidden w-full h-65 overflow-hidden relative">
            <Image
              src="/hair/hair-8.jpg"
              alt="Editorial hairstyle wide shot 8"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top block active:scale-120 hover:scale-120 transition-all duration-500"
            />
            <div className="w-full h-full absolute pointer-events-none"></div>
          </div>
        </div>
        <div className="bg-black hidden md:flex md:-mt-4 w-full h-80 overflow-hidden relative">
          <Image
            src="/hair/hair-8.jpg"
            alt="Editorial hairstyle wide shot 8"
            width={500}
            height={500}
            className="w-full h-full object-cover object-top block active:scale-120 hover:scale-120 transition-all duration-500"
          />
          <div className="w-full h-full absolute pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
