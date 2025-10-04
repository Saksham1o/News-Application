import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(90deg, #c7d2fe 0%, #f0f4ff 100%)"
    }}
  >
    <div className="container text-center py-5">
      <FontAwesomeIcon icon={faNewspaper} style={{ fontSize: 56, color: "#2563eb" }} />
      <h1 className="display-4 mt-3 mb-2 fw-bold" style={{ color: "#22365a" }}>
        Welcome to <span style={{ color: '#2563eb' }}>Your News Hub</span>
      </h1>
      <p className="lead mb-4" style={{ maxWidth: 540, margin: "0 auto", color: "#465273" }}>
        Stay updated with the latest, breaking, and trending news from across the world. Your trusted source for news, analysis, features—and more.
      </p>
      <Link to="/news" className="btn btn-primary btn-lg px-4 rounded-pill shadow">
        Check Latest News
      </Link>
    </div>
  </div>
);

export default Home;