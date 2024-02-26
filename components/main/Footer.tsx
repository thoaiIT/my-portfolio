import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaBuilding, FaFacebook, FaSchool, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://shinhands.com.vn/en"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaBuilding />
              <span className="text-[15px] ml-[6px]">SDS VN</span>
            </a>
            <a
              href="https://github.com/thoaiIT"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer z-50"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="https://www.uit.edu.vn/"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaSchool />
              <span className="text-[15px] ml-[6px]">UIT</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.facebook.com/thoaiisme/"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer z-50"
            >
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">Facebook</span>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <a
              href="https://www.linkedin.com/in/thoaiisme/"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer z-50"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">HCM City</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">1+ year experience</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                thoainguyen.forwork@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {"Nguyen Van Thoai - Front-end Developer"}
        </div>
      </div>
    </div>
  );
};

export default Footer;
