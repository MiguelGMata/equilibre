import React from 'react';
import './cardInfo.css';

const CardInfo = () => {
  return (
    <section className="card-info">
      <div className="card-info-container">
        <div className="card-info-column">
          <h2 className="card-info-title">La télépathie ?</h2>
          <h4 className="card-info-title-2">La physique quantique a permis d’expliquer ce phénomène, le décrivant comme un ensemble de vibrations sur lesquelles ni le temps ni l’espace n’ont de prise.</h4>
          <p className="card-info-description">À partir de ce moment, je reçois les informations sous forme essentiellement d’images. Lors de la première connexion avec un animal, 
            je lui demande des éléments permettant de vérifier que je suis connecté avec lui : sa friandise préférée, son lieu de repos favori... De cet échange ressort souvent un message d’amour, 
            contribuant ainsi au déblocage d’une situation de conflit. Pour exemple prenons celui d’un chat qui ne voulait plus monter sur les cuisses de sa gardienne, ni être pris dans les bras de celle-ci 
            depuis le dernier aller-retour chez le vétérinaire plusieurs mois auparavant. Lors de la connexion, je lui ai partagé non seulement qu’il recevait toujours de l’amour maternel, mais aussi que cette 
            visite, certes désagréable, demeurait un acte de bienveillance.
          </p>
        </div>
        <div className="card-info-column">
          <h2 className="card-info-title">Pourquoi communiquer avec un animal ?</h2>
          <h4 className="card-info-title-2">L’amour inconditionnel, la plus belle des énergies !</h4>
          <p className="card-info-description">Résoudre une problématique, l’avertir de l’arrivée d’un nouvel animal dans votre foyer, le préparer à un déménagement ou tout simplement lui signifier que vous l’aimez. 
            C’est ce qu’attend tout être sensible ; plus encore nos animaux de compagnie qui ne sont pas auprès de nous par « hasard ». Ce ne sont pas de simples compagnons de vie, mais aussi des guides qui nous aident 
            à surmonter les épreuves que nous sommes menés à vivre durant notre expérience terrestre.</p>
          <p className="card-info-description">Avertissement : La communication animale ne sert en aucun cas à donner un ordre quelconque à un animal, encore moins à l’asservir ou satisfaire l’ego et la curiosité. 
            La communication est au service et uniquement au service du mieux être de l’animal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardInfo;
