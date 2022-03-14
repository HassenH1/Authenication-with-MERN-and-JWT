import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Space from "../components/Space";
import TextInput from "../components/TextInput";
import { useUser } from "../context/user-context";
import useFetch from "../hooks/useFetch";
import { METHOD, ROUTES } from "../utils/enum";

/**
 *
 * Sign in component
 *
 * @example <Signin />
 * @returns {React.ReactNode}
 */
function Signin() {
  const navigate = useNavigate();
  const { user, timedLoginMessage } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { fetchRequest } = useFetch();

  useEffect(() => {
    if (user) timedLoginMessage();
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    if (errorMessage.length > 0) clearErrorMessage();
  }, [errorMessage]);

  //clear error message
  const clearErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 4000);
  };

  //check if fields are filled out
  const fieldValidation = () => {
    if (username.length === 0 || password.length === 0) {
      setErrorMessage("Must fill out both fields");
      return true;
    }
    return false;
  };

  //Handle signin submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fieldValidation()) return;
    try {
      const resp = await fetchRequest(ROUTES.signin, METHOD.post, {
        username,
        password,
      });
      if (resp.status === 200) navigate("/user/dashboard");
      if (resp.status === 404)
        setErrorMessage("User does not exist, please sign up first");
    } catch (e) {
      throw new Error(e);
    }
  };

  //set username
  const settingUsername = (e) => setUsername(e.target.value);

  //set password
  const settingPassword = (e) => setPassword(e.target.value);

  return (
    <Container>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-center">Login</h1>
          <Space l />
          <div className="m-auto w-25">
            {user && <p className="text-success text-center">{user}</p>}
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
            <Button fullWidth onClick={handleSubmit}>
              Sign in
            </Button>

            {errorMessage && (
              <span className="text-danger">{errorMessage}</span>
            )}

            <p className="mt-3 mb-3 text-muted">
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Signin;
