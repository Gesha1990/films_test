import React from 'react';
import Spinner from 'src/assets/spinner.svg';
import './style.css';

function Loading({ loading }: { loading: boolean }) {
  return (
    <>
      {loading && (
        <div className="loadingWrapper">
          <img src={Spinner} />
        </div>
      )}
    </>
  );
}
export default Loading;
