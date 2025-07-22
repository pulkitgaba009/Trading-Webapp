import { useState } from "react";
import OpenAccount from "../OpenAccount";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="text-center m-5 pt-5 pb-5">
        <h1 className="fs-2">Open a free demat and trading account online</h1>
        <h2 className="fs-5 text-muted mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h2>
      </div>

      <div className="container text-center m-5 p-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="./signup.svg"
              alt="Signup illustration"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>

          <div className="col-md-6 d-flex flex-column align-items-center gap-4">
            {isLogin ? <LoginComponent /> : <SignUpComponent />}
            <button
              className="btn btn-outline-primary"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Create an account" : "Already have an account? Log in"}
            </button>
          </div>
        </div>
      </div>

      <OpenAccount />
    </>
  );
}

export default Signup;
