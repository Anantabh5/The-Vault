// CompanyLogin.js
import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie';
import axios from 'axios'; // Import axios for making API requests
import { useRouter } from 'next/router';

function CompanyLogin() {
  const [companyName, setCompanyName] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Send a POST request to your login API endpoint
      const response = await axios.post('/api/login/company', {
        companyName,
        companyId,
        password,
      });

      // Check if login was successful
      if (response.status === 200) {
        // Redirect to the company's dashboard using Next.js router
        router.push(`/company/${companyId}`);
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
