//Réimplémentation des listes déroulantes en React

import React from 'react';

// Composant Dropdown qui prend plusieurs props : 
// label (le texte à afficher pour le champ), options (un tableau d'options pour le menu déroulant), 
// selectedValue (la valeur actuellement sélectionnée), onChange (fonction à appeler lors d'un changement de sélection),
// et className (les classes CSS à appliquer au div contenant le dropdown)
const Dropdown = ({ label, options, selectedValue, onChange, className }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
