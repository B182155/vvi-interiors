// components/Header.js
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LogoWhite from "@/public/assets/Logo.png";
import LogoBlack from "@/public/assets/Logo1.png"; // Add a white version of the logo
import Logo from "@/public/assets/logo.jpg";

import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link href="/">
          <div className="flex items-center gap-4 cursor-pointer">
            <Image
              // src={isScrolled ? LogoBlack : LogoWhite}
              src={Logo}
              alt="VVI Interior Designs"
              width={65}
              height={55}
              className="rounded-md"
            />
            {isScrolled && (
              <span className="text-xl text-purple-500 font-sans uppercase font-semibold mt-3">
                VVI Interiors
              </span>
            )}
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
