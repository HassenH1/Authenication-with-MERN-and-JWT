import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { METHOD, ROUTES } from "../utils/enum";

/**
 * Protected Route component that determines where to send user
 * @returns {React.ReactNode}
 */
function ProtectedRoutes() {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const { fetchRequest } = useFetch();

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  //Check if token is exists and is valid
  const checkToken = async () => {
    try {
      const resp = await fetchRequest(ROUTES.checkToken, METHOD.get);
      if (resp.status !== 200) setRedirect(true);
    } catch (e) {
      throw new Error(e);
    }
    setLoading(false);
  };

  if (loading) return <Loading />;
  return !redirect ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoutes;
