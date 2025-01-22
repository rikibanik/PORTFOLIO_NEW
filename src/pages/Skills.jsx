import React from 'react';
import Languages from '../components/Languages';
import Development from '../components/Development';
import Tools from '../components/Tools';

const Skills = () => {
  return (
    <div className="skills-container flex flex-col md:flex-col md:justify-center md:items-center md:min-h-screen bg-slate-800 gap-6">
      {/* Languages Section */}
      <div className="md:w-4/7 p-4 h-auto">
      <Development />
      </div>

      {/* Development and Tools Section */}
      <div className="flex flex-col md:flex-row md:gap-6 md:w-3/4">
        <div className="md:w-2/5 p-4 h-auto">
          
          <Languages />
        </div>
        <div className="md:w-1/2 p-4 h-auto flex-col">
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default Skills;
