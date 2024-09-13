import React from 'react';
import CardInfo from '../../moleules/comunication/CardInfo';
import './comunication.css'; 

const Comunication = () => {
  return (
    <section className="communication">
      <div className="communication-content">
        <h1 className="communication-title">Communication animale</h1>
        <h2 className="communication-subtitle">
          Vous ne comprenez pas pourquoi votre chien aboie sans discontinuer ? 
          Ou pourquoi votre chat ne vient plus vous faire des câlins ?
        </h2>
        <p className="communication-paragraph">
          Comme les êtres humains que nous sommes, les animaux sont sensibles & doués d’émotion. De ce fait, ils peuvent notamment penser 
          ou bien ressentir de la joie comme du chagrin. Cependant, ils ne sont pas dotés de la parole et ne peuvent donc user de cette 
          faculté pour exprimer ce qu’ils ressentent. En revanche, ils utilisent le langage intuitif, dont une grande partie de la population 
          humaine en est coupée.
        </p>
        <CardInfo/>
      </div>
    </section>
  );
};

export default Comunication;
