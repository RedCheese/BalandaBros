"use client";
import React from "react";
import { links } from "../lib/data";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <nav className="relative bg-white flex items-center justify-between mx-auto max-w-full px-6 lg:px-20 3xl:px-0 rounded z-30 py-5">
      <Link href="/">
        <Image src="/bblogo.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium  sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map((link) => (
          <li className="h-3/4" key={link.hash}>
            <Link
              className="regular-16 text-gray-500 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
              href={link.hash}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
