import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ loading }) => {
  return (
    <div className="spinner-container">
      <ClipLoader color="#36D7B7" loading={loading} size={50} />
    </div>
  );
};

export default Spinner;
