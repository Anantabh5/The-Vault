import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie'; // Import the js-cookie library

const JudgeEnrollment = () => {
  const [judgesUniqueId, setJudgesUniqueId] = useState('');
  const [password, setPassword] = useState('');

  const handleJudgesUniqueIdChange = (e) => {
    setJudgesUniqueId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Set cookies for judgeId and type
    Cookies.set('judgeId', judgesUniqueId);
    Cookies.set('type', 'judge');

    // Handle form submission here (e.g., send data to server, validation, etc.)
    console.log('Judges Unique ID:', judgesUniqueId);
    console.log('Password:', password);
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
