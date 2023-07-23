import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="./">
          <h4>e-Learning Platform</h4>
        </Link>

        <ul className="nav__menu">
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="./authentication">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
