function LoginComponent({ onSwitchToSignup }) {
  return (
    <div className="card shadow w-100">
      <div className="card-body">
        <h4 className="card-title mb-4 text-center">Login</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-start d-block">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-start d-block">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Log In
          </button>
        </form>

        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <span
            className="text-primary"
            role="button"
            onClick={onSwitchToSignup}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginComponent;