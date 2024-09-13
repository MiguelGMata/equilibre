import React from 'react';
import './cardCare.css';

const CardCare = () => {
  return (
    <section className="care">
      <div className="care-content">
        <div className="care-cards">
          <div className="care-card">
            <div className="icon">🔋</div> 
            <h2>Fatigue</h2>
          </div>
          <div className="care-card">
            <div className="icon">🔄</div>  
            <h2>Baisse de tonus</h2>
          </div>
          <div className="care-card">
            <div className="icon">💔</div>  
            <h2>Douleurs</h2>
          </div>
          <div className="care-card">
            <div className="icon">😰</div>  
            <h2>Stress Angoisses</h2>
          </div>
          <div className="care-card">
            <div className="icon">🌙</div>  
            <h2>Insomnies</h2>
          </div>
          <div className="care-card">
            <div className="icon">😠</div>  
            <h2>Irritabilité</h2>
        </div>
        </div>
      </div>
    </section>          
  );
};

export default CardCare;


