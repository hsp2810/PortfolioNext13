import React from "react";
import cardImg from "@public/img/projectcard.jpg";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className='rounded-2xl mt-6 md:ml-3'>
      <Image
        className='rounded-lg h-auto w-full'
        src={cardImg}
        alt='Project card'
        height={100}
        width={100}
      />
      <div className='flex flex-col items-start py-4'>
        <div className='font-bold text-2xl mt-2 mb-2 text-primaryColor'>
          The Coldest Sunset
        </div>
        <p className='text-base text-left'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
