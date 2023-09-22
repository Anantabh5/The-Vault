import React, { useState } from 'react';
import Layout from "../../components/layout";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from 'next/router';

const RegistrationForm = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        gender: '',
        mobileNumber: '',
        email: '',
        securityPin: '',
        judgeUniqueId: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data:', formData);

        try {
            const response = await axios.post('/api/register/judge', formData);
            console.log(response.data);
            alert('Registration successful');
            await router.push(`/judge/${response.data.id}`);
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }

        Cookies.set('judgeUniqueId', formData.judgeUniqueId);
        Cookies.set('type', 'judge');
    };

    // Generate an array of years from the current year back to 1900
    const years = Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, i) => (new Date().getFullYear() - i));

    return (
        <Layout>
            <div className="container mt-5">
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="judgeUniqueId">Judge Unique ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="judgeUniqueId"
                            name="judgeUniqueId"
                            value={formData.judgeUniqueId}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <div className="row">
                            <div className="col-md-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="DD"
                                    name="dobDay"
                                    value={formData.dobDay}
                                    onChange={handleInputChange}
                                    required
                                    maxLength="2"
                                />
                            </div>
                            <div className="col-md-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="MM"
                                    name="dobMonth"
                                    value={formData.dobMonth}
                                    onChange={handleInputChange}
                                    required
                                    maxLength="2"
                                />
                            </div>
                            <div className="col-md-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="YYYY"
                                    name="dobYear"
                                    value={formData.dobYear}
                                    onChange={handleInputChange}
                                    required
                                    maxLength="4"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="male"
                                name="gender"
                                value="male"
                                onChange={handleInputChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="female"
                                name="gender"
                                value="female"
                                onChange={handleInputChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="other"
                                name="gender"
                                value="other"
                                onChange={handleInputChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="other">
                                Other
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="securityPin">Security PIN (6 digits)</label>
                        <input
                            type="password"
                            className="form-control"
                            id="securityPin"
                            name="securityPin"
                            minLength="6"
                            maxLength="6"
                            value={formData.securityPin}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default RegistrationForm;
