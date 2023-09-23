import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    securityPin: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register/cuser', formData);

      if (response.status === 201) {
        // Registration successful, redirect to the user's profile page
        router.push(`/cuser/${response.data.id}`);
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
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
            value={formData.mobileNumber}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="securityPin">Security Pin</label>
          <input
            type="password"
            className="form-control"
            id="securityPin"
            name="securityPin"
            value={formData.securityPin}
            onChange={handleChange}
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
