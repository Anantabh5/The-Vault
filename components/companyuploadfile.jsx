import React, { useState } from 'react';

const sampleEmployees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Alice Johnson' },
  { id: 3, name: 'Bob Smith' },
  // Add more employees as needed
];

function CompanyUploadFile() {
  const [selectedOption, setSelectedOption] = useState('ownDrive');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [fileName, setFileName] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files[0].name);
  };

  const handleUpload = () => {
    // Simulate file upload process (you can replace this with your actual upload logic)
    setTimeout(() => {
      setIsUploaded(true);
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <h2>File Upload</h2>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="uploadOption"
          id="ownDrive"
          value="ownDrive"
          checked={selectedOption === 'ownDrive'}
          onChange={handleOptionChange}
        />
        <label className="form-check-label" htmlFor="ownDrive">
          Upload to Own Drive
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="uploadOption"
          id="employeeDrive"
          value="employeeDrive"
          checked={selectedOption === 'employeeDrive'}
          onChange={handleOptionChange}
        />
        <label className="form-check-label" htmlFor="employeeDrive">
          Upload to Employee's Drive
        </label>
      </div>

      {selectedOption === 'employeeDrive' && (
        <div className="form-group mt-2">
          <label htmlFor="employeeSelect">Select Employee:</label>
          <select
            className="form-control"
            id="employeeSelect"
            value={selectedEmployee}
            onChange={handleEmployeeChange}
          >
            <option value="">Select Employee</option>
            {sampleEmployees.map((employee) => (
              <option key={employee.id} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="custom-file mt-2">
        <input
          type="file"
          className="custom-file-input"
          id="fileInput"
          accept=".pdf, .doc, .docx, .jpg, .png"
          onChange={handleFileChange}
        />
        <label className="custom-file-label" htmlFor="fileInput">
          {fileName || 'Choose file'}
        </label>
      </div>

      <button
        className="btn btn-primary mt-2"
        onClick={handleUpload}
        disabled={!fileName || (selectedOption === 'employeeDrive' && !selectedEmployee)}
      >
        Upload
      </button>

      {isUploaded && (
        <div className="alert alert-success mt-2" role="alert">
          File uploaded successfully!
        </div>
      )}
    </div>
  );
}

export default CompanyUploadFile;
