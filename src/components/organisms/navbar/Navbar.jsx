import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import MentionsLegales from '../../pages/mentions/MentionsLegales';

import './navbar.css';
import logo from '../../../assets/images/logo.jpg'; 

const Navbar = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  const closeMenu = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  const handleClick = (section) => {
    setActiveSection(section);
    closeMenu();
  };

  
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Burger Menu Button */}
        <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>

      {/* Menu */}
      <div className={`menu ${isOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <a 
              href="#home-section" 
              onClick={() => handleClick('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              ACCUEIL
            </a>
          </li>
          <li>
            <a 
              href="#care-section" 
              onClick={() => handleClick('care')}
              className={activeSection === 'care' ? 'active' : ''}
            >
              SOINS
            </a>
          </li>
          <li>
            <a 
              href="#comunication-section" 
              onClick={() => handleClick('comunication')}
              className={activeSection === 'comunication' ? 'active' : ''}
            >
              Animeux
            </a>
          </li>
          <li>
            <a 
              href="#fengshui-section" 
              onClick={() => handleClick('fengshui')}
              className={activeSection === 'fengshui' ? 'active' : ''}
            >
              FENG SHUI
            </a>
          </li>
          <li>
            <a 
              href="#about-section" 
              onClick={() => handleClick('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              À PROPOS
            </a>
          </li>
          <li>
            <a 
              href="#price-section" 
              onClick={() => handleClick('price')}
              className={activeSection === 'price' ? 'active' : ''}
            >
              TARIFS
            </a>
          </li>
          <li>
            <a 
              href="#contact-section" 
              onClick={() => handleClick('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              CONTACT
            </a>
          </li>
        </ul>
        <div className="separator"></div>
        <div className="social-links">
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="legal">
          <a href="/mentionslegales">MENTIONS LÉGALES</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
