import React from 'react';
import Registration from './Registration';
import Authorize from './Authorize';

const Forms  = () => {
  return (
    <div className="container">
      <div className="forms">
        <Registration />
        <Authorize />
      </div>
    </div>
  );
};

export default Forms;