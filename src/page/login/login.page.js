import React, { Component } from "react";
import { connect } from "react-redux";
import { getTokenUserAction } from "../../store/actions/user.actions";
import { getAllUserAction } from "./../../store/actions/login.actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: ''
        };
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = async(event) => {
        await event.preventDefault()
        console.log(this.state.Username, this.state.Password);
        await this.props.dispatch(getTokenUserAction(this.state.Username, this.state.Password));
        console.log(this.props.tokenUser);
    }

    render() {
        return (
        <div
            className="container"
            style={{ marginTop: "100px", marginBottom: "20px" }}
        >
            <div className="row">
                <form method="POST" role="form" onSubmit={this.onSubmit}>
                    <legend className="text-center">Login</legend>

                    <div className="form-group">
                        <label htmlFor="username">User name:</label>
                        <input type="text" name="Username" id="username" className="form-control" onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pass">Password: </label>
                        <input type="text" name="Password" id="pass" className="form-control" onChange={this.onChange}/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        tokenUser : state.user.tokenUser,
    }
}
export default connect(mapStateToProps)(Login);
