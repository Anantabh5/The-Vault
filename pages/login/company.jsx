import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie'; // Import js-cookie

function CompanyLogin() {
  const [companyName, setCompanyName] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle company login logic here
    console.log('Company Login:', {
      type: 'company',
      companyName,
      companyId,
      password,
    });

    // Store type and companyId in cookies
    Cookies.set('type', 'company');
    Cookies.set('companyId', companyId);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2>Company Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="companyId">Company ID</label>
            <input
              type="text"
              className="form-control"
              id="companyId"
              placeholder="Enter company ID"
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
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

export default CompanyLogin;
