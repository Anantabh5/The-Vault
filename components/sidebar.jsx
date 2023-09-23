import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/" passHref>
              <p className="nav-link fs-5">Home</p>
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://blockchain-govt-in.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link fs-5">Upload Documents</a>
          </li>
          <li className="nav-item">
            <Link href="/drive" passHref>
              <p className="nav-link fs-5">Your E-Vault Drive</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/evault-services" passHref>
              <p className="nav-link fs-5">eVault Services</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/my-profile" passHref>
              <p className="nav-link fs-5">My Profile</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about-evault" passHref>
              <p className="nav-link fs-5">About eVault</p>
            </Link>
          </li>
        </ul>
        <button className="btn btn-danger btn-block mt-3 fs-5">Logout</button>
      </div>
    </nav>
  );
};

export default Sidebar;
