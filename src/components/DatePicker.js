//Conversion d'un plugin jQuery en React
// Importation de React et du composant DatePicker de la bibliothèque react-datepicker
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Composant CustomDatePicker qui prend plusieurs props : 
// label (le texte à afficher pour le champ), selectedDate (la date sélectionnée), onChange (la fonction pour modifier la date), 
// et className (les classes CSS à appliquer à l'élément div qui enveloppe le DatePicker)
const CustomDatePicker = ({ label, selectedDate, onChange, className }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
};

export default CustomDatePicker;
