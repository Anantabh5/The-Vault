// pages/employee/login.js
import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

const EmployeeLogin = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Send a POST request to your login API endpoint
      const response = await axios.post('/api/login/employee', {
        employeeId,
        password,
      });

      // Check if login was successful
      if (response.status === 200) {
        // Redirect to the employee's dashboard with their ID
       await router.push(`/employee/${response.data.id}`);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
      <Layout>
        <div className="container mt-5">
          <h2>Employee Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="employeeId">Employee ID</label>
              <input
                  type="text"
                  className="form-control"
                  id="employeeId"
                  placeholder="Enter employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>

            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </Layout>
  );
}

export default EmployeeLogin;
