import "src/components/navBar/navBar.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa/index";
import logoGameZ from "src/images/logoGameZ.png";
import { useNavigate } from "react-router-dom";

export function CustomNavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  function NavigateToHome() {
    navigate("/home");
  }

  function NavigateToSearch() {
    navigate("/search");
  }

  function NavigateToRanking() {
    navigate("/ranking");
  }

  function NavigateToAbout() {
    navigate("/about");
  }

  function NavigateToRegister() {
    navigate("/register");
  }

  function NavigateToLogin() {
    navigate("/login");
  }

  return (
    <>
      <header>
        <div className="logo">
          <img src={logoGameZ} alt={"Main logo"} onClick={NavigateToHome}></img>
        </div>
        <nav className={`menu ${showMenu ? "show" : ""}`}>
          <ul className="centered">
            <li>
              <p onClick={NavigateToHome}>Home</p>
            </li>
            <li>
              <p onClick={NavigateToSearch}>Search</p>
            </li>
            <li>
              <p onClick={NavigateToRanking}>Rankings</p>
            </li>
            <li>
              <p onClick={NavigateToAbout}>About</p>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="registerLogin" onClick={NavigateToLogin}>Login</button>
          <button className="registerLogin" onClick={NavigateToRegister}>Register</button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </header>
    </>
  );
}
