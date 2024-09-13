import React, { useState } from 'react';
import './menuCare.css';


const MenuCare = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menuItems = [
    {
      id: 1,
      title: 'Définition',
      icon: '🔋',
      descriptionA: "L'énergie est une force qui permet de mettre en mouvement, d'avancer, de progresser, d'évoluer. Au-delà de la matière, il n'y a pas de vide, il n'y a que de l'énergie. De l'échange d'information. La matière est elle-même de l'énergie.",
      descriptionB: "Notre corps physique est avant tout un système énergétique.",
      descriptionC: "Notre environnement, nos pensées, notre mode de vie, influent sur notre énergie.",
      descriptionD: "Plus vous cultiverez de belles énergies, plus vous vibrerez sur de hautes fréquences et vous rayonnerez tel un soleil !",
      descriptionE: "Les thérapies vibratoires permettent de travailler sur les blocages, les pertes, les fuites énergétiques. Elles activent son pouvoir d'autoguérison..",
    },
    {
      id: 2,
      title: "Les champs d'application",
      icon: '🧘‍♂️',
      descriptionA: "Le travail de l’énergie est un travail délicat, il agit sur le subtil.",
      descriptionB: "Il redynamise les circuits énergétiques des patients.",
      descriptionC: "Un soin énergétique permet : libérer les tensions accumulées, calmer les états de stress et d'anxiété, d'apaiser et détendre le corps physique autant que le corps mental, d'autoriser une meilleure circulation vibratoire de l'énergie vitale, d'harmoniser le corps et l'esprit, de mener le corps et l'esprit vers la guérison, d'alléger le poids des douleurs et des malaises et de renforcer préventivement le système immunitaire" ,
      descriptionD: "C’est un travail d’âme à âme, en relation avec les êtres de lumière et d’amour divin, qu’il ne faut jamais oublier de remercier à chaque fin de séance.",
      descriptionE: "Petit exercice pratique pour ressentir l'énergie : fermez les yeux, tendez vos bras devant vous, vos mains ouvertes de manière verticale. Respirez par le ventre (votre ventre se gonfle lorsque vous inspirez et se creuse lorsque vous expirez). Rapprochez vos mains ouvertes, paumes face à face, dans un très léger mouvement de va-et-vient. Vous devriez ressentir une légère résistance à un certain moment.",
  
    },
    {
      id: 3,
      title: "Déroulement d'une séance",
      icon: '🌙',
      descriptionA: "Soin harmonisation du corps éthérique et des chakras. Vous vous allongez sur la table de soins. Habillé. Je travaille avec les huiles essentielles et les minéraux afin de redonner tout leur éclat à votre corps éthérique et vos chakras. À la fin – en bouquet final – je vous propose un massage du dos avec une pierre de massage.",
      descriptionB: "Objectif de ce soin énergétique : Recharger vos batteries morale et physique",
      descriptionC: "Développer l'amour de soi, diminuer les inconforts physiques, adopter les bons gestes au quotidien, apaiser votre émotionnel, vous libérer des angoisses, apprendre à gérer la peur, faire baisser le stress, la nervosité, l'irritabilité, vous aider à reprendre confiance dans votre vie intime et dégager les énergies nuisibles et toxiques pour que vous puissiez rayonner et attirer des évènements positifs dans votre vie.  ",
      descriptionD: "Soin Lahochi",
      descriptionE: "Une première étape est la rencontre, la discussion, la réalisation de votre anamnèse. Je suis à votre écoute. Je pourrai adapter mes soins et mes intentions selon vos besoins. Puis ensuite vous vous allongez tout habillé sur la table de soin. Je fais des appositions avec mes mains sur différentes parties de votre corps. Je suis canal de l'énergie directement reliée à la Source. Je peux réaliser un soin Lahochi à distance. Je peux en réaliser également sur votre(s) animal(aux) avec sa photo et son nom.",
    },
    {
      id: 4,
      title: "Le cabinet",
      icon: '❤️',
      descriptionA: "Mon cabinet de thérapie énergétique et holistique situé sur Limoges est un espace chaleureux et apaisant conçu pour favoriser la détente et la guérison.",
      descriptionB: "J'utilise mon expertise pour vous aider à retrouver un équilibre énergétique et émotionnel grâce à des techniques de guérison naturelles et holistiques",
      descriptionC: "Une atmosphère accueillante et naturelle a été mise en place afin de vous offrir un confort optimal lors des séances de thérapie vibratoire ou de Lahochi.",
      descriptionD: "Je vous accueille : Du Lundi au Samedi de 9h00 à 20h00",
      descriptionE: "N'hésitez pas à me contacter par téléphone, e-mail ou via le formulaire de contact disponible sur le site.",
    },
    {
      id: 5,
      title: "Notes importantes",
      icon: '📝',
      descriptionA: "Je précise que je ne suis pas médecin, que je ne pratique pas la médecine et ne formule pas de diagnostic.",
      descriptionB: "En aucun cas, un énergéticien ou un magnétiseur ne vous demandera d’arrêter un traitement médical en cours. Le magnétisme et les soins énergétiques peuvent compléter la médecine allopathique et en aucun cas la remplacer.",
      descriptionC: "Quelques heures après un soin, vous pourriez ressentir de la fatigue, des douleurs physiques.",
      descriptionD: "Pas d'inquiétudes, elles devraient s'estomper rapidement. Prévoyez ainsi si c'est votre premier soin énergétique de vous réserver une journée de repos le lendemain.",
      descriptionE: "Pensez à bien boire de l'eau.",
    },
  ];

  return (
    <div className="menu-card"> {/* Carta contenedora */}
      <div className="menu-container">
        <div className="menu-left">
          <h1 className="menu-title">Decouvrez mes services</h1>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`menu-item ${selectedMenu === item.id ? 'active' : ''}`}
                onClick={() => setSelectedMenu(item.id)}
              >
                <span className="menu-item-icon">{item.icon}</span>
                <span className="menu-item-title">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="menu-right">
          {selectedMenu && (
            <div className="menu-description">
              <h2 className="menu-icon-large">{menuItems[selectedMenu - 1].title} {menuItems[selectedMenu - 1].icon}</h2>
              <p>{menuItems[selectedMenu - 1].descriptionA}</p>
              <h3>{menuItems[selectedMenu - 1].descriptionB}</h3>
              <p>{menuItems[selectedMenu - 1].descriptionC}</p>
              <h3>{menuItems[selectedMenu - 1].descriptionD}</h3>
              <p>{menuItems[selectedMenu - 1].descriptionE}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCare;

