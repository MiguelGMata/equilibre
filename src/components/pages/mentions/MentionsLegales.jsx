import React, { useState } from 'react';
import './mentionsLegales.css';

const MentionsLegales = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <a className="close-modal-btn" href="/">✖</a>
        <h1>Mentions Légales</h1>
        <h2>1. Éditeur du site</h2>
        <p><strong>Nom de l'entreprise : Equilibre & Vitalité</strong></p>
        <p>Adresse : 123 Rue de l'Équilibre, 75000 Paris, France</p>
        <p>Téléphone : +33 1 23 45 67 89</p>
        <p>Email : contact@equilibre-vitalite.fr</p>
        <p>RCS : 123 456 789 RCS Paris</p>
        <p>Capital social : 10 000 EUR</p>

        <h2>2. Directeur de publication</h2>
        <p><strong>Nom : Jean Dupont</strong></p>
        <p>Email : jean.dupont@equilibre-vitalite.fr</p>

        <h2>3. Hébergeur</h2>
        <p><strong>Nom de l'hébergeur : OVH</strong></p>
        <p>Adresse : 2 Rue Kellermann, 59100 Roubaix, France</p>
        <p>Téléphone : +33 9 70 80 90 11</p>
        <p>Email : support@ovh.com</p>

        <h2>4. Propriété intellectuelle</h2>
        <p>Les contenus du site (textes, images, logos, etc.) sont protégés par des droits d'auteur et ne peuvent être reproduits sans autorisation préalable de l'éditeur.</p>

        <h2>5. Données personnelles</h2>
        <p>Les données collectées sur ce site sont utilisées uniquement dans le cadre de la gestion de votre demande. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données conformément à la loi Informatique et Libertés.</p>

        <h2>6. Cookies</h2>
        <p>Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences en matière de cookies dans les paramètres de votre navigateur.</p>

        <h2>7. Liens externes</h2>
        <p>Ce site peut contenir des liens vers d'autres sites. Nous ne sommes pas responsables du contenu de ces sites externes.</p>

        <h2>8. Loi applicable</h2>
        <p>Les présentes mentions légales sont régies par la loi française. Tout litige relatif à l'utilisation de ce site sera soumis à la compétence des tribunaux français.</p>
      </div>
    </div>
  );
};

export default MentionsLegales;

