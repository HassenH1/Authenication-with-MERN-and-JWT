import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * Navbar component
 *
 * @example <Navbar />
 * @returns {React.ReactNode}
 */
function Navbar() {
  return (
    <div className="container">
      <header className="pb-3 mb-4 pt-4 border-bottom d-flex ">
        <div>
          <img
            src="https://cdn.cdnlogo.com/logos/j/20/jwt.svg"
            alt="jwt"
            height={50}
          />
        </div>
        <ul className="flex-grow-1 mt-3 d-flex flex-row align-items-center justify-content-evenly  me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              Login
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
