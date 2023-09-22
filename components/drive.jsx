import React, { useState } from 'react';

// Sample file data (to be fetched from the backend)
const fileData = [
  { name: 'File 1.txt' },
  { name: 'File 2.pdf' },
  { name: 'File 3.docx' },
  { name: 'File 4.jpg' },
  { name: 'File 5.png' },
];

const FileTable = ({ files }) => {
  return (
      <table className="table table-striped table-bordered table-responsive">
        <thead>
        <tr>
          <th>File Name</th>
        </tr>
        </thead>
        <tbody>
        {files.map((file, index) => (
            <tr key={index}>
              <td>📄 {file.name}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};

const Drive = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Function to fetch selected files (e.g., from checkboxes)
  const handleFileSelection = (event, file) => {
    if (event.target.checked) {
      setSelectedFiles([...selectedFiles, file]);
    } else {
      setSelectedFiles(selectedFiles.filter((selectedFile) => selectedFile !== file));
    }
  };

  return (
      <div>
        <h2>File List</h2>
        <FileTable files={selectedFiles} />

        {/* Example of checkboxes for file selection */}
        {fileData.map((file, index) => (
            <div key={index}>
              <label>
                <input
                    type="checkbox"
                    onChange={(event) => handleFileSelection(event, file)}
                />{' '}
                {file.name}
              </label>
            </div>
        ))}
      </div>
  );
};

export default Drive;
