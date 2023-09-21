import React, { useState } from 'react';

// Sample folder and file data (to be fetched from the backend)
const folderData = [
  {
    name: 'Folder 1',
    folders: [
      {
        name: 'Subfolder 1',
        folders: [],
        files: [
          { name: 'File 1.txt' },
          { name: 'File 2.pdf' },
        ],
      },
      {
        name: 'Subfolder 2',
        folders: [],
        files: [
          { name: 'File 3.docx' },
        ],
      },
    ],
    files: [],
  },
  {
    name: 'Folder 2',
    folders: [],
    files: [
      { name: 'File 4.jpg' },
      { name: 'File 5.png' },
    ],
  },
];

const Folder = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFolder} style={{ cursor: 'pointer' }}>
        {isOpen ? '📂' : '📁'} {folder.name}
      </div>
      {isOpen && (
        <ul style={{ listStyleType: 'none', marginLeft: '20px' }}>
          {folder.folders.map((subfolder, index) => (
            <li key={index}>
              <Folder folder={subfolder} />
            </li>
          ))}
          {folder.files.map((file, index) => (
            <li key={index}>📄 {file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

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
      <h2>Folder Structure</h2>
      <Folder folder={{ name: 'Root', folders: folderData, files: [] }} />

      <h2>File List</h2>
      <FileTable files={selectedFiles} />

      {/* Example of checkboxes for file selection */}
      {folderData.map((folder) =>
        folder.files.map((file, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                onChange={(event) => handleFileSelection(event, file)}
              />{' '}
              {file.name}
            </label>
          </div>
        ))
      )}
    </div>
  );
};

export default Drive;
