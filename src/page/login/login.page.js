import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getDetailUserAction,
  getTokenUserAction,
} from "../../store/actions/user.actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      checkLogin: 0,
      message: "",
    };
  }
  
  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = async (event) => {
    await event.preventDefault();
    await this.props.dispatch(
      getTokenUserAction(this.state.Username, this.state.Password),
    );
    if (this.props.tokenUser.token) {
      await this.props.dispatch(
        getDetailUserAction(this.props.tokenUser.token),
      );
      this.setState({
        checkLogin: 1,
      });
      console.log(this.props.detailUser);
      console.log(this.props.history);
      this.props.history.push("/");
    } else {
      if (this.props.tokenUser.message) {
        console.log(this.props.tokenUser.message);
        this.setState({
          checkLogin: -1,
          message: this.props.tokenUser.message
        });
      }
    }
  };

  render() {
    const { checkLogin, message } = this.state;
    return (
      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "20px" }}
      >
        <div className="row">
          <form method="POST" onSubmit={this.onSubmit}>
            <legend className="text-center">Login</legend>

            <div className="form-group">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                name="Username"
                id="username"
                className="form-control"
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pass">Password: </label>
              <input
                type="text"
                name="Password"
                id="pass"
                className="form-control"
                onChange={this.onChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            {checkLogin === -1 ? (
              <div className="alert alert-warning">
                <strong>{message}!</strong>
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tokenUser: state.user.tokenUser,
    detailUser: state.user.detailUser,
  };
};
export default connect(mapStateToProps)(Login);
