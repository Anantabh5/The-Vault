import React from 'react';

const Sidebar = () => {
  return (
    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="/" className="nav-link fs-5">Home</a>
          </li>
          <li className="nav-item">
            <a href="/issued-documents" className="nav-link fs-5">Upload Documents</a>
          </li>
          <li className="nav-item">
            <a href="/drive" className="nav-link fs-5">Your E-Vault Drive</a>
          </li>
          <li className="nav-item">
            <a href="/evault-services" className="nav-link fs-5">eVault Services</a>
          </li>
          <li className="nav-item">
            <a href="/my-profile" className="nav-link fs-5">My Profile</a>
          </li>
          <li className="nav-item">
            <a href="/about-evault" className="nav-link fs-5">About eVault</a>
          </li>
        </ul>
        <button className="btn btn-danger btn-block mt-3 fs-5">Logout</button>
      </div>
    </nav>
  );
};

export default Sidebar;
