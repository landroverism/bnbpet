import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

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
      const response = await fetch('http://127.0.0.1:5555/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // User successfully registered, you can navigate to the login page or perform other actions.
        navigate('/log-in');
      } else {
        // Handle registration error
        // You can set an error state or show an error message
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="sign_up_page">
      <div className="sign_up_container">
        <h1 className="sign_up_header">Sign Up</h1>
        <hr />
        <h2 className="welcome">Welcome to Pawbnb</h2>

        <form className="sign_up_form" onSubmit={handleSubmit}>
          <input
            className="sign_up_email_input"
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            className="sign_up_ps_input"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <input className="sign_up_submit" type="submit" value="Submit" />
        </form>
      </div>

      <footer>
        <p>© 2022 Pawbnb Inc.</p>
      </footer>
    </div>
  );
}

export default SignUp;
