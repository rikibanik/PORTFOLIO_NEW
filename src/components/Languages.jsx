import React from 'react';
import { Language } from '../../utils/data/Languages';

const Languages = () => {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-2xl glow shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-slate-50">Programming Languages</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {Language.map((lang, index) => (
          <div
            key={index}
            className="flex  items-center gap-3 p-4 rounded-xl bg-slate-800 shadow-md hover:bg-slate-600 transition duration-300 cursor-pointer"
          >
            <img
              src={lang.link}
              alt={lang.name}
              className="w-16 h-12 object-contain rounded-md"
            />
            <span className="text-white font-medium">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
