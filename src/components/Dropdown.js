import React from 'react';

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
