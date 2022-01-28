import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
    };
  }
  render() {
    return (
      <div className="tm-main-section light-gray-bg">
        <div className="container" id="main">
          <section className="tm-section row">
            <div className="col-lg-9 col-md-9 col-sm-8">
              <h2 className="tm-section-header gold-text tm-handwriting-font">
                The Best Coffee for you
              </h2>
              <h2>Cafe House</h2>
              <p className="tm-welcome-description">
                This is free HTML5 website template from{" "}
                <span className="blue-text">template</span>
                <span className="green-text">mo</span>. Fndimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Ettiam sit amet orci eget eros
                faucibus tincidunt.
              </p>
              <a href="#" className="tm-more-button margin-top-30">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
              <div className="inline-block shadow-img">
                <img
                  src="img/1.jpg"
                  alt="Image"
                  className="img-circle img-thumbnail"
                />
              </div>
            </div>
          </section>
          <section className="tm-section tm-section-margin-bottom-0 row">
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="tm-section-header gold-text tm-handwriting-font">
                <img src="img/logo.png" alt="Logo" className="tm-site-logo" />{" "}
                Popular Items
              </h2>
              <div className="tm-hr-container">
                <hr className="tm-hr" />
              </div>
            </div>
            <div className="col-lg-12 tm-popular-items-container">
              <div className="tm-popular-item">
                <img
                  src="img/popular-1.jpg"
                  alt="Popular"
                  className="tm-popular-item-img"
                />
                <div className="tm-popular-item-description">
                  <h3 className="tm-handwriting-font tm-popular-item-title">
                    <span className="tm-handwriting-font bigger-first-letter">
                      a
                    </span>
                    mericano
                  </h3>
                  <hr className="tm-popular-item-hr" />
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem neque. sed ipsum.
                  </p>
                  <div className="order-now-container">
                    <a href="#" className="order-now-link tm-handwriting-font">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="tm-popular-item">
                <img
                  src="img/popular-2.jpg"
                  alt="Popular"
                  className="tm-popular-item-img"
                />
                <div className="tm-popular-item-description">
                  <h3 className="tm-handwriting-font tm-popular-item-title">
                    <span className="tm-handwriting-font bigger-first-letter">
                      c
                    </span>
                    appuccino
                  </h3>
                  <hr className="tm-popular-item-hr" />
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem neque. sed ipsum.
                  </p>
                  <div className="order-now-container">
                    <a href="#" className="order-now-link tm-handwriting-font">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="tm-popular-item">
                <img
                  src="img/popular-3.jpg"
                  alt="Popular"
                  className="tm-popular-item-img"
                />
                <div className="tm-popular-item-description">
                  <h3 className="tm-handwriting-font tm-popular-item-title">
                    <span className="tm-handwriting-font bigger-first-letter">
                      m
                    </span>
                    ocha
                  </h3>
                  <hr className="tm-popular-item-hr" />
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem neque. sed ipsum.
                  </p>
                  <div className="order-now-container">
                    <a href="#" className="order-now-link tm-handwriting-font">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="tm-section row">
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="tm-section-header gold-text tm-handwriting-font">
                <img src="img/logo.png" alt="Logo" className="tm-site-logo" />{" "}
                Today's Special
              </h2>
              <div className="tm-hr-container">
                <hr className="tm-hr" />
              </div>
            </div>
            <div className="col-lg-12 tm-special-container margin-top-60">
              <div className="tm-special-container-left">
                {" "}
                {/* left */}
                <div className="tm-special-item">
                  <div className="tm-special-img-container">
                    <img
                      src="img/special-1.jpg"
                      alt="Special"
                      className="tm-special-img img-responsive"
                    />
                    <a href="#">
                      <div className="tm-special-description">
                        <h3 className="tm-special-title">Donec pede justo</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tm-special-container-right">
                {" "}
                {/* right */}
                <div>
                  <div className="tm-special-item">
                    <div className="tm-special-img-container">
                      <img
                        src="img/special-2.jpg"
                        alt="Special"
                        className="img-responsive"
                      />
                      <a href="#">
                        <div className="tm-special-description">
                          <h3 className="tm-special-title">Etiam sit amet</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tm-special-container-lower">
                  <div className="tm-special-item">
                    <div className="tm-special-img-container">
                      <img
                        src="img/special-3.jpg"
                        alt="Special"
                        className="img-responsive"
                      />
                      <a href="#">
                        <div className="tm-special-description">
                          <p>Vivamus elementum</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="tm-special-item">
                    <div className="tm-special-img-container">
                      <img
                        src="img/special-4.jpg"
                        alt="Special"
                        className="img-responsive"
                      />
                      <a href="#">
                        <div className="tm-special-description">
                          <p>Quisque rutrum.</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="tm-section">
            <div className="row">
              <div className="col-lg-12 tm-section-header-container">
                <h2 className="tm-section-header gold-text tm-handwriting-font">
                  <img src="img/logo.png" alt="Logo" className="tm-site-logo" />{" "}
                  Daily Menu
                </h2>
                <div className="tm-hr-container">
                  <hr className="tm-hr" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="tm-daily-menu-container margin-top-60">
                <div className="col-lg-4 col-md-4">
                  <img
                    src="img/menu-board.png"
                    alt="Menu board"
                    className="tm-daily-menu-img"
                  />
                </div>
                <div className="col-lg-8 col-md-8">
                  <p>
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                    rhoncus.
                  </p>
                  <ol className="margin-top-30">
                    <li>Tellus eget condimentum rhoncus.</li>
                    <li>Sem quam semper libero.</li>
                    <li>Sit amet adipiscing sem neque sed ipsum.</li>
                    <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
                    <li>Maecenas nec odio et ante tincidunt tempus.</li>
                    <li>Donec vitae sapien ut libero ventenatis faucibus.</li>
                  </ol>
                  <a href="#" className="tm-more-button margin-top-30">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Home;
