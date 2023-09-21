import React from 'react';
import NextLink from 'next/link';
import Layout from '../../components/layout';

const Signup = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card bg-light mb-3">
              <div className="card-body">
                <h5 className="card-title">Register as:</h5>
                <div className="card bg-primary">
                  <div className="card-body">
                    <h5 className="card-title">
                      <NextLink href="/register/cuser" passHref>
                        Common User
                      </NextLink>
                    </h5>
                  </div>
                </div>
                <div className="card bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">
                      <NextLink href="/register/lawyer" passHref>
                        Lawyer
                      </NextLink>
                    </h5>
                  </div>
                </div>
                <div className="card bg-success">
                  <div className="card-body">
                    <h5 className="card-title">
                      <NextLink href="/register/judge" passHref>
                        Judge
                      </NextLink>
                    </h5>
                  </div>
                </div>
                <div className="card bg-info">
                  <div className="card-body">
                    <h5 className="card-title">
                      <NextLink href="/register/company" passHref>
                        Company
                      </NextLink>
                    </h5>
                  </div>
                </div>
                <div className="card bg-primary">
                  <div className="card-body">
                    <h5 className="card-title">
                      <NextLink href="/register/employee" passHref>
                        Employee
                      </NextLink>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
