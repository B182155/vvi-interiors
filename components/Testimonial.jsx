"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aadhya Reddy",
    rating: 5,
    comment:
      "VVI Designs transformed my home into a beautiful sanctuary. Their attention to detail and personalized approach made the entire experience enjoyable. I highly recommend their services for anyone looking to elevate their space!",
  },
  {
    id: 2,
    name: "Sai Teja",
    rating: 4,
    comment:
      "I am absolutely delighted with my new living room! VVI Designs captured my style perfectly while ensuring the space remains functional. Their team was professional and attentive throughout the process.",
  },
  {
    id: 3,
    name: "Nandini Kumar",
    rating: 5,
    comment:
      "Working with VVI Designs was a fantastic experience! They brought my vision to life, creating a vibrant workspace that inspires creativity. Their expertise in interior design truly shines through in every detail.",
  },
  {
    id: 4,
    name: "Rajeshwari Goud",
    rating: 4,
    comment:
      "VVI Designs has an incredible talent for understanding their clients’ needs. They transformed my dull bedroom into a cozy retreat that I adore. I couldn’t be happier with the outcome!",
  },
  {
    id: 5,
    name: "Karthik Varma",
    rating: 5,
    comment:
      "The team at VVI Designs exceeded my expectations! They revitalized my entire home with elegance and functionality. Every room feels inviting and uniquely styled. Highly recommend their services!",
  },
  {
    id: 6,
    name: "Harika Nair",
    rating: 4,
    comment:
      "I loved working with VVI Designs! They were attentive to my ideas and transformed my office space into a sleek and professional environment. Their attention to detail made a significant difference.",
  },
  {
    id: 7,
    name: "Srinivas Reddy",
    rating: 5,
    comment:
      "VVI Designs completely transformed my apartment into a stylish haven. Their innovative ideas and understanding of modern aesthetics were impressive. I am thrilled with the final result!",
  },
  {
    id: 8,
    name: "Lakshmi Prasad",
    rating: 4,
    comment:
      "The professionalism and creativity of VVI Designs are commendable. They created a beautiful outdoor space for my home that is perfect for entertaining. I am grateful for their hard work!",
  },
  {
    id: 9,
    name: "Chaitanya Reddy",
    rating: 5,
    comment:
      "I can’t thank VVI Designs enough for my stunning new kitchen! They listened to my ideas and turned them into reality with style and functionality. Every detail was carefully considered, and I love cooking in this space now!",
  },
  {
    id: 10,
    name: "Anjali Yadav",
    rating: 4,
    comment:
      "VVI Designs did an amazing job renovating my workspace. Their design ideas increased productivity and created a more enjoyable atmosphere. I appreciate their dedication to my project!",
  },
  {
    id: 11,
    name: "Anaya Singh",
    rating: 5,
    comment:
      "The team at VVI Designs exceeded my expectations! They revitalized my entire home with elegance and functionality. Every room feels inviting and uniquely styled. Highly recommend their services!",
  },
  {
    id: 12,
    name: "Karan Gupta",
    rating: 4,
    comment:
      "I loved working with VVI Designs! They were attentive to my ideas and transformed my office space into a sleek and professional environment. Their attention to detail made a significant difference.",
  },
];

const Testimonial = ({ testimonial }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 mx-4 mb-8 md:mb-0">
    <div className="text-lg font-semibold mb-2">{testimonial.name}</div>
    <div className="text-gray-600 mb-4">{testimonial.comment}</div>
    <div className="flex items-center">
      {[...Array(testimonial.rating)].map((_, index) => (
        <FaStar
          key={index}
          className="w-5 h-5 fill-current text-yellow-400 mr-1"
        />
      ))}
    </div>
  </div>
);

const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const startIndex = currentPage * testimonialsPerPage;
  const displayedTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 max-w-screen-xl my-8">
        <h1 className="text-4xl font-bold text-center mb-16">Testimonials</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <button
            className="p-2 bg-gray-100 rounded-full text-gray-600 focus:outline-none mx-2"
            onClick={prevTestimonials}
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex flex-col md:flex-row md:justify-between w-full md:w-auto">
            {displayedTestimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <button
            className="p-2 bg-gray-100 rounded-full text-gray-600 focus:outline-none mx-2"
            onClick={nextTestimonials}
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
