import React from 'react';
import Button from 'react-bootstrap/Button';

import './ButtonCmp.scss';

const ButtonCmp = ({ text, onClick }) => {
  return (
    <Button
      variant="success"
      className="btnCmp"
      onClick={onClick}
      data-test="component-button"
    >
      {text}
    </Button>
  );
};

export default ButtonCmp;
