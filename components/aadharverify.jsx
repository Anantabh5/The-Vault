import React, { useState } from 'react';

const VerifyYourself = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [permission, setPermission] = useState(false);

  const handleAadharInputChange = (e) => {
    setAadharNumber(e.target.value);
  };

  const handlePermissionChange = () => {
    setPermission(!permission);
  };

  const handleUpdateClick = () => {
    // Add logic to send Aadhar and permission to the server
    if (aadharNumber && permission) {
      // Make an API call or perform other actions here
      console.log('Aadhar Number:', aadharNumber);
      console.log('Permission:', permission);
    } else {
      alert('Please enter Aadhar number and grant permission.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Verify Yourself</h2>
      <div className="form-group">
        <label htmlFor="aadharNumber">Aadhar Number</label>
        <input
          type="text"
          className="form-control"
          id="aadharNumber"
          value={aadharNumber}
          onChange={handleAadharInputChange}
          placeholder="Enter Aadhar Number"
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="permissionCheck"
          checked={permission}
          onChange={handlePermissionChange}
        />
        <label className="form-check-label" htmlFor="permissionCheck">
          I give permissions to E-Vault to fetch my e-KYC details from UIDAI
        </label>
      </div>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={handleUpdateClick}
      >
        Update
      </button>
    </div>
  );
};

export default VerifyYourself;
