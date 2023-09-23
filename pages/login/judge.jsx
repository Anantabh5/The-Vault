import React, { useState } from 'react';
import Layout from '../../components/layout';
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

      // Check if enrollment was successful
      if (response.status === 200) {
        // Redirect to the judge's dashboard with their ID
        router.push(`/judge/${response.data.id}`);
      } else {
        console.error('Enrollment failed');
        alert('Enrollment failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      alert('Enrollment failed. Please try again later.');
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Judge Enrollment</h2>
            <form
              style={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="judgesUniqueId" className="form-label">
                  Judges Unique ID
                </label>
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
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
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
