import React from 'react';
import './cardFeng.css';

const CardFeng = () => {
  return (
    <section className="card-feng">
        <div className="card-content">
          <div className="text-container">
              <div className="growth-bar-container">
                  <div className="growth-bar"></div>
              </div>
              <h3 className="card-title">
                Le Feng Shui est une science millénaire chinoise qui prend en compte les courants énergétiques et l'influence que ces derniers ont sur les êtres vivants. 
                Cette technique ancestrale a pour objectif d'harmoniser le Yin (féminin : passif, froid, sombre) et le Yang (masculin : actif, chaud, lumière) 
                les deux forces fondamentales du Qi.
              </h3>
          </div>
          <div className="container-img"></div>
          <p>
            Votre habitation joue le rôle de catalyseur des énergies. Ensuite vous pouvez les activer une fois à l'intérieur. 
            Une étude Feng Shui de votre habitat doit vous permettre de « câbler » votre habitation aux énergies bénéfiques et de faire en sorte que vous puissiez vous « brancher » à celles-ci.
          </p>
          <p>
            Certifié à l'école DAO en novembre 2023, je vous propose une étude de votre habitation, de votre commerce, des locaux de votre société. J'étudie les formes de l'environnement à 
            l'extérieur de votre maison ou de votre commerce, puis j'étudie l'intérieur avec le « Ba Zhai » pour activer les énergies bénéfiques pour chacune des personnes vivant dans votre 
            habitation ou travaillant dans votre société.
          </p>
          <p>Tarif : sur devis, n'hésitez pas à me contacter !</p>
        </div>
    </section>
  );
};
export default CardFeng;

