import * as React from "react";
// import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

import mainlogo from "../img/dronarnia/dronarnia_logo_white.svg";

const Footer = () => {

return (
  <footer className="footer has-background-black has-text-white-ter p-6">


    {/* <div className="content has-text-centered">
      <div className="container">
        <div className="columns">

          <div className="column is-3">
            <section className="menu">
              <div className="menu-list">
                <div>
                  <Link to="/" className="navbar-item">
                    Головна
                  </Link>
                </div>
                <div>
                  <Link className="navbar-item" to="/products">
                    Продукти
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="column is-3">
            <section>
              <div className="menu-list">
                <div>
                  <Link className="navbar-item" to="/products">
                    Підтримати
                  </Link>
                </div>
                <div>
                  <Link className="navbar-item" to="/about">
                    Часті запитання
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="column is-3">
            <section>
              <div className="menu-list">
                <div>
                  <Link className="navbar-item" to="/blog">
                    Новини
                  </Link>
                </div>
                <div>
                  <a
                    className="navbar-item"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Адмінка
                  </a>
                </div>
              </div>
              </section>
            </div>

            <div className="column is-3">
              <section>
                <div className="menu-list">
                  <div>
                    <Link className="navbar-item" to="/">UA</Link>
                  </div>
                  <div>
                    <Link className="navbar-item" to="/en">EN</Link>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div> */}

      <div className="pt-6 pb-6">
        <div className="content has-text-centered">
          <p>
            <img
              src={mainlogo}
              alt="Дронарня"
              style={{ width: "40px" }}
            />
          </p>
          <p>
            <small>
              ДРОНАРНЯ | DRONARNIA<br/>
              2022 © Смерть ворогам! <FontAwesomeIcon icon={faSkullCrossbones} size="1x" />
          </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
