import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import DockNavbar from './components/DockNavbar';

function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' or 'skills'

  // Handle section switch with animation
  const switchPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <div className="app-container min-h-screen">
        {/* Page content */}
        <div
          className={`content ${activePage === 'home' ? 'home-active' : 'skills-active'}`}
        >
          {activePage === 'home' && <Home />}
          {activePage === 'skills' && <Skills />}
        </div>

        {/* Navbar */}
        <DockNavbar
          onSwitchPage={switchPage}
          activePage={activePage}
        />
      </div>
    </>
  );
}

export default App;
