import React from 'react';
import '../App.css';
import SquareWithImageAndForm from '../components/SquareWithImageAndForm'; // Import the component

const login = () => {
  const handleSubmit = () => {
    // Handle form submission logic here
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