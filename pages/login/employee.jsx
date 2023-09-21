import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie'; // Import js-cookie

function EmployeeLogin() {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle employee login logic here
    console.log('Employee Login:', {
      type: 'employee',
      employeeId,
      password,
    });

    // Store type and employeeId in cookies
    Cookies.set('type', 'employee');
    Cookies.set('employeeId', employeeId);
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
