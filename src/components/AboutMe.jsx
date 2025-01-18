import React from 'react';
import { personalData } from '../../utils/data/personalData';
import '../index.css'
import Typewriter from 'typewriter-effect';

const AboutMe = () => {
  return (
    <>
      {/* Responsive Heading */}
      <h1 className="w-full text-4xl sm:text-6xl md:text-8xl font-bold mb-2 text-slate-300 text-center md:text-left">
        {personalData.name}

      </h1>
        
      {/* Responsive Subheading */}
      <h3 className="w-full text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-slate-300 text-center md:text-left">
      <Typewriter className='w-full text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-slate-300 text-center md:text-left'
  options={{
    strings: personalData.expertise,
    autoStart: true,
    loop: true,
  }} />
      </h3>
  

      {/* Button Section */}
      <div className="flex justify-center md:justify-start items-center space-x-4 mt-10 pr-5">
        {/* CV Button */}
        <a
          href={personalData.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 md:py-3 md:w-36 text-center bg-gray-700 text-white font-semibold rounded-lg shadow hover:bg-slate-500 transition duration-300 font-poppins"
        >
          <span className='text-xl'>CV</span>
        </a>

        {/* GitHub Button */}
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 md:py-3 md:w-36 text-center bg-gray-700 text-white font-semibold rounded-lg shadow hover:bg-slate-500 transition duration-300 font-poppins"
        >
        <i class="fa-brands fa-github text-2xl"></i>
        </a>

        {/* LinkedIn Button */}
        <a
          href={personalData.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 md:py-3 md:w-36 text-center bg-gray-700 text-white font-semibold rounded-lg shadow hover:bg-slate-500 transition duration-300 font-poppins"
        >
        <i class="fa-brands fa-linkedin text-2xl"></i>
        </a>
      </div>
    </>
  );
};

export default AboutMe;
