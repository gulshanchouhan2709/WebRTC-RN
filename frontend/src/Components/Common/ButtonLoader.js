import React from 'react';
import { Link } from 'react-router-dom';
import {
  Spinner,
} from 'reactstrap';

const ButtonLoader = ({ color="danger", btnClasses = '', defaultStyle=null }) => {
  return (
    <React.Fragment>
      <div className={`btn btn-${color} btn-load ${btnClasses}`} style={defaultStyle}>
        <span className="d-flex align-items-center">
          <Spinner size="sm" className="flex-shrink-0">
            {' '}
            Loading...{' '}
          </Spinner>
          <span className="flex-grow-1 ms-2">Loading...</span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default ButtonLoader;
