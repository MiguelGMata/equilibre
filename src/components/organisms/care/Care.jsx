import React from 'react';
import CardCare from '../../moleules/card/CardCare';
import MenuCare from '../../moleules/menu/MenuCare';
import './care.css';

const Care = () => {
  return (
    <section className="care-container ">
        <h1 className="care-title">Soins énergétiques</h1>
        <p className="care-description">
          Rééquilibrer vos énergies afin de booster votre système immunitaire, développer votre bien-être, votre joie de vivre.
        </p>
        <CardCare/>
        <h1 className="care-title"> Des soins énergétiques 100% naturels  </h1>
        <MenuCare/>
    </section>
  );
};

export default Care;
