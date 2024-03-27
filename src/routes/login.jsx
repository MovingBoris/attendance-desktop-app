import React from 'react';
import '../App.css';
import SquareWithImageAndForm from '../components/SquareWithImageAndForm'; // Import the component
import { Link } from 'react-router-dom';

const login = () => {
  const handleSubmit = () => {
    // Handle form submission logic here
    <Link to={'/InstructorPage'}>
    </Link>
  };

  return (
    <div>
      <h1>Sign In Here</h1>
      <SquareWithImageAndForm 
        imageUrl= '../images/School.png'
        labelText="Enter UUID to continue"
        onSubmit={handleSubmit}
        logoUrl='/logo.jpg'
      />
    </div>
  );
};

export default login;