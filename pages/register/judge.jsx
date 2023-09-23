import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../../components/layout";
import Cookies from "js-cookie";
import { useRouter } from 'next/router';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    judgeUniqueId: '',
    email: '',
    password: '',
    mobileNumber: '',
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Cookies.set('judgeUniqueId', value); // Store judgeUniqueId in a cookie
    // Cookies.set('type', 'judge');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register/judge', formData);

      if (response.status === 201) {
        // Registration successful, redirect to the judge's profile page
        router.push(`/judge/${response.data.id}`);
      } else {
        // Handle other response status codes or errors
        console.error('Registration failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2>Registration Form for Judge</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="judgeUniqueId">Judge's Unique ID</label>
            <input
              type="text"
              className="form-control"
              id="judgeUniqueId"
              name="judgeUniqueId"
              value={formData.judgeUniqueId}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default RegistrationForm;
