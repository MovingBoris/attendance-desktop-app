import React from "react";
import PropTypes from 'prop-types';

//Button takes a message
const Button = ({message}) => {
    //Manual and automatic style generation
    const buttonStyle = {
        backgroundColor: 'PaleGoldenRod',
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      };

  //returns the button inside of a div, makes padding and styling easier
  return (
    <>
        <button style={buttonStyle}>
            {message}
        </button>
    </>
  );
};

//Required properties to use the component
Button.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Button;