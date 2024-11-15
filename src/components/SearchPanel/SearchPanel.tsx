import React from 'react';
import './style.css';
import { CustomInput } from '../Input/Input';

const SearchPanel = () => {
  return (
    <div className="panelWrapper">
      <CustomInput />
    </div>
  );
};
export default React.memo(SearchPanel);
