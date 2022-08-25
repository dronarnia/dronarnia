import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/dronarnia/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo" style={{ paddingTop: "0", paddingBottom: "0" }}>
            <img src={logo} alt="Dronarnia" style={{ height: "120px", width: "auto", marginRight: ".75rem", padding: "0" }} />
            <span style={{ textTransform: "uppercase" }}>Dronarnia</span>
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
          {/* TODO: inline override of padding is a result of refactoring
              to a ul for accessibilty purposes, would like to see a css
              re-write that makes this unneccesary.
          */}
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/about">
              Про нас
            </Link>
          </li>
          {/* <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/products">
              Проекти
            </Link>
          </li> */}
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/blog">
              Проекти
            </Link>
          </li>
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact">
              Підтримка
            </Link>
          </li>
          {/* <div class="navbar-item">

                <Link class="button" to="/about">
                  Підтримка
                </Link>

          </div> */}
          {/*
          <li className="navbar-end">
            <Link className="navbar-item" to="/contact">
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
              UA
            </Link>
          </li>
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact/examples">
              EN
            </Link>
          </li>
          */}
          <li className="navbar-end" style={{padding: "0px"}}>
            <a
              className="navbar-item"
              href="https://www.uwvm.org.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veteranka
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
