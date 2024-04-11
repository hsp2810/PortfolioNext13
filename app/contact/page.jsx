"use client";

import React, { useState } from "react";
import "animate.css/animate.min.css";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import Link from "next/link";

const defData = {
  name: "",
  email: "",
  message: "",
};
const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(defData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, message } = formData;
      if (!name || !email || !message) {
        toast.error("Please enter all the fields");
        return;
      }
      const response = await fetch("https://formspree.io/f/maygewra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Form Submitted. I will get back to you shortly");
        setFormData(defData);
      } else {
      }
    } catch (error) {
      toast.error("Custom Error");
    }
  };

  return (
    <div className='md:w-1/2 contact-page-container md:h-screen flex justify-center items-center'>
      {isSubmitted ? (
        <div className=''>
          <h1 className='text-2xl mb-2'>Form Submitted</h1>
          <button type='button' className='btn primaryBtn w-full'>
            <a href={"/contact"}>New Form</a>
          </button>
        </div>
      ) : (
        <form
          className='w-full p-6 bg-black rounded-lg shadow-md animate__animated animate__fadeIn'
          onSubmit={handleSubmit}
        >
          <h2 className='text-2xl text-primaryColor font-semibold mb-4 animate__animated animate__fadeInDown'>
            Let&apos;s connect. Leave a message
          </h2>
          <div className='mb-4 animate__animated animate__fadeInLeft'>
            <label className='block text-sm font-medium'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none text-primaryColor'
            />
          </div>
          <div className='mb-4 animate__animated animate__fadeInRight'>
            <label className='block text-sm font-medium'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none text-primaryColor'
            />
            {/* <ValidationError prefix='Email' field='email' errors={state.errors} /> */}
          </div>
          <div className='mb-4 animate__animated animate__fadeInLeft'>
            <label className='block text-sm font-medium'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className='w-full px-3 py-2 border rounded-md resize-none focus:outline-none text-primaryColor'
            ></textarea>
          </div>

          <div className='animate__animated animate__fadeInUp w-1/2 block m-auto'>
            <button type='submit' className='btn primaryBtn w-full'>
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
