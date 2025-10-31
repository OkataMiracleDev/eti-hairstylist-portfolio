import React from "react";
import PhotoCollage from "./PhotoCollage/PhotoCollage";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-xl md:text-3xl lg:text-5xl lg:text-center font-bold text-gray-900">
        About Me &amp; My Creation
      </h1>
      <div className="h-fit w-[full] px-2 lg:px-0 grid grid-rows-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-2">
        <div className="flex flex-col gap-4 text-gray-700 text-base md:text-lg lg:text-xl">
          <p>
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
          <p>
            I specialize in{" "}
            <span className="font-semibold text-gray-900">
              braiding, plaiting, coloring, and grooming
            </span>{" "}
            , and I treat every look as a canvas where technique meets
            imagination. My process is rooted in curiosity and craftsmanship —
            blending structure with flow, precision with creativity, and trends
            with timeless artistry.
          </p>
          <p>
            My inspiration comes from{" "}
            <span className="font-semibold text-gray-900">
              fashion, culture, and everyday beauty
            </span>{" "}
            — the way movement, texture, and light can transform how we feel
            about ourselves. I’m deeply drawn to exploring new styles,
            experimenting with color, and creating pieces that feel bold yet
            authentic.
          </p>
          <p>
            Every client is a new opportunity to create something meaningful — a
            look that reflects their personality and vision. Explore my
            <span className="font-semibold text-gray-900">gallery</span> to see
            my creative journey and past transformations, and feel free to reach
            out for{" "}
            <span className="font-semibold text-gray-900">
              gigs, collaborations, or styling sessions
            </span>
            .
          </p>
        </div>

        <PhotoCollage />
      </div>
    </div>
  );
};

export default About;
