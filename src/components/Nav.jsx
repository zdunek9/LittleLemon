import { Link } from "react-router-dom";
import "../styles/Nav.css";
import { useState } from "react";
import logo from "../assets/Logo.svg"

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="nav">
      <div className="navContainer">
        <Link className="navLogo" to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="buttonContainer">
          <button
            onClick={toggleMenu}
            className={`${"button"} ${showMenu && "open"}`}
          >
            <span className="hamburgerTop"></span>
            <span className="hamburgerMiddle"></span>
            <span className="hamburgerBottom"></span>
          </button>
        </div>
        <div
          style={{
            transform: showMenu ? "translateX(0)" : "translateX(100%)",
            opacity: showMenu ? 1 : 0,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
          }}
          className="menu"
        >
          <Link to="/">About</Link>
          <Link to="/">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/">Order Online</Link>
          <Link to="/">Login</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
