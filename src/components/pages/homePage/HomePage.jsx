import React from 'react';
import video from '../../../assets/images/video.mp4';
import Home from '../../organisms/home/Home';
import Care from '../../organisms/care/Care';
import Comunication from '../../organisms/comunication/Comunication';
import Fengshui from '../../organisms/fengshui/Fengshui';
import About from '../../organisms/about/About';
import Price from '../../organisms/price/Price';
import Contact from '../../organisms/contact/Contact';
import './homePage.css'; 



const HomePage = () => {
  return (
    <div className="homepage-container">
      <video className="background-video" src={video} autoPlay loop muted />
      <div className="content"> 
      <section id="home-section">
        <Home />
      </section>
      <section id="care-section">
        <Care />
      </section>
      <section id="comunication-section">
        <Comunication />
      </section>
      <section id="fengshui-section">
        <Fengshui />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="price-section">
        <Price/>
      </section>
      <section id="contact-section">
        <Contact/>
      </section>
      </div>
    </div>
  );
};

export default HomePage;
