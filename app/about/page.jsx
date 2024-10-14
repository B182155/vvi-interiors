// pages/about.js
import React from "react";

const About = () => {
  return (
    <section className="bg-cover bg-center relative py-20 mt-10">
      <div className="container mx-auto px-4 text-left bg-white bg-opacity-80">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 font-sans1">
          About Us
        </h1>
        <h2 className="text-xl font-semibold mb-6 text-gray-800 font-sans1">
          Crafting Timeless Elegance
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-sans1">
          Welcome to VVI Designs, where the art of contemporary and modern
          luxury design converges to create spaces that are both refined and
          distinctive. As a premier international design atelier, we are
          committed to transforming interiors into captivating environments that
          blend sophistication with innovation.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-sans1">
          At VVI Designs, our passion lies in crafting bespoke experiences,
          tailored to reflect the unique tastes, lifestyles, and aspirations of
          our clients. Every project we undertake is a harmonious fusion of
          creativity and precision, ensuring that each design embodies a truly
          one-of-a-kind aesthetic.Our mission is simple yet powerful: to elevate
          interior design to an art form by delivering projects that stand as
          timeless expressions of elegance and individuality. Whether it's a
          sleek modern residence or a contemporary luxury space, our team brings
          unparalleled expertise, vision, and craftsmanship to every aspect of
          design and architecture.
        </p>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-sans1">
          Join us at VVI Designs, where your vision meets our artistry to craft
          extraordinary spaces that inspire.
        </p>

        <a
          href="/contact"
          className="inline-block rounded-md bg-gray-900 text-white py-2 px-3 hover:bg-gray-700 transition duration-300 text-sm font-sans1"
        >
          Get in Touch
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 border-t border-gray-100"></div>
    </section>
  );
};

export default About;
