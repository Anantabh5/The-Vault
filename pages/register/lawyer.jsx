import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../../components/layout";
import Cookies from "js-cookie";
import { useRouter } from 'next/router';

const RegistrationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    lawyerEnrollmentNumber: '',
    email: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register/lawyer', formData);
      console.log(response.data);
      alert('Registration successful');
      await router.push(`/lawyer/${response.lawyerId}`); // Assuming the response contains an 'id' field
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }

    // Cookies.set('lawyerid', formData.lawyerEnrollmentNumber);
    // Cookies.set('type', 'lawyer');
  };

  return (
      <Layout>
        <div className="container mt-5">
          <h2>Registration Form for Lawyers</h2>
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
              <label htmlFor="lawyerEnrollmentNumber">Lawyer Enrollment Number</label>
              <input
                  type="text"
                  className="form-control"
                  id="lawyerEnrollmentNumber"
                  name="lawyerEnrollmentNumber"
                  value={formData.lawyerEnrollmentNumber}
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
            {/* Additional lawyer-specific fields can be added here */}
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </Layout>
  );
};

export default RegistrationForm;
