import { footLinks } from "@/constants/constant";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 lg:mt-35 w-full border-t border-gray-300 bg-gray-100/60 backdrop-blur">
      <div className="mx-auto w-[90%] md:w-[85%] py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logomark.png"
            alt="Style by Eti logo mark"
            width={200}
            height={200}
            className="h-16 w-16 object-contain"
          />
          <div className="flex flex-col">
            <p className="text-gray-900 font-semibold">Style by Eti</p>
            <p className="text-gray-600 text-sm">Expressive hair artistry</p>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex items-center gap-4">
          {footLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              aria-label="Social link"
              target="_blank"
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 border border-gray-300 text-gray-700 hover:bg-white hover:text-gray-900 shadow-sm transition-all">
                {link.label}
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 md:mt-0 text-sm text-gray-600 font-light">
          © 2025 Style by Eti
        </p>
      </div>
    </footer>
  );
};

export default Footer;
