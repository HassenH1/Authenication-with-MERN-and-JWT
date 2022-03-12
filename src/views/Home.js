import React from "react";
import { useNavigate } from "react-router-dom";

/**
 *
 * Home Component
 *
 * @example <Home />
 * @returns {React.ReactNode}
 */
function Home() {
  const navigate = useNavigate();

  //navigate to sign up screen
  const navigateToSignup = () => navigate("/signup");

  //navigate to sign in screen
  const navigateToSignin = () => navigate("/signin");

  //navigate to dashboard screen
  const navigateToDashboard = () => navigate("user/dashboard");

  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">JWT Testing Area</h1>
          <p className="col-md-8 fs-4">
            This is an example app that serves an ExpressJS JSON api to a React
            client application. The React app is configured for a basic JWT
            authentication flow. Great for those of you that are somewhat
            familiar with Node, Express, and MongoClient, but want to see an
            implementation of React + React Router with JWT authentication. Try
            Accessing the Dashboard screen.
          </p>{" "}
          <p className="fst-italic">Hint: It won't work unless you login 😉</p>
          <button
            onClick={navigateToSignup}
            className="btn btn-primary btn-lg"
            type="button"
          >
            Sign up
          </button>{" "}
          <button
            onClick={navigateToSignin}
            className="btn btn-primary btn-lg"
            type="button"
          >
            Sign in
          </button>{" "}
          <button
            onClick={navigateToDashboard}
            className="btn btn-primary btn-lg"
            type="button"
          >
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
