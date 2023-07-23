/* eslint-disable react/prop-types */
import { useState } from "react";
import userSignup from "../auth/userSignup";
import { useNavigate, useLocation } from "react-router-dom";

import "./LoginAndSignup.css";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "./dashboard";

  const {error, signup} = userSignup();

  const hanldeSignIn = async (e) => {
    e.preventDefault();
    await signup(email, password);

    if(!error) {
      navigate(from, {replace: true});
      setEmail("");
      setPassword("");
      return;
    } else {
      setErrorMessage(error);
    }

  }

  return (
    <div className="form">
      <h2>Create your account</h2>
      <form onSubmit={hanldeSignIn} className="inputBody">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Have an account?</p>
      <button onClick={props.toggleForm}>Login</button>
    </div>
  );
};

export default SignUp;
