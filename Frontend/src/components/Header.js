import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faHome,
  faInfoCircle,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import '../index.css';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/signin");
    setNavOpen(false);
  };

  const handleNavToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const handleNavLink = () => {
    setNavOpen(false); // close on navigation
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #1f2937 10%, #2563eb 100%)",
        boxShadow: "0 2px 8px rgba(50,50,93,.05)",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center fw-bold fs-2"
          to="/"
          onClick={handleNavLink}
        >
          <FontAwesomeIcon icon={faNewspaper} className="me-2" />
          News Application
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavToggle}
          aria-expanded={navOpen}
        >
          <span>
            <FontAwesomeIcon icon={navOpen ? faTimes : faBars} size="lg" />
          </span>
        </button>

        <div
          className={`collapse navbar-collapse custom-navbar-collapse${navOpen ? " show" : ""}`}
          style={{
            transition: "max-height 0.38s cubic-bezier(.4,0,.2,1)",
            maxHeight: navOpen ? "500px" : "0",
            overflow: "hidden",
          }}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link d-flex align-items-center" onClick={handleNavLink}>
                <FontAwesomeIcon icon={faHome} className="me-1" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link d-flex align-items-center" onClick={handleNavLink}>
                <FontAwesomeIcon icon={faNewspaper} className="me-1" />
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link d-flex align-items-center" onClick={handleNavLink}>
                <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newsletters" className="nav-link d-flex align-items-center" onClick={handleNavLink}>
                <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                Newsletters
              </Link>
            </li>
            {!isAuthenticated && (
              <li className="nav-item">
                <Link to="/signin" className="signin-btn" onClick={handleNavLink}>
                  Sign In
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <button
                  className="btn btn-outline-light"
                  style={{
                    borderRadius: "10px",
                    transition: "all 0.3s",
                    background: "red",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
