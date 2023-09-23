import React, { useState } from 'react';
import Layout from '../../components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginCUser = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [securityPin, setSecurityPin] = useState('');
  const router = useRouter();

  const handleEmailOrUsernameChange = (e) => {
    setEmailOrUsername(e.target.value);
  };

  const handleSecurityPinChange = (e) => {
    setSecurityPin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your login API endpoint
      const response = await axios.post('/api/login/cuser', {
        emailOrUsername,
        securityPin,
      });

      // Check if login was successful
      if (response.status === 200 && response.data.text === "verified") {
        // Redirect to the user's dashboard or profile page
        await router.push(`/cuser/${response.data.id}`);
      } else {
        console.error('Login failed');
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again later.');
    }
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
                <label htmlFor="securityPin" className="form-label">
                  Security Pin
                </label>
                <input
                  type="password"
                  id="securityPin"
                  name="securityPin"
                  className="form-control"
                  value={securityPin}
                  onChange={handleSecurityPinChange}
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

export default LoginCUser;
