import React, { useRef, useState } from "react";

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  // if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      {project && (
        <>
          {/* Phones */}
          <div className='md:hidden rounded-2xl mt-6'>
            {project.photo ? (
              <img
                className='rounded-2xl h-1/2 w-full'
                src={project.photo}
                alt='Project card'
                height={100}
                width={100}
              />
            ) : (
              <div className='relative w-full'>
                <video
                  ref={videoRef}
                  src={project.video}
                  className='rounded-2xl w-full opacity-65'
                  height={100}
                  width={100}
                  controls={true}
                />
                <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center'>
                  <div className='bg-black bg-opacity-25 p-2 rounded-r-lg'>
                    <PlayBtn videoRef={videoRef} />
                    <PauseBtn videoRef={videoRef} />
                  </div>
                </div>
              </div>
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
            <div className='relative w-full'>
              {project.photo ? (
                <img
                  className='rounded-2xl w-full opacity-65'
                  src={project.photo}
                  alt='Project card'
                  height={100}
                  width={100}
                />
              ) : (
                <video
                  ref={videoRef}
                  src={project.video}
                  className='rounded-2xl w-full opacity-65'
                  height={100}
                  width={100}
                  controls={false}
                  onLoadedData={handleVideoLoad}
                  style={{ display: isLoaded ? "block" : "none" }}
                />
              )}
            </div>
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
                  {project.title}
                  {project.isGoing && (
                    <span className='bg-white text-xs font-normal ml-1 text-black p-1 rounded-lg hover:bg-gray-200'>
                      ONGOING
                    </span>
                  )}
                </h1>
                <p className='text-md font-light text-left'>
                  {project.description}
                </p>
              </div>
            </div>
            {project.video && (
              <div className='absolute bottom-0 w-full p-2 rounded-r-lg'>
                <PlayBtn videoRef={videoRef} />
                <PauseBtn videoRef={videoRef} />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ProjectCard;

const PlayBtn = ({ videoRef }) => {
  return (
    <button
      onClick={() => videoRef.current.play()}
      className='rounded-full hover:bg-primaryColor hover:text-white p-2 transition'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='lucide lucide-play'
      >
        <polygon points='6 3 20 12 6 21 6 3' />
      </svg>
    </button>
  );
};

const PauseBtn = ({ videoRef }) => {
  return (
    <button
      onClick={() => videoRef.current.pause()}
      className='rounded-full hover:bg-primaryColor hover:text-white p-2 transition'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='lucide lucide-pause'
      >
        <rect x='14' y='4' width='4' height='16' rx='1' />
        <rect x='6' y='4' width='4' height='16' rx='1' />
      </svg>
    </button>
  );
};
