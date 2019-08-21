import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HomePage/HeroSection';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <HeroSection />
          <AboutMe />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
