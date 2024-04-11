"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Carousel } from "react-responsive-carousel";
import "animate.css/animate.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projects } from "@utils/data/projects";

export default function Projects() {
  const [projectsArr, setProjectsArr] = useState(projects);

  useEffect(() => {
    if (!projectsArr) {
      setProjectsArr(projects);
    }
  }, [projects]);

  return (
    <div id='projects' className='mt-[7rem] '>
      <h1 className='uppercase font-bold text-3xl text-center animate__animated animate__fadeIn'>
        Projects
      </h1>
      {projects && (
        <div className='projects flex flex-col'>
          {/* For Desktop */}
          <div
            className='hidden arrows md:flex justify-between items-start '
            id={"caraousel"}
          >
            <Carousel
              renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <CustomLeftArrow onClick={onClickHandler} hasPrev={hasPrev} />
              )}
              renderArrowNext={(onClickHandler, hasNext, label) => (
                <CustomRightArrow onClick={onClickHandler} hasNext={hasNext} />
              )}
              className='w-full m-auto px-[12rem]'
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
            >
              {projects &&
                projects.map((project, index) => {
                  return (
                    <div
                      className='animate__animated animate__fadeInDown'
                      key={index}
                    >
                      <ProjectCard project={project} />
                    </div>
                  );
                })}
            </Carousel>
          </div>

          {/* For Phones */}
          <div className='md:hidden px-5'>
            {projects &&
              projects.map((project, index) => {
                return (
                  <div
                    className='animate__animated animate__fadeInLeft'
                    key={index}
                  >
                    <ProjectCard project={project} />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

const CustomLeftArrow = ({ onClick, hasPrev }) => {
  return (
    <div
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 ml-4 animate__animated animate__fadeInLeft animate__delay-1s`}
      onClick={onClick}
    >
      <p className='p-1 bg-primaryColor rounded-full'>
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
      <p className='p-1 bg-primaryColor rounded-full'>
        <KeyboardArrowRightIcon />
      </p>
    </div>
  );
};
