import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//Button takes a message and component route
const LinkButton = ({message, componentRoute}) => {
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
      <Link to={componentRoute}>
        <button style={buttonStyle}>
          {message}
        </button>
      </Link>
    </div>
  );
};

//Required properties to use the component
LinkButton.propTypes = {
  message: PropTypes.string.isRequired,
  componentRoute: PropTypes.string.isRequired,
};

export default LinkButton;