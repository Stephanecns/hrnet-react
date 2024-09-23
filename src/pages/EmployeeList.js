import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Import du header

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Récupérer les employés stockés dans localStorage
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(savedEmployees);
  }, []);

  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateOfBirth,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
    },
    {
      name: 'City',
      selector: (row) => row.city,
    },
    {
      name: 'State',
      selector: (row) => row.state,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
    },
  ];

  return (
    <> <Header />
    <div className="employee-list-container">
      <h1>Current Employees</h1>
      <DataTable
        columns={columns}
        data={employees}
        pagination
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
