import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie'; // Import the js-cookie library

const LogincUser = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailOrUsernameChange = (e) => {
    setEmailOrUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call to verify credentials)
    console.log('Email/Username:', emailOrUsername);
    console.log('Password:', password);

    // Simulate a successful login response from the backend
    const userId = '123'; // Replace with the actual user ID from your backend
    const userType = 'common'; // Replace with the actual user type

    // Store user type and userId in cookies
    Cookies.set('userType', userType);
    Cookies.set('userId', userId);

    // Redirect to the dashboard or another page
    // You can use Next.js Router for this purpose
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              style={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              onSubmit={handleSubmit}
            >
              <h2 className="text-center mb-4">Login</h2>
              <div className="mb-3">
                <label htmlFor="emailOrUsername" className="form-label">
                  Email/Username
                </label>
                <input
                  type="text"
                  id="emailOrUsername"
                  name="emailOrUsername"
                  className="form-control"
                  value={emailOrUsername}
                  onChange={handleEmailOrUsernameChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <hr className="my-4" />
                <button type="button" className="btn btn-google">
                  Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LogincUser;
