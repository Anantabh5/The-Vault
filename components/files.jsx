import React, { useState, useEffect } from 'react';

const sampleData = [
  {
    filename: 'File 1.txt',
    filesize: '1.2 MB',
    createdat: '2023-09-21',
    updatedat: '2023-09-22',
  },
  {
    filename: 'File 2.pdf',
    filesize: '3.8 MB',
    createdat: '2023-09-20',
    updatedat: '2023-09-23',
  },
  // Add more sample data here
];

const FileTable = ({ files }) => {
  return (
    <table className="table table-striped table-bordered table-responsive">
      <thead>
        <tr>
          <th>#</th>
          <th>File Name</th>
          <th>File Size</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{file.filename}</td>
            <td>{file.filesize}</td>
            <td>{file.createdat}</td>
            <td>{file.updatedat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const FileGrid = () => {
  const [files, setFiles] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    // You would replace this with an actual API call
    setTimeout(() => {
      setFiles(sampleData);
    }, 1000);
  }, []);

  return (
    <div className="container mt-5">
      <h2>File Grid</h2>
      <FileTable files={files} />
    </div>
  );
};

export default FileGrid;
