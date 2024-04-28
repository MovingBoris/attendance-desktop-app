import React from 'react';

const UnauthorizedPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>You are unauthorized to access this resourse. </h1>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: 'red',
    padding: '20px',
  },
  heading: {
    color: 'white',
  },
  imageContainer: {
    marginTop: '20px',
  },
  image: {
    width: '50%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
};

export default UnauthorizedPage;
