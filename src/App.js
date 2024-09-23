import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import CreateEmployee from '../src/pages/CreateEmployee';
import EmployeeList from '../src/pages/EmployeeList';
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
  );
};

export default App;
