import React from 'react';
import Profile from '../../../components/cuserprofile';
import Layout from '../../../components/layout';
import Sidebar from '../../../components/sidebar';

function ProfilePage() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <Sidebar />
          </div>
          <div className="col-md-9 col-lg-10">
            <Profile />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProfilePage;
