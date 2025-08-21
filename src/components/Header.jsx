"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 oswald">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuAberto(false)}>
          <Image
            src="/blue-logo.webp"
            alt="RF Web Pro Logo"
            width={100}
            height={70}
            priority={true}
          />
        </Link>

        {/* Links - Desktop */}
        <nav className="hidden lg:flex gap-8 items-center">
          <Link
            href="/about-me"
            className=" text-blue uppercase hover:text-lightblue transition"
          >
            About Me
          </Link>

          <Link
            href="/#portfolio"
            className=" text-blue uppercase  hover:text-lightblue  transition"
          >
            Portfolio
          </Link>
          <Link
            href="/#pricing"
            className=" text-blue uppercase  hover:text-lightblue  transition"
          >
            Pricing
          </Link>
          <Link
            href="/#testimonials"
            className=" text-blue uppercase  hover:text-lightblue  transition"
          >
            Testimonials
          </Link>
          <Link
            href="/faq"
            className=" text-blue uppercase  hover:text-lightblue  transition"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className=" text-blue uppercase  hover:text-lightblue  transition"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="text-white uppercase bg-blue tracking-[0.0625rem] text-lg px-9 py-3 rounded-lg font-medium  shadow-md hover:shadow-md hover:bg-lightblue transition-colors duration-300 active:scale-99"
          >
            Get Started
          </Link>
        </nav>

        {/* Botão Hamburguer - Mobile */}
        <button
          className="lg:hidden text-blue uppercase"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Open menu"
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col items-start px-6 py-4 gap-4">
            <Link
              href="/about-me"
              className=" text-blue uppercase py-2"
              onClick={() => setMenuAberto(false)}
            >
              About Me
            </Link>

            <Link
              href="/#portfolio"
              className=" text-blue uppercase py-2"
              onClick={() => setMenuAberto(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/#pricing"
              className="  text-blue uppercase py-2"
              onClick={() => setMenuAberto(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#testimonials"
              className="  text-blue uppercase py-2"
              onClick={() => setMenuAberto(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/faq"
              className="  text-blue uppercase py-2"
              onClick={() => setMenuAberto(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="  text-blue uppercase py-2"
              onClick={() => setMenuAberto(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="w-full text-center font-medium text-lg text-white uppercase bg-blue tracking-[0.0625rem] px-9 py-3 rounded-lg  shadow-md"
              onClick={() => setMenuAberto(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
