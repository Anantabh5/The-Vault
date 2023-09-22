import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

function EmployeeRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyId: '',
    employeeName: '',
    employeeId: '',
    password: '',
    mobileNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async () => {
    // Handle employee registration logic here
    try {
      const response = await axios.post('/api/register/employee', formData);
      console.log(response.data);
      alert('Registration successful');
      await router.push(`/company/${response.data.id}`); // Assuming the response contains an 'id' field
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
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
                  name="companyId"
                  placeholder="Enter company ID"
                  value={formData.companyId}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="employeeName">Employee Name</label>
              <input
                  type="text"
                  className="form-control"
                  id="employeeName"
                  name="employeeName"
                  placeholder="Enter employee name"
                  value={formData.employeeName}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="employeeId">Employee ID</label>
              <input
                  type="text"
                  className="form-control"
                  id="employeeId"
                  name="employeeId"
                  placeholder="Enter employee ID"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter mobile number"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
              />
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

export default EmployeeRegistration;
