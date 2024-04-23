import React, { useState } from "react";
import Navbar from "../components/NavigationBar";

function CreateQRCode() {
  const [inputData, setInputData] = useState("");
  const [qrCodeImage, setQrCodeImage] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/Classes/GenerateQRCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        const qrCodeImageData = await response.blob();
        setQrCodeImage(URL.createObjectURL(qrCodeImageData));
      } else {
        throw new Error("Failed to generate QR code");
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
      setError("Failed to generate QR code. Please try again.");
    }
  };

  const handleDownloadButtonClick = () => {
    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = qrCodeImage;
    anchor.download = "qr_code.png"; // Set the file name for download
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor); // Clean up anchor element
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="inputData" style={styles.label}>
                ClassId:
              </label>
              <input
                type="text"
                id="inputData"
                value={inputData}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>
              Generate QR Code
            </button>
          </form>
          {qrCodeImage && (
            <div style={styles.qrCodeContainer}>
              <img src={qrCodeImage} alt="QR Code" style={styles.qrCodeImage} />
              <button onClick={handleDownloadButtonClick} style={styles.downloadButton}>
                Download QR Code
              </button>
            </div>
          )}
          {error && <p className="error-message" style={styles.errorMessage}>Error: {error}</p>}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    width: "100%",
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
  qrCodeContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  qrCodeImage: {
    maxWidth: "300px",
  },
  downloadButton: {
    marginTop: "10px",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "16px",
  },
  errorMessage: {
    color: "red",
  },
};

export default CreateQRCode;
