import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import useFetch from "../hooks/useFetch";
import { METHOD, ROUTES } from "../utils/enum";
import Space from "../components/Space";

/**
 *
 * Dashboard component
 *
 * @example <Dashboard />
 * @returns {React.ReactNode}
 */
function Dashboard() {
  const navigate = useNavigate();
  const { fetchRequest } = useFetch();

  //Handle Logout
  const handleLogout = async () => {
    try {
      const resp = await fetchRequest(ROUTES.logout, METHOD.get);
      if (resp.status === 200) {
        navigate("/");
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <Container>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold text-center">
            Welcome to Dashboard!
          </h1>
          <div>
            <img src={"https://picsum.photos/400"} alt="randomPics" />
          </div>
          <Space xxl />
          <Button onClick={handleLogout} danger>
            Signout
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
