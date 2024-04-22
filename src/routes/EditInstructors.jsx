import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import "./TableFormat.css"; // Import CSS file for styling

function EditInstructors() {
    const [instructors, setInstructors] = useState([]);
    const [error, setError] = useState(null);
    const [selectedInstructorId, setSelectedInstructorId] = useState(null);
    const [formData, setFormData] = useState({});

    const handleGetInstructors = async () => {
        try {
            const response = await fetch("/api/Users"); 
            if (!response.ok) {
                throw new Error("Failed to fetch instructors");
            }
            const data = await response.json();
            // Extract the array of instructors from the response data
            const instructorsData = data.$values || []; 
            setInstructors(instructorsData);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        handleGetInstructors(); // this calls the function when the page loads
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

    const handleEditInstructor = (instructorId) => {
        // Find the instructor by its ID
        const selectedInstructor = instructors.find((instructor) => instructor.userId === instructorId);
        // Set the selected instructor ID
        setSelectedInstructorId(selectedInstructor.userId);
        // Set the form data with the selected instructor's details
        setFormData({
            userName: selectedInstructor.userName, // Assuming userName is the editable field
        });
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
                userId: selectedInstructorId // Add the userId field to the formData object
            };

            const response = await fetch(`/api/Users/${selectedInstructorId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFormData),
            });

            if (response.ok) {
                alert('Instructor updated successfully!');
                // Refresh instructors after successful update
                handleGetInstructors();
            } else {
                throw new Error('Failed to update instructor');
            }
        } catch (error) {
            console.error('Error updating instructor:', error);
            setError('Failed to update instructor. Please try again.');
        }
    };

    return (
        <div className="admin-instructors-container">
            <Navbar />
            <table className="tableAPI">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {instructors.map((instructor, index) => (
                        <tr key={index} className="instructor-row">
                            <td>{instructor.userId}</td>
                            <td>{instructor.userName}</td>
                            <td>
                                <button onClick={() => handleEditInstructor(instructor.userId)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedInstructorId && (
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="userName">Username:</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            )}
            {error && <p className="error-message">Error: {error}</p>}
        </div>
    );
}

export default EditInstructors;
