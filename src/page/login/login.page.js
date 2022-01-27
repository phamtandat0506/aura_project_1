import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUserAction } from './../../store/actions/login.actions';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUser: ''
        }
    }

    async componentWillMount() {
        await this.props.dispatch(getAllUserAction())
        this.setState({
            listuser: this.props.listUser
        })
    }



    render() {
        console.log(this.state);
        return (
            <div className='container' style={{marginTop: "100px", marginBottom: "20px"}}>
                
                <div clasclassNames="row">
                <form method="POST" role="form">
                    <legend className='text-center'>Login</legend>

                    <div className="form-group">
                        <label htmlFor="username">User name:</label>
                        <input type="text" id="username" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pass">Password: </label>
                        <input type="text" id="pass" className="form-control" />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
            </form>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUser : state.listUser
    }
}


export default connect(mapStateToProps)(Login);