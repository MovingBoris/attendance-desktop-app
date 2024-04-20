import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";

function EditClass() {
  const [formData, setFormData] = useState({});
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);
  const [selectedClassId, setSelectedClassId] = useState(null);

  const handleGetClasses = async () => {
    try {
      const response = await fetch("/api/classes"); 
      if (!response.ok) {
        throw new Error("Failed to fetch classes");
      }
      const data = await response.json();
      const classesData = data.$values || []; 
      setClasses(classesData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleGetClasses();
  }, []);

  const handleEditClass = (classId) => {
    // Find the class by its ID
    const selectedClass = classes.find((classItem) => classItem.classId === classId);
    // Filter out the fields 'attends', 'instructor', and 'studentUus'
    const {$id, classId: omitClassId, attends, instructor, studentUus, ...formDataWithoutExcludedFields } = selectedClass;
    // Update the form data with the filtered data
    setFormData(formDataWithoutExcludedFields);
    // Set the selected class ID to indicate which class is being edited
    setSelectedClassId(selectedClass.classId);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedFormData = {
        ...formData,
        classId: selectedClassId, // Add the classId field to the formData object
      };

      const response = await fetch(`/api/Classes/${selectedClassId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        alert('Class updated successfully!');
        // Refresh classes after successful update
        handleGetClasses();
      } else {
        throw new Error('Failed to update class');
      }
    } catch (error) {
      console.error('Error updating class:', error);
      setError('Failed to update class. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.classesTableContainer}>
          <table className="tableAPI">
            <thead>
              <tr>
                <th>Class ID</th>
                <th>Semester Code</th>
                <th>Room</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Days</th>
                <th>Instructor ID</th>
                <th>Active</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem) => (
                <tr key={classItem.$id}>
                  <td>{classItem.classId}</td>
                  <td>{classItem.semesterCode}</td>
                  <td>{classItem.room}</td>
                  <td>{classItem.startTime}</td>
                  <td>{classItem.endTime}</td>
                  <td>{classItem.days}</td>
                  <td>{classItem.instructorId}</td>
                  <td>{classItem.isActive ? "Yes" : "No"}</td>
                  <td>
                    <button onClick={() => handleEditClass(classItem.classId)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {error && <p className="error-message">Error: {error}</p>}
        </div>
        {selectedClassId && (
          <div style={styles.formContainer}>
            <form onSubmit={handleFormSubmit}>
              {Object.keys(formData).map((key) => (
                <div key={key} style={styles.formGroup}>
                  <label htmlFor={key}>{key}</label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
              ))}
              <button type="submit" style={styles.button}>Save Changes</button>
            </form>
          </div>
        )}
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
  classesTableContainer: {
    marginBottom: "20px",
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
};

export default EditClass;
