import React from 'react';

const LogoTooltip = (props) => {
  return (
    <div>      
        <h1 className="signature">Louer plus vite et plus simplement</h1>
        <div className="cta">          
          <a href="https://www.unkle.fr/garant-location" className="cta-loc">
            Je suis locataire
          </a>
          <a href="https://www.unkle.fr/assurance-loyer-impaye" className="cta-prop">
            Je suis propriétaire
          </a>
        </div>
    </div>
  );
}; 

export default LogoTooltip;