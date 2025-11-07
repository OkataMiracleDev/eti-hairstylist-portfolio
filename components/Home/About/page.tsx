import React from "react";
import PhotoCollage from "./PhotoCollage/PhotoCollage";

const About = () => {
  return (
    <div data-aos="fade-up" className=" flex flex-col gap-8">
      <h1 className="text-xl md:text-3xl lg:text-5xl lg:text-center font-bold text-gray-900">
        About Me &amp; My Creation
      </h1>
      <div className="h-fit w-full px-2 lg:px-0 grid grid-rows-2 lg:grid-cols-2 gap-1 md:gap-3 lg:gap-1">
        <div className="flex flex-col gap-4 text-gray-700 text-base md:text-lg lg:text-xl">
          <p className="active:bg-purple-400 rounded-md p-2 transition-all duration-400">
            I’m <span className="font-semibold text-gray-900">Eti, </span> a{" "}
            <span className="text-gray-900">
              stylist, artist, and creative mind
            </span>{" "}
            who believes hair is one of the most expressive art forms. For me,
            styling isn’t just about appearance — it’s about{" "}
            <span className="font-semibold text-gray-900">
              identity, confidence, and storytelling.
            </span>{" "}
            Each strand, braid, and color choice becomes part of a visual
            language that celebrates individuality.
          </p>
          <p className="active:bg-purple-400 rounded-md p-2 transition-all duration-400">
            I specialize in{" "}
            <span className="font-semibold text-gray-900">
              braiding, plaiting, coloring, and grooming
            </span>{" "}
            , and I treat every look as a canvas where technique meets
            imagination. My process is rooted in curiosity and craftsmanship —
            blending structure with flow, precision with creativity, and trends
            with timeless artistry.
          </p>
          <p className="active:bg-purple-400 rounded-md p-2 transition-all duration-400">
            My inspiration comes from{" "}
            <span className="font-semibold text-gray-900">
              fashion, culture, and everyday beauty
            </span>{" "}
            — the way movement, texture, and light can transform how we feel
            about ourselves. I’m deeply drawn to exploring new styles,
            experimenting with color, and creating pieces that feel bold yet
            authentic.
          </p>
        </div>

        <PhotoCollage />
      </div>
    </div>
  );
};

export default About;
