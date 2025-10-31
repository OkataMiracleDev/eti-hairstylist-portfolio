import { ala } from "@/app/font";
import React from "react";
import About from "./About/page";

const Home = () => {
  return (
    <div className="pt-20 md:pt-30">
      <div className="flex flex-col space-y-10 md:space-y-15 lg:space-y-25">
        <h1
          className={`${ala.className} text-3xl md:text-5xl lg:text-7xl lg:text-center font-bold text-gray-700 underline underline-offset-2 md:underline-offset-10`}
        >
          style-by.Eti
        </h1>

        <About />
      </div>
    </div>
  );
};

export default Home;
