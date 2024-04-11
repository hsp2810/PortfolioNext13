import Image from "next/image";
import React from "react";
import ProfilePhoto from "../public/img/profilePhoto.jpg";
import Link from "next/link";
import "animate.css/animate.min.css";

const Hero = () => {
  return (
    <div
      className='hero_container md:h-screen flex justify-center flex-col mt-[5rem] md:mt-0 p-8 md:p-0 md:w-1/2'
      id='hero'
    >
      <div className='flex flex-col md:flex-row'>
        <div className='animate__animated animate__fadeInLeft animate__delay-1s md:animate__delay-0s'>
          <Image
            src={ProfilePhoto}
            alt='Profile Photo not found'
            height={200}
            width={10}
            layout='responsive'
            className='rounded-full'
          />
        </div>
        <div className='flex-col md:ml-5 animate__animated animate__fadeIn'>
          <div>
            <h1 className='animate__animated animate__fadeInDown text-3xl my-3 md:my-0 md:text-4xl font-bold'>
              Hii there,{" "}
              <span className='text-primaryColor'>I am Harshit Patel</span>
            </h1>
          </div>
          <div className='animate__animated animate__fadeInUp'>
            <p className='text-customOrange font-semibold uppercase'>
              full-stack developer
            </p>
          </div>
          <div className='leading-6 animate__animated animate__fadeInRight text-justify'>
            Welcome to my web developer portfolio! As a skilled developer with 3
            years of experience, I have a passion for creating engaging and
            innovative websites that deliver a seamless user experience. From
            front-end development to back-end programming, I have the expertise
            to bring your ideas to life. Take a look at my portfolio to see some
            of my recent projects and get in touch to discuss how I can help
            with your web development needs.
          </div>
          <h1 className='font-bold text-xl my-4'>
            &quot;Passion for CS isn't just a job - it's a lifestyle&quot;
          </h1>
          <div className='flex flex-col md:flex-row md:justify-start animate__animated animate__fadeInUp'>
            <a
              href={"/resume.pdf"}
              download
              className='btn primaryBtn text-center'
            >
              Download CV
            </a>
            <button className='btn secondaryBtn md:ml-4 mt-3 md:mt-0'>
              <Link href={"/contact"}>Let&apos;s work together</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
