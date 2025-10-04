import React, { useState, useContext } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://news-application-lsrg.onrender.com/api/signin", {
                email,
                password,
            });
            console.log("Backend Response:", res.data);

            if (res.data.success) {
                login();
                navigate("/news");
            } else {
                alert(res.data.message || "Invalid email or password");
            }

        } catch (error) {
            console.error("Signin error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <Header />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Sign In</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSignin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">
                                            Sign In
                                        </button>
                                        <Link to="/signup" className="btn btn-link">
                                            Don’t have an account? Sign Up
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default Signin;