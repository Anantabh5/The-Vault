import React from 'react';
import Link from 'next/link'; // Import Link from 'next/link'

const linkStyle = {
  textDecoration: 'none', // Remove underline
};

function Homepage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Personal Storage</h5>
              <Link href={'/register/cuser'}>
                <button className="btn btn-primary mb-2" style={linkStyle}>New User Registration</button>
              </Link>
              <Link href={'/login/cuser'}>
                <button className="btn btn-success mb-2" style={linkStyle}>Login</button>
              </Link>
              <Link href={'/customercare'}>
                <button className="btn btn-info mb-2" style={linkStyle}>Customer Care</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Judicial Storage</h5>
              <Link href={'/register/judge'}>
                <button className="btn btn-primary mb-2" style={linkStyle}>Judge Registration</button>
              </Link>
              <Link href={'/register/lawyer'}>
                <button className="btn btn-primary mb-2" style={linkStyle}>Lawyer Registration</button>
              </Link>
              <Link href={'/login/lawyer'}>
                <button className="btn btn-success mb-2" style={linkStyle}>Login as Lawyer</button>
              </Link>
              <Link href={'/login/judge'}>
                <button className="btn btn-success mb-2" style={linkStyle}>Login as Judge</button>
              </Link>
              <Link href={'/customercare'}>
                <button className="btn btn-info mb-2" style={linkStyle}>Customer Care</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Box for Corporate Employees */}
        
      </div>
    </div>
  );
}

export default Homepage;
