import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full grid grid-cols-3 items-center justify-between m-auto px-[10px] gap-10">
        <a
          href="#about-me"
          className="h-auto w-auto hidden lg:flex flex-row items-center col-span-1"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden lg:block text-gray-300">
            Nguyen Van Thoai
          </span>
        </a>

        <div className="h-full flex flex-row items-center justify-between col-span-3 lg:col-span-1 sm:mx-20 lg:mx-0">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="col-span-1 hidden lg:flex flex-row gap-6 justify-end">
          {Socials.map((social) => (
            <a key={social.name} href={social.link} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
