import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/dronarnia/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main-navigation"
    >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" activeClassName="is-active" title="Logo" style={{ paddingTop: "0", paddingBottom: "0" }}>
            <img src={logo} alt="Dronarnia" style={{ height: "120px", width: "auto", marginRight: ".75rem", padding: "0" }} />
            <span style={{ textTransform: "uppercase" }}>Дронарня</span>
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
        <div id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
          {/*
          TODO: inline override of padding is a result of refactoring
          to a ul for accessibilty purposes, would like to see a css
          re-write that makes this unneccesary.
          */}
          <div className="navbar-end">
            <Link className="navbar-item" activeClassName="is-active" to="/">
              Головна
            </Link>
            {/*
            <Link className="navbar-item" activeClassName="is-active" to="/products">
              Ветеранка
            </Link>
            <Link className="navbar-item" activeClassName="is-active" to="/about">
              Часті Запитання
            </Link>
            */}
          {/*
          <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/products">
              Проекти
            </Link>
          </li>
            <Link className="navbar-item" activeClassName="is-active" to="/blog">
              Проекти
            </Link>
            */}
            <div class="navbar-item">
              <Link className="button is-warning" to="/donate">
                Підтримати
              </Link>
            </div>
            {/*
            <Link className="navbar-item" to="/contact">
              UA
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              EN
            </Link>
            */}
          {/*
          <li className="navbar-end">
          </li>
          <li className="navbar-item" style={{padding: "0px"}}>
          </li>

            <a
              className="navbar-item"
              href="https://www.uwvm.org.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veteranka
            </a>
            */}
            </div>
        </div>

    </nav>
  );
};

export default Navbar;
