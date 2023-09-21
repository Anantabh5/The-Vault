import React from 'react';
import Layout from "../../../components/layout";
import Sidebar from "../../../components/sidebar";
import CompanyUploadFile from '../../../components/companyuploadfile';

function Upload() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-lg-2 d-md-block bg-light sidebar">
            <Sidebar />
          </div>
          <div className="col-md-10 col-lg-10">
            <CompanyUploadFile />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Upload;
