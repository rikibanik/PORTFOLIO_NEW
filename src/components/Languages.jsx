import React from 'react';
import { Language } from '../../utils/data/Languages';

const Languages = () => {
  return (
    <div className="bg-white bg-opacity-10 h-auto p-6 rounded-2xl shadow-slate-600 shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-slate-50">Programming Languages</h2>

      {/* List of programming languages */}
      <div className="space-y-8 md:w-full flex flex-col justify-center align-middle">
        {Language.map((lang, index) => (
          <div key={index} className="flex items-center md:w-1/2 gap-4 p-3 rounded-lg bg-slate-800 shadow-md  hover:bg-slate-600 transition duration-300 cursor-pointer">
            <img src={lang.link} alt={lang.name} className="w-12 h-12 object-contain ml-2 rounded-ld" />
            <span className="text-white font-medium">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
