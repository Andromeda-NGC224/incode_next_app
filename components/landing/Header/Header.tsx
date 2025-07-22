"use client";

import { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

import { SmoothScrollLink } from "@/components/ui/SmoothScrollLink";
import { BurgerMenuOverlay } from "@/components/landing";
import Link from "next/link";
import { navItems, socialLinks } from "./config";
import { FaCog } from "react-icons/fa";
import { OverlayPortal } from "@/components/ui/OverlayPortal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <header className="w-full z-10 text-white flex items-center justify-between px-4 md:px-12 xl:px-24 py-3 ">
      <div
        className="z-[-40] absolute top-0 right-0 pointer-events-none 
  w-[300px] h-[300px]         // Мобильные (по умолчанию)
  md:w-[600px] md:h-[600px]    // ≥768px
  xl:w-[1000px] xl:h-[1000px]    // ≥1280px
"
      >
        {/* First layer */}
        <Image
          src="/headerBgLower.svg"
          alt="headerBgLower"
          width={300}
          height={300}
          className="absolute top-0 right-0 w-full h-full z-[-30]"
        />

        {/* Second layer */}
        <Image
          src="/headerBgHigher.svg"
          alt="headerBgHigher"
          width={300}
          height={300}
          className="absolute top-0 right-0 w-full h-full opacity-80 z-[-20]"
        />

        {/* Third layer */}
        <Image
          src="/Decoration.png"
          alt="decoration"
          width={200}
          height={200}
          className="absolute top-0 right-0 z-[-10]
           w-[200px] h-[200px] // Мобильные (по умолчанию)
           md:w-[400px] md:h-[400px] // ≥768px
           xl:w-[650px] xl:h-[700px] // ≥1280px
           "
        />
      </div>

      {/* Logo */}
      <Link href={"/dashboard"} className="flex flex-col items-center gap-1">
        <div className="w-[60px] md:w-[90px] xl:w-[120px] ">
          <Image
            src="/logoImg.png"
            alt="Logo"
            width={186}
            height={190}
            className="w-full h-auto"
          />
        </div>
        <span className="text-sm md:text-base lg:text-lg xl:text-xl  font-semibold">
          Mobile
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map(({ id, label }) => (
          <SmoothScrollLink
            key={id}
            targetId={id}
            onClick={() => setActiveSection(id)}
            className={`transition-colors font-semibold ${
              activeSection === id
                ? "text-purple-text relative after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-purple-dark"
                : "text-main-text hover:text-purple-text"
            } 
      text-sm 
      md:text-base  // 16px для 768px+
      lg:text-lg    // 18px для 1024px+
      xl:text-xl    // 20px для 1280px+
      `}
          >
            {label}
          </SmoothScrollLink>
        ))}
      </nav>

      {/* Socials */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`
        flex items-center justify-center 
        transition-colors duration-200
        rounded-full bg-[#a98fcc] hover:bg-purple-dark
        w-8 h-8 text-[14px] 
        sm:w-10 sm:h-10 sm:text-[22px]
        md:w-12 md:h-12 md:text-[28px]
        xl:w-[60px] xl:h-[60px] xl:text-[40px]

      `}
          >
            <Icon />
          </Link>
        ))}
        <FaCog
          className="ml-2 text-[32px] 
         sm:text-[40px]
         md:text-[48px]
         xl:text-[60px]
        "
        />
      </div>

      {/* Burger */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="lg:hidden text-white cursor-pointer"
      >
        <RxHamburgerMenu size={24} />
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <OverlayPortal>
          <BurgerMenuOverlay
            navItems={navItems}
            activeSection={activeSection}
            onClose={() => setIsMenuOpen(false)}
          />
        </OverlayPortal>
      )}
    </header>
  );
}
