import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import axios from 'axios';
import Cookies from 'js-cookie';

const LawyerFiles = () => {
  const [files, setFiles] = useState([]);
// const userId = Cookies.get('userId'); // Get the lawyer's userId from cookies
const userId = "2bc01fbc-40bb-4339-a67e-162ac9b3cea3"
; // Get the lawyer's userId from cookies

  useEffect(() => {
    const fetchLawyerFiles = async () => {
      try {
        const response = await axios.get(`/api/lawyer/${userId}/files`);
        setFiles(response.data.files);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    if (userId) {
      fetchLawyerFiles();
    }
  }, [userId]);

  return (
    <Layout>
      <div className="container mt-5">
        <h2>Lawyer Files</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>File ID</th>
                <th>File Address</th>
                <th>Identification</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file._id}>
                  <td>{file.fileId}</td>
                  <td>{file.fileAddress}</td>
                  <td>{file.identification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default LawyerFiles;
