import React from 'react';
import CardFeng from '../../moleules/cardFeng/CardFeng';
import './fengshui.css';


const Fengshui = () => {
  return (
    <section className="fengshui">
      <div className="fengshui-content">
        <h1 className="fengshui-title">Feng Shui traditionnel</h1>
        <h2 className="fengshui-subtitle">
          Votre habitation, le lieu où vous passez le plus clair de votre temps a une influence sur votre vie.
        </h2>
        <p className="fengshui-description">
          Autant nous travaillons sur nous même que ce soit en faisant du sport, en mangeant sainement, en faisant de la méditation, autant il est fondamental de 
          mettre en place une bonne structure énergétique au sein de votre maison, de votre appartement. Ceci afin de capter les énergies bénéfiques qui vont vous 
          soutenir à chaque instant de votre vie. Que ce soit sur le plan sentimental, relationnel, financier, de la santé, de la carrière professionnel, 
          votre habitation impacte votre vie.
        </p>
        <p className="fengshui-description">Feng : Vent et Shui : eau. Le vent transporte le Qi (les courants énergétiques) qui s'accumule là où il y a de l'eau...</p>
      <CardFeng/>
      </div>
    </section>
  );
};

export default Fengshui;
