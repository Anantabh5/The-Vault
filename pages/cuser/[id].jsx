import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import Layout from "../../components/layout";
import Vaulthome from "../../components/vaulthome"; // Correct the component name to start with a capital letter

const Id = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <Sidebar />
          </div>
          <div className="col-md-9 col-lg-10">
            <Vaulthome />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Id;
