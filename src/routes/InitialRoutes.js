import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import NotFound from "../views/NotFound";
import Navbar from "../components/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";

function InitialRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="user/" element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route path="*" element={NotFound} />
      </Routes>
    </>
  );
}

export default InitialRoutes;
