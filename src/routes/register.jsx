import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    // state variables for email and passwords
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    // state variable for error messages
    const [error, setError] = useState("");

    const handleLoginClick = () => {
        navigate("/login");
    }

    // handle change events for input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    // handle submit event for the form
    const handleSubmit = (e) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match.");
        } else {
            // clear error message
            setError("");
            // post data to the /register api
            fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            })

            .then((response) => {
                // Check if the response is successful
                if (response.ok) 
                {
                    // Handle successful registration
                    setError("Successful register.");
                    return response.json();
                } 
                else 
                {
                    // Parse the JSON error response
                    return response.json().then((errorData) => {
                        // Extract the error messages from the response
                        const errors = errorData.errors;
                        let errorMessage = "Error registering:";
                        
                        // Loop through the errors object and concatenate error messages
                        for (const key in errors) 
                        {
                            if (errors.hasOwnProperty(key)) 
                            {
                                errorMessage += " " + errors[key][0]; // Assuming each error key has only one message
                            }
                        }
                        
                        // Handle the error and display the error message
                        setError(errorMessage);
                    });
                }
            })

                .catch((error) => 
                {
                    // handle network error
                    console.error(error);
                    setError("Network Error: " + error);
                });
        }
    };

    return (
        <div className="login-register-bg">
        <div className="containerbox">
            <h3>Register</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                </div>
                <div>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
                <div>
                    <button onClick={handleLoginClick}>Go to Login</button>
                </div>
            </form>

            {error && <p className="error">{error}</p>}
        </div>
        </div>

    );
}

export default Register;
