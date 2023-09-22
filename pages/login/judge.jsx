// pages/judge/enrollment.js
import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

const JudgeEnrollment = () => {
  const [judgesUniqueId, setJudgesUniqueId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleJudgesUniqueIdChange = (e) => {
    setJudgesUniqueId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your login API endpoint
      const response = await axios.post('/api/login/judge', {
        judgesUniqueId,
        password,
      });

      // Check if login was successful
      if (response.status === 200) {
        // Redirect to the judge's dashboard with their ID
        router.push(`/judge/${response.data.id}`);
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
              <h2>Judge Enrollment</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="judgesUniqueId">Judges Unique ID</label>
                  <input
                      type="text"
                      className="form-control"
                      id="judgesUniqueId"
                      placeholder="Enter your Judges Unique ID"
                      value={judgesUniqueId}
                      onChange={handleJudgesUniqueIdChange}
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

export default JudgeEnrollment;
