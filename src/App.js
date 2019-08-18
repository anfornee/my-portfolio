import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutMe from './Components/AboutMe/AboutMe';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Route path="/about-me" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </div>
      </div>
    </Router>
  );
}

export default App;
