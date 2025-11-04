import { ala } from "@/app/font";
import React from "react";
import About from "./About/page";
import Image from "next/image";
import HomeGallery from "./HomeGallery/HomeGallery";
import FlowerButton from "../flowerButton";
import Link from "next/link";

const Home = () => {
  return (
    <div className="pb-20 md:pt-30">
      <div className="flex flex-col space-y-10 md:space-y-15 lg:space-y-25">
        {/* Logo */}
        <div className="hidden md:block w-full h-[300px] ">
          <Image
            src={"/logo/logo-mobile.png"}
            width={2000}
            height={1000}
            alt="style-by.eti"
            className="w-full h-full object-contain"
          />{" "}
        </div>

        <About />
        <HomeGallery />
        <Link href="/" className="w-full mt-10 flex justify-center">
          <FlowerButton text="Gallery" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
