import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Homebar from './components/Homebar';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Homebar />


      <Section />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
