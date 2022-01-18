import React, { Component } from "react";

class Contact extends Component {
  // constructor(props) {
  //     super(props);

  // }
  render() {
    return (
      <div className="tm-main-section light-gray-bg">
        <div className="container" id="main">
          <section className="tm-section row">
            <h2 className="col-lg-12 margin-bottom-30">Send us a message</h2>
            <form action="#" method="post" className="tm-contact-form">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_name"
                    className="form-control"
                    placeholder="NAME"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact_email"
                    className="form-control"
                    placeholder="EMAIL"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_subject"
                    className="form-control"
                    placeholder="SUBJECT"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="contact_message"
                    className="form-control"
                    rows={6}
                    placeholder="MESSAGE"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="tm-more-button"
                    type="submit"
                    name="submit"
                  >
                    Send message
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div id="google-map" />
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default Contact;
