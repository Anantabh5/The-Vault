import React from 'react';
import Layout from "../../../components/layout";
import Sidebar from "../../../components/sidebar";
import FileUpload from '../../../components/fileupload';

function Upload() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-lg-2 d-md-block bg-light sidebar">
            <Sidebar />
          </div>
          <div className="col-md-10 col-lg-10">
            <FileUpload />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Upload;
