import React from "react";
import cardImg from "@public/img/projectcard.jpg";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <>
      {project && (
        <div className='rounded-2xl mt-6 md:ml-3'>
          <Image
            className='rounded-lg h-1/2 w-full'
            src={cardImg}
            alt='Project card'
            height={100}
            width={100}
          />
          <div className='flex flex-col items-start py-4'>
            <div className='font-bold text-2xl mt-2 mb-2 text-primaryColor'>
              <a href={project.githubUrl} target='_blank'>
                {project.title}
              </a>
            </div>
            <p className='text-base text-left'>{project.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
