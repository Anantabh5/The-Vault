// pages/lawyer/enrollment.js
import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

const LawyerEnrollmentForm = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEnrollmentNumberChange = (e) => {
    setEnrollmentNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your login API endpoint
      const response = await axios.post('/api/login/lawyer', {
        enrollmentNumber,
        password,
      });

      // Check if login was successful
      if (response.status === 200) {
        // Redirect to the lawyer's dashboard with their ID
        router.push(`/lawyer/${response.data.id}`);
      } else {
        console.error('Enrollment failed');
      }
    } catch (error) {
      console.error('Enrollment error:', error);
    }
  };

  return (
      <Layout>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2>Lawyer Enrollment</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="enrollmentNumber">Advocate Enrollment Number</label>
                  <input
                      type="text"
                      className="form-control"
                      id="enrollmentNumber"
                      placeholder="Enter your Advocate Enrollment Number"
                      value={enrollmentNumber}
                      onChange={handleEnrollmentNumberChange}
                      required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default LawyerEnrollmentForm;
