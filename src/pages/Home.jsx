import React from 'react';
import Avatar from '../components/Avatar';
import AboutMe from '../components/AboutMe';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-800 flex flex-col md:flex-row items-center justify-center gap-8 p-6">
      {/* Avatar Section */}
      <div className="w-full md:w-2/5 flex justify-center items-center">
        <div className="w-full h-auto rounded-full">
          {/* Avatar component */}
          <Avatar />
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-3/5 flex flex-col items-center md:items-center justify-center text-center md:text-left">
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
