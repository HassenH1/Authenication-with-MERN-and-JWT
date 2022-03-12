import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/user-context";
import useFetch from "../hooks/useFetch";
import { METHOD, ROUTES } from "../utils/enum";

/**
 *
 * Signup component
 *
 * @example <Signup />
 * @returns {React.ReactNode}
 */
function Signup() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [errorMessage, setErrorMessage] = useState("");
  const { fetchRequest } = useFetch();

  useEffect(() => {
    if (errorMessage.length > 0) clearErrorMessage();
  }, [errorMessage]);

  //set username
  const settingUsername = (e) => setUsername(e.target.value);

  //set password
  const settingPassword = (e) => setPassword(e.target.value);

  //show or hide password in field
  const showOrHidePassword = (e) =>
    e.target.checked ? setShowPassword("text") : setShowPassword("password");

  //clear error message
  const clearErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 4000);
  };

  //check if input fields are filled
  const fieldValidation = () => {
    if (username.length === 0 || password.length === 0) {
      setErrorMessage("Must fill out both fields");
      return true;
    }
    return false;
  };

  //handle signup on submit
  const handleSignup = async (e) => {
    e.preventDefault();
    if (fieldValidation()) return;
    try {
      const resp = await fetchRequest(ROUTES.signup, METHOD.post, {
        username,
        password,
      });
      if (resp.status === 200) {
        setUser("Please Log in now!");
        navigate("/signin");
      }
    } catch (e) {
      throw new Error(`Cannot signup ${e}`);
    }
  };

  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-center">Register</h1>
          <form onSubmit={handleSignup} className="m-auto w-25">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="username"
                value={username}
                onChange={settingUsername}
              />
              <label htmlFor="floatingInput">Username</label>
            </div>

            <div className="form-floating">
              <input
                type={showPassword}
                className="form-control"
                id="floatingPassword"
                placeholder="password"
                value={password}
                onChange={settingPassword}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input
                  type="checkbox"
                  value="remember-me"
                  onChange={showOrHidePassword}
                />{" "}
                Show Password
              </label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>

            {errorMessage && (
              <span className="text-danger">{errorMessage}</span>
            )}

            <p className="mt-3 mb-3 text-muted">
              Don't have an account? <Link to={"/signin"}>Signin</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
