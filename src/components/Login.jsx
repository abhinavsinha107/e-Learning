/* eslint-disable react/prop-types */
import { useState } from "react";
import userLogin from "../auth/userLogin";
import { useNavigate, useLocation } from "react-router-dom";

import './LoginAndSignup.css';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  
  const navigate = useNavigate();

  // We are using it to remove the back button history from the stack of history so that if a user logins then after pressing the back button he mustn't go back to same login page again.
  const location = useLocation(); 

  const from = location.state?.from?.pathname || '/dashboard';

  const { error, login } = userLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    // console.log(location.state);
    // console.log(from);
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
      <h2>Login to your account</h2>
      <form onSubmit={handleLogin} className="inputBody">
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
        <button type="submit">Login</button>
      </form>
      <p>Have no account?</p>
      <button onClick={props.toggleForm}>Sign Up</button>
    </div>
  );
};
export default Login;
