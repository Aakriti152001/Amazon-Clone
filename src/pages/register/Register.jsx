import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password,username)
        .then((userToken) => {
          const user = userToken.user;
          console.log("user:", user);
          navigate("/home");
        })
        .catch((e) => console.log("error", e));
    } catch (error) {
      console.log("register error", error.message);
    }
  };

  return (
    <div className="register">
      <Link to="/home">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="amazonLogo"
          className="register__logo"
        />
      </Link>
      <div className="register__container">
        <h1 className="register__registerHeading">Create Account</h1>
        <form>
          <h5>Your name</h5>
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="register__registerBtn"
            type="submit"
            onClick={createAccount}
          >
            Register
          </button>
          <p className="login__conditions">
            Already have an account <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
