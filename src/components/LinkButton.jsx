import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../LinkButton.css'; // Import CSS file for additional styles
import { useEffect } from 'react';

const LinkButton = ({ message, componentRoute }) => {
    useEffect(() => {
        const button = document.querySelector('.link-button');
        if (button) {
            button.classList.remove('animate'); // Remove the animation class
            void button.offsetWidth; // Trigger reflow
            button.classList.add('animate'); // Add the animation class to trigger animation
        }
    }, []); // Run once on component mount

    return (
        <div>
            <Link to={componentRoute}>
                <button className="link-button">
                    {message}
                </button>
            </Link>
        </div>
    );
};

LinkButton.propTypes = {
    message: PropTypes.string.isRequired,
    componentRoute: PropTypes.string.isRequired,
};

export default LinkButton;
