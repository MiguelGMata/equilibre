import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/images/logofondo.png';
import './contact.css'; 
import Form from '../../moleules/form/Form';
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <div className="contact-card">
          <img src={logo} alt="Logo" className="contact-logo" />
        </div>
        <div className="contact-card">
          <h2>Coordonnées</h2>
          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
              <span>48 Rue de Paradis, Paris, France</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <span>equilibrevitalite@gmail.com</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              <span>+33 1 23 45 67 89</span>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <h2>Horaire</h2>
          <p>Du lundi au vendredi : 9h - 18h<br/>Samedi : 10h - 14h<br/>Dimanche : Fermé</p>
        </div>
      </div>
    <div className="form-component">
      <Form/>
    </div>
    </section>
  );
};

export default Contact;
