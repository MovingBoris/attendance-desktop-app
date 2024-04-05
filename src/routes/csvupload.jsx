import React, { useState } from "react";
import Navbar from "../components/NavigationBar";

function CsvUpload() {
  const YourComponent = () => {
    const [file, setFile] = useState(null);
    const [classId, setClassId] = useState('');

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    };

    const handleClassIdChange = (event) => {
      setClassId(event.target.value);
    };

    const handleUpload = async () => {
      if (!file) {
        alert('Please select a file.');
        return;
      }

      const formData = new FormData();
      formData.append('classId', classId);
      formData.append('csv', file);
      

      try {
        const response = await fetch('https://localhost:7167/api/Students/generate-multiple', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          alert('File uploaded successfully!');
        } else {
          const errorMessage = await response.text();
          alert(`Error: ${errorMessage}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert(`An error occurred while uploading the file. ${error}`);
      }
    };

    return (
      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label htmlFor="classIdInput" style={styles.label}>Class ID:</label>
          <input id="classIdInput" type="text" value={classId} onChange={handleClassIdChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="fileInput" style={styles.label}>Select CSV file:</label>
          <input id="fileInput" type="file" accept=".csv" onChange={handleFileChange} style={styles.input} />
        </div>
        <button onClick={handleUpload} style={styles.button}>Upload</button>
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

export default CsvUpload;
