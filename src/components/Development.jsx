import React from 'react';
import { developmentData } from '../../utils/data/developmentData';

const Development = () => {
  return (
    <div className="bg-white bg-opacity-10 h-auto p-6 rounded-2xl glow shadow-slate-600 shadow-xl ">
      <h2 className="text-2xl font-extrabold font-poppins text-slate-50 mb-4">Development Language & Frameworks</h2>
     

      {/* Grid layout for images and names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {developmentData.map((tool, index) => (
          <div key={index} className="flex items-center bg-slate-800 p-4  rounded-lg shadow hover:bg-slate-600 transition duration-300 cursor-pointer">
            <img 
              src={tool.imgLink} 
              alt={tool.name} 
              className="w-14 h-14 object-contain" 
            />
            <span className="text-white ml-4 font-bold text-center">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Development;
