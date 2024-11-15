import React from 'react';
import './style.css';

export const CustomInput = () => {
  return (
    <label htmlFor="inp" className="inp">
      <input type="text" id="inp" placeholder="Search film" />
    </label>
  );
};
