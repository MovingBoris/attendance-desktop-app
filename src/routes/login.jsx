import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkButton from "../components/LinkButton";

function Login() {
  // state variables for email and passwords
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState(false);
  // state variable for error messages
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // handle change events for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "rememberme") setRememberme(e.target.checked);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  }

  // handle submit event for the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate email and passwords
    if (!email || !password) {
      setError("Please fill in all fields.");
    } else {
      // clear error message
      setError("");
      // post data to the /register api

      var loginurl = "";
      if (rememberme === true)
        loginurl = "/login?useCookies=true";
      else
        loginurl = "/login?useSessionCookies=true";

      fetch(loginurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

        .then((data) => {
          // handle success or error from the server
          console.log(data);
          if (data.ok) {
            setError("Successful Login.");
            window.location.href = '/AdminPage';
          }
          else
            setError("Error Logging In.");

        })
        .catch((error) => {
          // handle network error
          console.error(error);
          setError("Error Logging in.");
        });
    }
  };

  // JSX for your component
  return (
    <div className="containerbox">
      <h3>Login</h3>
      <LinkButton className="loginButton" message="Admin Page" componentRoute="/AdminPage" />
      <LinkButton className="loginButton" message="Instructor Page" componentRoute="/InstructorPage" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
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
  );
}

export default Login;
