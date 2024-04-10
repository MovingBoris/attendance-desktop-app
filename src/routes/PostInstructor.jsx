import React, { useState } from "react";
import Navbar from "../components/NavigationBar";

function AddInstructor() {
  const YourComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };

    const handleUpload = async () => {
      if (!username || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      const requestData = {
        Username: username,
        Password: password
      };

      try {
        const response = await fetch('api/Users/register_instructor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData),
        });
        if (response.ok) {
          alert('Instructor uploaded successfully!');
          window.location.href = '/AdminPage';
        } else {
          const errorMessage = await response.text();
          alert(`Error: ${errorMessage}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert(`An error occurred while uploading the instructor. ${error}`);
      }
    };

    return (
      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label htmlFor="usernameInput" style={styles.label}>Username:</label>
          <input id="usernameInput" type="text" value={username} onChange={handleUsernameChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="passwordInput" style={styles.label}>Password:</label>
          <input id="passwordInput" type="password" value={password} onChange={handlePasswordChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="confirmPasswordInput" style={styles.label}>Confirm Password:</label>
          <input id="confirmPasswordInput" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} style={styles.input} />
        </div>
        <button onClick={handleUpload} style={styles.button}>Upload Instructor</button>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <YourComponent />
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  formContainer: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px 0",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default AddInstructor;
