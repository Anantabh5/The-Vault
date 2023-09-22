import React, { useState } from 'react';
import Layout from '../../components/layout';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    businessEmail: '',
    password: '',
    industry: '',
    companySize: '',
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async () => {
    // Handle company registration logic here
    if (formData.agreeTerms) {
      try {
        const response = await axios.post('/api/register/company', formData);
        console.log(response.data);
        alert('Registration successful');
        await router.push(`/company/${response.data.id}`); // Assuming the response contains an 'id' field
      } catch (error) {
        console.error(error);
        alert('Registration failed');
      }
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
      <Layout>
        <div className="container mt-5">
          <h2>Company Registration</h2>
          <form>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="businessEmail">Business Email</label>
              <input
                  type="email"
                  className="form-control"
                  id="businessEmail"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="industry">Industry</label>
              <input
                  type="text"
                  className="form-control"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="companySize">Company Size</label>
              <input
                  type="text"
                  className="form-control"
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-check">
              <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={() =>
                      setFormData({
                        ...formData,
                        agreeTerms: !formData.agreeTerms,
                      })
                  }
                  required
              />
              <label className="form-check-label" htmlFor="agreeTerms">
                I agree to the terms and conditions
              </label>
            </div>

            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleRegistration}
            >
              Register
            </button>
          </form>
        </div>
      </Layout>
  );
}

export default Register;
