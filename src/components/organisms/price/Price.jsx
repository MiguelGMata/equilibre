import React from 'react';
import './price.css'; // Asegúrate de crear este archivo CSS

const Price = () => {
  return (
    <section className="price">
      <h1 className="price-title">Tarifs</h1>
      <div className="price-grid">
        <div className="price-card">
          <h2 className="price-card-title">Soin Énergétique</h2>
          <p className="price-card-description">Équilibrage et harmonisation du corps éthérique et des chakras.
            Utilisation de minéraux et d'huiles essentielles biologiques.
            Pour la 1ère séance comptez 1h30 pour la réalisation de l'anamnèse.
          </p>
          <div className="price-card-details">
            <div className="price-card-detail">Durée</div>
            <div className="price-card-detail">1h00</div>
            <div className="price-card-detail">Tarif</div>
            <div className="price-card-detail">65 € T.T.C</div>
          </div>
        </div>
        <div className="price-card">
          <h2 className="price-card-title">Séance de Lahochi</h2>
          <p className="price-card-description">
            Soin énergétique par apposition des mains sur le corps physique.
            Libération des maux physiques répétitifs liés à la mémoire cellulaire.
            Pour la 1ère séance comptez 1h30 pour la réalisation de l'anamnèse.
          </p>
          <div className="price-card-details">
            <div className="price-card-detail">Durée</div>
            <div className="price-card-detail">30 min</div>
            <div className="price-card-detail">40 € T.T.C</div>
            <div className="price-card-detail">Détail 4</div>
          </div>
        </div>
        <div className="price-card">
          <h2 className="price-card-title">Soin Lahochi</h2>
          <p className="price-card-description">
            Soin vibratoire de haute fréquence qui agit sur le corps physique & subtil.
            Libération des maux physiques répétitifs liés à la mémoire cellulaire.
            À distance pour vous (avec photo) ou pour votre animal.
          </p>
          <div className="price-card-details">
            <div className="price-card-detail">Durée</div>
            <div className="price-card-detail">	40 € T.T.C</div>
            <div className="price-card-detail">Tarif</div>
            <div className="price-card-detail">20 € T.T.C</div>
          </div>
        </div>
        <div className="price-card">
          <h2 className="price-card-title">Communication animale</h2>
          <p className="price-card-description">
            Communication avec votre animal afin de résoudre une problématique donnée.
            Déblocage d'une situation de conflit avec votre animal (arrivée d’un nouvel animal dans votre foyer, préparation à un déménagement, etc).
          </p>
          <div className="price-card-details">
            <div className="price-card-detail">Première fois</div>
            <div className="price-card-detail">25 € T.T.C</div>
            <div className="price-card-detail">Suite</div>
            <div className="price-card-detail">10 € T.T.C</div>
          </div>
        </div>
      </div>
      <h1 className="price-title">  Un proche à qui un soin énergétique ferait du bien ? <br/>Offrez-lui un bon cadeau !</h1>
    </section>
  );
};

export default Price;
