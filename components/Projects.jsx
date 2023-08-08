"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import "@styles/projects.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Carousel } from "react-responsive-carousel";
import "animate.css/animate.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  return (
    <div id='projects' className='projects_container mt-[7rem] '>
      <h1 className='uppercase font-bold text-3xl text-center animate__animated animate__fadeIn'>
        Projects
      </h1>
      <div className='projects flex flex-col'>
        {/* For Desktop */}
        <div className='hidden arrows md:flex justify-between items-start'>
          <Carousel
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <CustomLeftArrow onClick={onClickHandler} hasPrev={hasPrev} />
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <CustomRightArrow onClick={onClickHandler} hasNext={hasNext} />
            )}
            className='w-3/4 m-auto px-[12rem]'
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
          >
            <div className='animate__animated animate__fadeInDown '>
              <ProjectCard />
            </div>
            <div className='animate__animated animate__fadeInDown'>
              <ProjectCard />
            </div>
            <div className='animate__animated animate__fadeInDown'>
              <ProjectCard />
            </div>
            <div className='animate__animated animate__fadeInDown'>
              <ProjectCard />
            </div>
          </Carousel>
        </div>

        {/* For Phones */}
        <div className='md:hidden p-10'>
          <div className='animate__animated animate__fadeInLeft'>
            <ProjectCard />
          </div>
          <div className='animate__animated animate__fadeInRight'>
            <ProjectCard />
          </div>
          <div className='animate__animated animate__fadeInLeft'>
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomLeftArrow = ({ onClick, hasPrev }) => {
  return (
    <div
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 ml-4 animate__animated animate__fadeInLeft animate__delay-1s`}
      onClick={onClick}
    >
      <p className='p-6 bg-primaryColor rounded-full'>
        <KeyboardArrowLeftIcon />
      </p>
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div
      className={`absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 animate__animated animate__fadeInRight animate__delay-1s`}
      onClick={onClick}
    >
      <p className='p-6 bg-primaryColor rounded-full'>
        <KeyboardArrowRightIcon />
      </p>
    </div>
  );
};

export default Projects;
