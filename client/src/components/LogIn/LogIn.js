import React, { useState } from 'react';
import './LogIn.css';

function LogIn() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [token, setToken] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    event.persist();
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5555/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.user.token);
        // You can perform any additional actions on successful login
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="log_in_page">
      <div className="log_in_container">
        <h1 className="log_in_header">Log In</h1>
        <hr />
        <h2 className="welcome">Welcome back to Pawbnb</h2>

        <form className="log_in_form" onSubmit={handleSubmit}>
          <input
            className="log_in_email_input"
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            className="log_in_ps_input"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <button className="log_in_submit" type="submit">
            Submit
          </button>
        </form>

        {token && <p>Successfully logged in. Token: {token}</p>}
        {error && <p>Error: {error}</p>}
      </div>

      <footer>
        <p>© 2022 Pawbnb Inc.</p>
      </footer>
    </div>
  );
}

export default LogIn;
