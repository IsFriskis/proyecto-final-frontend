import React from "react";
import "src/components/navBar/navBar.scss";
import { useState } from "react";
import {FaBars} from'react-icons/fa/index';

export function CustomNavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        <div className="logo">
          <a href="home">Your Logo Here</a>
        </div>
        <nav className={`menu ${showMenu ? "show" : ""}`}>
          <ul className="centered">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="search">Search</a>
            </li>
            <li>
              <a href="ranking">Rankings</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button>Login</button>
          <button>Register</button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </header>
    </>
  );
}
