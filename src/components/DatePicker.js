import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
