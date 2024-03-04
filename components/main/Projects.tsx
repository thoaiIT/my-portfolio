"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import ProjectCard from "../sub/ProjectCard";
import { FreeMode } from "swiper/modules";
import { projects } from "@/constants";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animationDelay = 0.5;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={slideInFromTop}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: animationDelay }}
      className="flex flex-col items-center justify-center pt-20 z-40 mx-10 md:mx-20 pb-36"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} style={{ width: "auto", flexShrink: 0 }}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Projects;
