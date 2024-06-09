import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import "animate.css"; // Import animate.css for animations

import { loginUser } from "../../services/authService"; // Import loginUser action

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    console.log(userData);
    dispatch(loginUser(userData));
      navigate("/");
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card w-50 shadow-lg animate__animated animate__fadeIn">
        <div className="row no-gutters">
          <div className="col-md-6 d-flex align-items-center bg-primary text-white p-5 animate__animated animate__fadeInLeft">
            <div>
              <h4>Bienvenue !</h4>
              <p>
                Connectez-vous pour accéder à votre compte.
                <br />
                Si vous n'avez pas encore de compte, vous pouvez vous inscrire
                <Link
                  to="/register"
                  className="text-decoration-none custom-link text-white fw-bold"
                >
                  {" "}
                  ici
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body">
              <h3 className="card-title animate__animated animate__fadeInRight">
                Sign in
              </h3>
              <form
                onSubmit={handleSubmit}
                className="mt-4 animate__animated animate__fadeIn"
              >
                <div className="mb-3 input-group animate__animated animate__fadeIn">
                  <span className="input-group-text">
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 input-group animate__animated animate__fadeIn">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between mt-3">
                  <button
                    type="submit"
                    className="btn btn-info mt-3 mt-md-0 animate__animated animate__fadeIn"
                  >
                  Login
                  </button>
                  <Link
                    to="/register"
                    className="btn btn-primary mt-3 mt-md-0 animate__animated animate__fadeIn"
                  >
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;