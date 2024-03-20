import React from 'react';

const SquareWithImageAndForm = ({ imageUrl, labelText, onSubmit, logoUrl }) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src= {'/images/School.png'} alt="School" style={styles.image} />
      </div>
      <div style={styles.formContainer}>
        <label style={styles.label}>{labelText}</label>
        <input type="text" style={styles.input} />
        <button onClick={onSubmit} style={styles.button}>Submit</button>
        {logoUrl && <img src={'/images/logo.jpg'} alt="Logo" style={styles.logo} />}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #ccc',
    width: '800px',
    height: '425px',
    margin: 'auto',
    marginTop: '50px',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  formContainer: {
    flex: 1,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'salmon',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  logo: {
    width: '100px',
    height: '100px',
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px'
  },
};

export default SquareWithImageAndForm;
