import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (auth, email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userToken) => {
          let user = userToken;
          console.log("User token: ", user);
          navigate("/home");
        })
        .cath((e) => console.log("Error:", e));
    } catch (error) {
      console.warn("Error in sign in", error.message);
    }
  };

  // const createAccount = async (auth, Email, Password) => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, Email, Password)
  //       .then((userToken) => {
  //         let user = userToken;
  //         console.log("your user token ", user);
  //         navigate("/home");
  //       })
  //       .catch((e) => console.log("this is the error", e));
  //   } catch (error) {
  //     console.warn("Error in signing up", error.message);
  //   }
  // };

  return (
    <div className="login">
      <Link to="/home">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="amazonLogo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__signInHeading">Sign in</h1>
        <form>
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
            className="login__signInBtn"
            type="submit"
            onClick={() => signIn(auth, email, password)}
          >
            Sign in
          </button>
        </form>
        <p className="login__conditions">
          By continuing, you agree to Amazon's Clone
          <Link to ="#"> Conditions of Use</Link> and  <Link to ="#"> Privacy Notice</Link>.
        </p>
      </div>
      <div className="login__newToAmazon">
        <hr />
        <p>New to Amazon?</p>
        <hr />
      </div>
      <Link to="/register">
        <button className="login__createAccountBtn">
          Create your Amazon account
        </button>
      </Link>
    </div>
  );
}

export default Login;
