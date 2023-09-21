import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie'; // Import the js-cookie library

const LawyerEnrollmentForm = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleEnrollmentNumberChange = (e) => {
    setEnrollmentNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Set cookies for lawyerId and type
    Cookies.set('lawyerId', enrollmentNumber);
    Cookies.set('type', 'lawyer');

    // Handle form submission here (e.g., send data to server, validation, etc.)
    console.log('Enrollment Number:', enrollmentNumber);
    console.log('Password:', password);
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
