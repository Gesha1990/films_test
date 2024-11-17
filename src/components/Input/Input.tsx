import React from 'react';
import './style.css';
import { IProps } from './interfaces';

const CustomInput = (props: IProps) => {
  return (
    <label htmlFor="inp" className="inp">
      <input type="text" id="inp" {...props} placeholder="Search film" />
    </label>
  );
};
export default CustomInput;
