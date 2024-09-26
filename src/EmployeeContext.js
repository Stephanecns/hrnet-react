// src/context/EmployeeContext.js
import React, { createContext, useState } from 'react';

// Créer le contexte
export const EmployeeContext = createContext();

// Fournisseur du contexte
export const EmployeeProvider = ({ children }) => {
  // Initialiser les employés sans utiliser localStorage
  const [employees, setEmployees] = useState([]);

  // Fonction pour ajouter un employé (sans mise à jour dans localStorage)
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]); // Ajoute l'employé au contexte
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
