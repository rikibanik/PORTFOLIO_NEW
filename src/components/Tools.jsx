import React from 'react';
import { ToolsList } from '../../utils/data/Tools';

const Tools = () => {
  return (
    <div className="bg-white bg-opacity-10 glow h-auto p-6 rounded-2xl shadow-slate-600 shadow-xl ">
      {/* Header */}
      <h2 className="text-2xl font-extrabold font-poppins text-slate-50 mb-4">
        Development Tools
      </h2>
      
      {/* Tools List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {ToolsList.map((tool, index) => (
          <div
            key={index}
            className="flex items-center bg-slate-800 p-4 rounded-lg shadow hover:bg-slate-600 transition duration-300 cursor-pointer"
          >
            {/* Tool Icon */}
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-12 h-12 object-contain rounded-md mr-4"
            />
            {/* Tool Name */}
            <span className="text-slate-50 font-semibold text-lg">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
