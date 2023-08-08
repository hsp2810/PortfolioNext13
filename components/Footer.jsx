"use client";

import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className='p-3 flex md:justify-between md:flex-row flex-col-reverse items-center '>
      <h1 className='mt-4 md:mt-0'>
        © 2023 Harshit Patel. All rights reserved.
      </h1>
      <div>
        <span className='ml-2'>
          <a href='https://github.com/hsp2810' target='_blank'>
            <GitHub />
          </a>
        </span>
        <span className='ml-2'>
          <a
            href='https://www.linkedin.com/in/harshit-patel-93b677215/'
            target='_blank'
          >
            <LinkedIn />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
