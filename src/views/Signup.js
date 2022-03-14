import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useUser } from "../context/user-context";
import useFetch from "../hooks/useFetch";
import { METHOD, ROUTES } from "../utils/enum";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Space from "../components/Space";

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
  const [errorMessage, setErrorMessage] = useState("");
  const { fetchRequest } = useFetch();

  useEffect(() => {
    if (errorMessage.length > 0) clearErrorMessage();
  }, [errorMessage]);

  //set username
  const settingUsername = (e) => setUsername(e.target.value);

  //set password
  const settingPassword = (e) => setPassword(e.target.value);

  //clear error message
  const clearErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 4000);
  };

  //check if input fields are filled
  const checkFields = () => {
    if (username.length === 0 || password.length === 0) {
      setErrorMessage("Must fill out both fields");
      return true;
    }
    return false;
  };

  //handle signup on submit
  const handleSignup = async (e) => {
    e.preventDefault();
    if (checkFields()) return;
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
    <Container>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-center">Register</h1>
          <Space l />
          <div className="m-auto w-25">
            <TextInput
              label="Username"
              placeholder="username"
              value={username}
              onChange={settingUsername}
            />
            <Space l />
            <TextInput
              label="Password"
              placeholder="password"
              value={password}
              onChange={settingPassword}
              type="password"
            />
            <Space l />
            <Button onClick={handleSignup} fullWidth>
              Sign up
            </Button>

            {errorMessage && (
              <span className="text-danger">{errorMessage}</span>
            )}

            <p className="mt-3 mb-3 text-muted">
              Don't have an account? <Link to={"/signin"}>Signin</Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
