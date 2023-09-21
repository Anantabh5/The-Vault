import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from "js-cookie";
function EmployeeRegister() {
  const [companyId, setCompanyId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleRegister = () => {
    // Handle employee registration logic here
    console.log('Employee Registration:', {
      companyId,
      employeeName,
      employeeId,
      password,
      mobileNumber,
    });
    Cookies.set('employeeid', employeeId);
    Cookies.set('type', 'employee');
  };

  return (
    <Layout>
    <div className="container mt-5">
      <h2>Employee Registration</h2>
      <form>
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
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="employeeName"
            placeholder="Enter employee name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>

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

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>

        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </div>
    </Layout>
  );
}

export default EmployeeRegister;
