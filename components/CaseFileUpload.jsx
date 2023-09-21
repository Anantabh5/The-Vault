import React, { useState } from 'react';

function CaseFileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caseNumber, setCaseNumber] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
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
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="fileInput"
          accept=".pdf, .doc, .docx, .jpg, .png" // Specify allowed file types
          onChange={handleFileChange}
        />
        <label className="custom-file-label" htmlFor="fileInput">
          {selectedFile ? selectedFile.name : 'Choose file'}
        </label>
      </div>

      <div className="form-group mt-2">
        <label htmlFor="caseNumber">Case Number</label>
        <input
          type="text"
          className="form-control"
          id="caseNumber"
          placeholder="Enter case number"
          value={caseNumber}
          onChange={(e) => setCaseNumber(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary mt-2"
        onClick={handleUpload}
        disabled={!selectedFile}
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

export default CaseFileUpload;
