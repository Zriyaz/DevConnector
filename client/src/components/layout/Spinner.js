import React from 'react';
import spinner from './spinner.gif';
function Spinner() {
  return (
    <>
      <img
        src={spinner}
        alt='loaging'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </>
  );
}

export default Spinner;
