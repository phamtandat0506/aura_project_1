import React, { Component } from 'react';
import { connect } from "react-redux";


class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payment: {},
            cart: {},
            trang_thai: 0,
            details: [], 
            t_sl: 0,
            t_tien_hang: 0,
            t_ck: 0,
            t_tt: 0
        }
    }

    async componentDidMount() {
        await this.setState({
            payment: this.props.payment,
            cart: this.props.cart
        })

    }

    showCart = (cart) => {
        let result = null
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                
                return (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.name}</td>
                        <td>
                            <img
                                src={item.picture}
                                style={{ width: "80px", height: "60px" }}
                            />
                        </td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                    </tr>
                )
            })
        }
        return result
    }

    render() {
        const cart = this.state.cart
        console.log(cart);
        const { payment } = this.state
        console.log(payment);
        return (
            <div style={{ marginTop: '100px' }} className='container'>

                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form action="" method="POST" role="form">
                            <legend className='text-center'>Guest Info</legend>

                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input type="text" id="name" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="receiver">Receiver: </label>
                                <input type="text" id="receiver" className="form-control" />
                            </div>

                            

                            <button type="submit" className="btn btn-primary ">Submit</button>
                            
                        </form>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <legend className='text-center'>Order</legend>
                        <table className="table table-bordered table-hover">

                            <thead>
                                <tr>
                                    <th>Num</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quanlity</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.showCart(cart)}

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        payment: state.payment,
        cart: state.cart
    }
}
export default connect(mapStateToProps)(Payment)
