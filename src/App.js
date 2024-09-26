import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { EmployeeProvider } from '../src/EmployeeContext'; // Import du contexte
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import './App.css';

const Navigation = () => {
  const location = useLocation(); // Utilisé pour obtenir le chemin actuel

  return (
    <nav>
      <ul>
        {location.pathname === '/' ? (
          <li>
            <Link to="/employee-list"></Link> 
          </li>
        ) : (
          <li>
            <Link to="/"></Link> 
          </li>
        )}
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <EmployeeProvider> {/* Fournir le contexte à toute l'application */}
      <Router>
        <div>
          {/* Afficher la navigation conditionnelle */}
          <Navigation />

          {/* Définition des routes pour chaque page */}
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
        </div>
      </Router>
    </EmployeeProvider>
  );
};

export default App;
