"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9] bg-[#0300145e] md:bg-transparent"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Front-end Developer</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Front-end Developer, I specialize in HTML, CSS, JavaScript,
          ReactJS, and NextJS, with hands-on experience in building complex web
          systems and ecommerce platforms. My academic background in Information
          Systems Engineering has provided a strong technical foundation. I am
          recognized for my ability to collaborate effectively, solve problems,
          and my dedication to continuous learning and professional development
          in the tech industry.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://drive.google.com/file/d/1o5MxwOy9SfcxTS9M0BY0_SVXBAk5rqt0/view?usp=drive_link"
          target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center justify-center"
        >
          <FaEye /> &nbsp; View my resume
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden w-full h-full md:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
