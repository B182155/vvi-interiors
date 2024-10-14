"use client";
import React from "react";
import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper"; // Import directly from 'swiper'

import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination styles
// import "swiper/css/autoplay"; // Autoplay styles if needed (not required, but good to import)

import Image from "next/image";
import Link from "next/link"; // Import Link for Next.js navigation

const Hero = ({ images }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        pagination={{ clickable: true }} // Enable clickable pagination
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay configuration
        spaceBetween={30}
        slidesPerView={1}
        loop={true} // Loop through the slides continuously
        className="h-full"
        // onSlideChange={() => console.log("Slide changed")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <Image
                src={image}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 ease-out"
                priority={index === 0} // Ensure the first image loads with priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/25 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-4xl font-sans1 font-semibold z-10 pointer-events-none mt-52 ml-5">
        <span>
          Discover your <span className="font-playwrite">living</span> space.
        </span>
        <Link href="/contact">
          <div className="mt-4 px-2 py-1 rounded-md bg-black/50 text-white text-xs hover:text-black hover:bg-white/50 border border-white/50 pointer-events-auto transition-all duration-1000">
            Get in Touch
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
