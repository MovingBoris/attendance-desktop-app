import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import '../login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "rememberme") setRememberme(e.target.checked);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // validates username and passwords
    if (!username || !password) {
      setError("Please fill in all fields.");
    } else {

      setError("");
  
      var loginurl = "";
      if (rememberme === true)
        loginurl = "/api/Authentication/login?useCookies=true";
      else
        loginurl = "/api/Authentication/login?useSessionCookies=true";
  
      fetch(loginurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username, 
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {

          console.log(data);
          if (data.message === "Login successful") {
            if (data.role === "Admin") {
              // Redirect to the admin page
              navigate("/AdminPage");
            } else if (data.role === "Instructor") {
              // Redirect to the instructor page
              navigate("/InstructorPage");
            } else {
              // if not in role, redirect to unauthorized page
              navigate("/Unauthorized");
            }
          } else {
            setError("Error Logging In.");
          }
        })
        .catch((error) => {
          // handle network error
          console.error(error);
          setError("Error Logging in.");
        });
    }
  };
  
  return (
    <div className="login-register-bg">
      <div className="containerbox">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <div>
            <input
              type="checkbox"
              id="rememberme"
              name="rememberme"
              checked={rememberme}
              onChange={handleChange}
            />
            <span>Remember Me</span>
          </div>
          <button type="submit">Login</button>
          <button onClick={handleRegisterClick}>Register</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
      <div className="footer">
        <LinkButton className="loginButton" message="Admin Page" componentRoute="/AdminPage" />
        <LinkButton className="loginButton" message="Instructor Page" componentRoute="/InstructorPage" />
      </div>
    </div>
  );
}

export default Login;
