import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { METHOD, ROUTES } from "../utils/enum";

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
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to Dashboard!</h1>
          <button
            className="btn btn-lg btn-primary"
            type="button"
            onClick={handleLogout}
          >
            Signout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
