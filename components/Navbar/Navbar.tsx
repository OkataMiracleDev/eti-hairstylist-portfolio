import { navLinks } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-gray-100 shadow-md px-6 md:px-10 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center gap-8 md:gap-10 py-4 md:py-8 w-full">
        <Link href="/" className="h-10">
          <Image
            src={"/logo/logo-mobile.png"}
            width={1000}
            height={1000}
            alt="logo"
            className="w-[50%] md:w-full h-full object-contain"
          />
        </Link>

        <div className="flex flex-row gap-5 md:gap-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="text-gray-700 hover:text-gray-400 font-bold text-lg md:text-2xl">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
