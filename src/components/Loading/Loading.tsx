import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import './style.css';

function Loading() {
  return (
    <div className="loadingWrapper">
      <SpinnerCircular color="yellow" />
    </div>
  );
}
export default Loading;
