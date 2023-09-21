import React, { useState } from 'react';

const initialProfileData = {
  fullName: 'John Doe',
  dobDay: '01',
  dobMonth: '01',
  dobYear: '1990',
  gender: 'male',
  mobileNumber: '1234567890',
  email: 'johndoe@example.com',
};

const Profile = () => {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  return (
      <div className="container mt-5">
        <h2>User Profile</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            {isEditMode ? (
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
                required
              />
            ) : (
              <div>{profileData.fullName}</div>
            )}
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <div className="row">
              <div className="col-md-3">
                {isEditMode ? (
                  <input
                    type="text"
                    className="form-control"
                    placeholder="DD"
                    name="dobDay"
                    value={profileData.dobDay}
                    onChange={handleInputChange}
                    required
                    maxLength="2"
                  />
                ) : (
                  <div>{profileData.dobDay}</div>
                )}
              </div>
              <div className="col-md-3">
                {isEditMode ? (
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM"
                    name="dobMonth"
                    value={profileData.dobMonth}
                    onChange={handleInputChange}
                    required
                    maxLength="2"
                  />
                ) : (
                  <div>{profileData.dobMonth}</div>
                )}
              </div>
              <div className="col-md-3">
                {isEditMode ? (
                  <input
                    type="text"
                    className="form-control"
                    placeholder="YYYY"
                    name="dobYear"
                    value={profileData.dobYear}
                    onChange={handleInputChange}
                    required
                    maxLength="4"
                  />
                ) : (
                  <div>{profileData.dobYear}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Gender</label>
            {isEditMode ? (
              <div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handleInputChange}
                    required
                    checked={profileData.gender === 'male'}
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
                    checked={profileData.gender === 'female'}
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
                    checked={profileData.gender === 'other'}
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
            ) : (
              <div>{profileData.gender}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            {isEditMode ? (
              <input
                type="tel"
                className="form-control"
                id="mobileNumber"
                name="mobileNumber"
                value={profileData.mobileNumber}
                onChange={handleInputChange}
                required
              />
            ) : (
              <div>{profileData.mobileNumber}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            {isEditMode ? (
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                required
              />
            ) : (
              <div>{profileData.email}</div>
            )}
          </div>
        </form>

        {isEditMode ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSaveClick}
          >
            Save Changes
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
      </div>
  );
};

export default Profile;
