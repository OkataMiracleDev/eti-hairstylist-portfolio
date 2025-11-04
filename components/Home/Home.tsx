"use client";

import { ala } from "@/app/font";
import React, { useEffect } from "react";
import About from "./About/page";
import Image from "next/image";
import HomeGallery from "./HomeGallery/HomeGallery";
import FlowerButton from "../flowerButton";
import Link from "next/link";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 500,
        easing: "ease-in-out",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="mt-20 md:mt-30 lg:-mt-10">
      <div className="flex flex-col space-y-10 md:space-y-15 lg:space-y-25">
        {/* Logo */}
        <div className="hidden md:block w-full h-[300px] ">
          <Image
            src={"/logo/logo-mobile.png"}
            width={500}
            height={500}
            alt="style-by.eti"
            className="w-full h-full object-contain"
          />
        </div>

        <About />
        <HomeGallery />
        <Link href="/" className="w-full mt-10 flex justify-center">
          <FlowerButton text="View More" />
        </Link>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
