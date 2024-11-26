import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import About from './components/About-Us'; 
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero-section">
        <section id="home">
          <h1 className="welcome-text">Welcome to Ayda<br/>Restaurant</h1>
        </section>
      </div>

      <section id="menu">
        <MenuSection />
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

export default App;





















