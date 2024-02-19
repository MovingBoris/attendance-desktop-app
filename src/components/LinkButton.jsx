import PropTypes from 'prop-types';

//Button takes a message and local link
const LinkButton = ({message, localLink}) => {
    //Manual and automatic style generation
    const buttonStyle = {
        backgroundColor: 'PaleGoldenRod',
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '20px',
      };

  //returns the button inside of a div, makes padding and styling easier
  return (
    <div>
      <a href={localLink}>
        <button style={buttonStyle}>
          {message}
        </button>
      </a>
    </div>
  );
};

//Required properties to use the component
LinkButton.propTypes = {
  message: PropTypes.string.isRequired,
  localLink: PropTypes.string.isRequired,
};

export default LinkButton;