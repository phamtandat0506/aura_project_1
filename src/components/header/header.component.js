import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
 
  render() {
    return (
      <div>
        <div>
          <div id="loader-wrapper">
            <div id="loader" />
            <div className="loader-section section-left" />
            <div className="loader-section section-right" />
          </div>
          <div className="tm-top-header">
            <div className="container">
              <div className="row">
                <div className="tm-top-header-inner">
                  <div className="tm-logo-container">
                    <img
                      src="img/logo.png"
                      alt="Logo"
                      className="tm-site-logo"
                    />
                    <h1 className="tm-site-name tm-handwriting-font">
                      Cafe House
                    </h1>
                  </div>
                  <div className="mobile-menu-icon">
                    <i className="fa fa-bars" />
                  </div>
                  <nav className="tm-nav">
                    <ul>
                      <li>
                        <Link to="/" className="active">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/special">Today Special</Link>
                      </li>
                      <li>
                        <Link to="/menu">Menu</Link>
                      </li>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/login">Log In</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <section className="tm-welcome-section">
            <div className="container tm-position-relative">
              <div className="tm-lights-container">
                <img
                  src="img/light.png"
                  alt="Light"
                  className="light light-1"
                />
                <img
                  src="img/light.png"
                  alt="Light"
                  className="light light-2"
                />
                <img
                  src="img/light.png"
                  alt="Light"
                  className="light light-3"
                />
              </div>
              <div className="row tm-welcome-content">
                <h2 className="white-text tm-handwriting-font tm-welcome-header">
                  <img
                    src="img/header-line.png"
                    alt="Line"
                    className="tm-header-line"
                  />
                  &nbsp;Welcome To&nbsp;&nbsp;
                  <img
                    src="img/header-line.png"
                    alt="Line"
                    className="tm-header-line"
                  />
                </h2>
                <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>
                <p className="gray-text tm-welcome-description">
                  Cafe House template is a mobile-friendly responsive{" "}
                  <span className="gold-text">Bootstrap v3.3.5</span> layout by{" "}
                  <span className="gold-text">templatemo</span>. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculusnec quam
                  felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
                <a
                  href="#main"
                  className="tm-more-button tm-more-button-welcome"
                >
                  Details
                </a>
              </div>
              <img
                src="img/table-set.png"
                alt="Table Set"
                className="tm-table-set img-responsive"
              />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Header;
