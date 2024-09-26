import React, { useState, useEffect, useContext } from 'react';
// Importation de la bibliothèque DataTable pour afficher les données dans un tableau avec des fonctionnalités comme la pagination, tri, et recherche
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { EmployeeContext } from '../EmployeeContext'; // Import du contexte

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext); // Utilisation du contexte des employés
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredEmployees(employees); // Initialisation des employés à partir du contexte
  }, [employees]);

  // Fonction pour filtrer les employés en fonction de la recherche
  useEffect(() => {
    const result = employees.filter(employee => {
      return (
        employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
        employee.department.toLowerCase().includes(search.toLowerCase()) ||
        employee.city.toLowerCase().includes(search.toLowerCase()) ||
        employee.state.toLowerCase().includes(search.toLowerCase()) ||
        employee.zipCode.includes(search)
      );
    });
    setFilteredEmployees(result);
  }, [search, employees]);

  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,  // Activer le tri
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate ? new Date(row.startDate).toLocaleDateString() : 'N/A',
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateOfBirth ? new Date(row.dateOfBirth).toLocaleDateString() : 'N/A',
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  return (
    <>
      <Header />
      <div className="employee-list-container">
        <h1>Current Employees</h1>

        {/* Champ de recherche */}
        <input 
          type="text" 
          placeholder="Search employees" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
        />

        <DataTable
          columns={columns}
          data={filteredEmployees}  // Utilisation de la liste filtrée
          pagination
          highlightOnHover
          pointerOnHover
        />

        {/* Lien vers la page d'accueil */}
        <div className="centered-link">
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
