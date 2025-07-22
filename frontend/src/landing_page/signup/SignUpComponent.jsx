import React from 'react';

function SignUpComponent() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="w-100">
        <div className="card shadow rounded-4 p-4">
          <h1 className="fs-3 text-start">Sign up now</h1>
          <h6 className="text-start text-muted mb-4">
            Or track your existing application
          </h6>

          <form>
            <div className="row mb-3">
              <div className="col text-start">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="col text-start">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                id="contactNumber"
                placeholder="Enter contact number"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
              <div className="form-text">Enter a 10-digit mobile number.</div>
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a strong password"
                minLength={8}
                required
              />
              <div className="form-text">Must be 8-20 characters long.</div>
            </div>

            <div className="mb-3 form-check text-start">
              <input
                type="checkbox"
                className="form-check-input"
                id="termsCheck"
                required
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I agree to the terms and conditions
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
