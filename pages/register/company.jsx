import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from "js-cookie";
function Register() {
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [password, setPassword] = useState('');
  const [industry, setIndustry] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegistration = () => {
    // Handle company registration logic here
    if (agreeTerms) {
      // Perform registration actions
      console.log('Company Registered:', {
        companyName,
        businessEmail,
        industry,
        companySize,
      });
      Cookies.set('companyId', companyId);
      Cookies.set('type', 'company');
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <Layout>
    <div className="container mt-5">
      <h2>Company Registration</h2>
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
          <label htmlFor="businessEmail">Business Email</label>
          <input
            type="email"
            className="form-control"
            id="businessEmail"
            placeholder="Enter business email"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
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

        <div className="form-group">
          <label htmlFor="industry">Industry</label>
          <input
            type="text"
            className="form-control"
            id="industry"
            placeholder="Enter industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companySize">Company Size</label>
          <input
            type="text"
            className="form-control"
            id="companySize"
            placeholder="Enter company size"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            required
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreeTerms"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
            required
          />
          <label className="form-check-label" htmlFor="agreeTerms">
            I agree to the terms and conditions
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={handleRegistration}
        >
          Register
        </button>
      </form>
    </div>
    </Layout>
  );
}

export default Register;
