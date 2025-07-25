"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonialImages } from "./config";
import { TitleH2 } from "@/components/ui";

export default function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(3);

  return (
    <section
      id="testimonials"
      className="p-4 xl:px-28 md:p-12 pt-24 md:pt-40 pb-30 md:pb-60 xl:pb-100 flex flex-col gap-12 md:gap-32"
    >
      <TitleH2 title="Testimonials" />
      <div className="flex flex-col gap-4 md:gap-10 items-center max-w-[1100px] mx-auto">
        <p className="text-main-text text-[18px] sm:text-[24px] md:text-[32px] xl:text-[36px] text-center italic">
          Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus
          auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Aliquam nec ex aliquet.
        </p>
        <p className="text-purple-text text-[18px] sm:text-[24px] md:text-[32px] xl:text-[36px] text-center">
          Jihan Doe - Co Founder Luxi Theme
        </p>
      </div>

      {/* Avatars */}

      <div className="flex justify-center items-center gap-2 sm:gap-6 xl:gap-10 mt-10 ">
        {testimonialImages.map((src, index) => (
          <div
            key={index}
            className={`transition-transform duration-300 rounded-full border-[4px] border-white z-10 cursor-pointer ${
              hoveredIndex === index ? "scale-125" : "scale-100"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={src}
              alt={`Testimonial ${index + 1}`}
              width={100}
              height={100}
              className="rounded-full object-cover w-[70px] sm:w-[120px] xl:w-[170px] aspect-square"
            />
          </div>
        ))}
      </div>

      {/* Waves Decoration */}
      <div
        className="absolute bottom-[-20%] right-0  pointer-events-none 
  w-[100%] h-[100%]
  
"
      >
        {/* First layer */}
        <Image
          src="/TestimonialsWaveBottom.svg"
          alt="TestimonialsWaveBottom"
          width={300}
          height={300}
          className="absolute top-0 right-0 w-full h-full z-1"
        />
        {/* Second layer */}
        <Image
          src="/TestimonialsWaveTop.svg"
          alt="TestimonialsWaveTop"
          width={300}
          height={300}
          className="absolute top-4 right-0 w-full h-full opacity-80 z-2"
        />
      </div>
    </section>
  );
}
