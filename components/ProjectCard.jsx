import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      {project && (
        <>
          {/* Phones */}
          <div className='md:hidden rounded-2xl mt-6'>
            {project.photo ? (
              <img
                className='rounded-lg h-1/2 w-full'
                src={project.photo}
                alt='Project card'
                height={100}
                width={100}
              />
            ) : (
              <video
                src={project.video}
                className='rounded-lg w-full opacity-65'
                height={100}
                width={100}
                autoPlay
                controls={false}
              />
            )}
            <div className='flex flex-col items-start py-4'>
              <div className='font-bold text-2xl mt-2 mb-2 text-primaryColor'>
                <a href={project.githubUrl} target='_blank'>
                  {project.title} {project.isGoing && ` - ONGOING`}
                </a>
              </div>
              <p className='text-base text-left'>{project.description}</p>
            </div>
          </div>

          {/* Screens */}
          <div className='hidden md:block relative rounded-2xl mt-2 md:ml-3 overflow-hidden h-full'>
            {project.photo ? (
              <img
                className='rounded-lg w-full opacity-65'
                src={project.photo}
                alt='Project card'
                height={100}
                width={100}
              />
            ) : (
              <video
                src={project.video}
                className='rounded-lg w-full opacity-65'
                height={100}
                width={100}
                autoPlay
                controls={false}
              />
            )}
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 transition-opacity opacity-0 hover:opacity-100'>
              <a
                href={project.githubUrl}
                target='_blank'
                className='bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200'
              >
                Go to GitHub
              </a>
              <div className='absolute bottom-0 left-0 text-white p-5 transition-opacity duration-300 hover:opacity-100'>
                <h1 className='flex items-center font-extrabold text-5xl text-left bg-gradient-to-r from-primaryColor to-blue-900 text-transparent bg-clip-text bg-no-repeat bg-cover w-fit'>
                  {project.title}{" "}
                  <span className='bg-white text-xs font-normal ml-1 text-black p-1 rounded-lg hover:bg-gray-200'>
                    {project.isGoing && `ONGOING`}
                  </span>
                </h1>
                <p className='text-md font-light text-left'>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectCard;
