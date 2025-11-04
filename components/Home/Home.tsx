import { ala } from "@/app/font";
import React from "react";
import About from "./About/page";
import Image from "next/image";

const Home = () => {
  return (
    <div className="pb-20 lg:pt-30">
      <div className="flex flex-col space-y-10 md:space-y-15 lg:space-y-25">
        {/* Logo */}
        <div className="flex h-[100px] w-[50%] md:w-full md:h-[300px] ">
          <Image
            src={"/logo/logo-mobile.png"}
            width={2000}
            height={1000}
            alt="style-by.eti"
            className="hidden md:block w-full h-full object-contain"
          />{" "}
        </div>

        <About />
      </div>
    </div>
  );
};

export default Home;
