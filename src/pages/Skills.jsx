import React from 'react';
import Languages from '../components/Languages';
import Development from '../components/Development';
import Tools from '../components/Tools';

const Skills = () => {
  return (
    <div className="skills-container flex flex-col md:flex-row md:justify-center md:items-center md:min-h-screen bg-slate-800">
  <div className="md:w-1/3 p-4 h-auto">
    <Languages />
  </div>
  <div className="md:w-1/3 p-4 h-auto">
    <Development />
  </div>
  <div className="md:w-1/3 p-4 h-auto">
    <Tools />
  </div>
</div>

  );
}

export default Skills;