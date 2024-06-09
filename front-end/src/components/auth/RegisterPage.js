import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "animate.css";

import { registerUser } from "../../services/authService"; // تأكد من أن مسار الملف صحيح

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { user_name, email, password, password_confirmation: passwordConfirmation };
    console.log(userData);
    dispatch(registerUser(userData));
        navigate('/login'); 
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card w-50 shadow-lg animate__animated animate__fadeIn">
        <div className="row no-gutters">
          <div className="col-md-6 bg-primary text-white p-5 animate__animated animate__fadeInLeft">
            <div>
              <h4>Bienvenue !</h4>
              <p>
                Connectez-vous pour accéder à votre compte.
                <br /> Si vous n'avez pas encore de compte, vous pouvez vous
                inscrire
                <Link
                  to="/login"
                  className="text-decoration-none custom-link text-white fw-bold"
                >
                  {" "}
                  ici
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign up</h3>
              <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <FaUserAlt />
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={user_name}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <MdEmail />
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    required
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    required
                    type="password"
                    name="password_confirmation"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between mt-3">
                  <button
                    type="submit"
                    className="btn btn-info mt-3 mt-md-0 animate__animated animate__fadeIn"
                  >
                    Register
                  </button>
                  <Link
                    to="/login"
                    className="btn btn-primary mt-3 mt-md-0 animate__animated animate__fadeIn"
                  >
                    I'm already a member
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

export default RegisterPage;
