import React from 'react';
import Layout from '../../../components/layout';
import FileGrid from '../../../components/files';
import Sidebar from '../../../components/sidebar';

function Files() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <Sidebar />
          </div>
          <div className="col-md-9 col-lg-10 ml-sm-auto col-xl-10 px-md-4">
            <FileGrid />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Files;
