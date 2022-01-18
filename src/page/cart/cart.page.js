import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteCartAction,
  updateCartAction,
} from "../../store/actions/cart.actions";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: "",
    };
  }
  async componentWillMount() {
    await this.setState({
      cart: this.props.cart,
    });
  }
  componentDidUpdate() {
    if (JSON.stringify(this.props.cart) !== JSON.stringify(this.state.cart)) {
      this.setState({
        cart: this.props.cart,
      });
    }
  }
  onDelete = (cartItem) => {
    this.props.dispatch(deleteCartAction(cartItem));
  };
  changeQuantity = (cartItem, change) => {
    if (cartItem.quantity + change > 0) {
      let temp = {
        id: cartItem.id,
        name: cartItem.name,
        price: cartItem.price,
        picture: cartItem.picture,
        quantity: cartItem.quantity + change,
      };
      this.props.dispatch(updateCartAction(temp));
    }
  };
  showCart = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = cart.map((cartItem, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{cartItem.name}</td>
            <td>{cartItem.price.toLocaleString("en")} đ</td>
            <td>
              <img
                src={cartItem.picture}
                style={{ width: "136px", height: "136px" }}
              />
            </td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.changeQuantity(cartItem, -1)}
              >
                -
              </button>
              {cartItem.quantity}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.changeQuantity(cartItem, 1)}
              >
                +
              </button>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.onDelete(cartItem)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
    return result;
  };
  sumMoney = (cart) => {
    let result = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        result = result + cart[i].price * cart[i].quantity;
      }
    }
    return result.toLocaleString("en");
  };
  render() {
    const { cart } = this.state;
    return (
      <div>
        <section className="container " style={{ marginTop: 100 }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Quality</th>
                <th />
              </tr>
            </thead>
            <tbody>{this.showCart(cart)}</tbody>
          </table>
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 text-right">
              <p>Total money: {this.sumMoney(cart)}</p>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
              <button type="button" className="btn btn-success">
                Payment
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Cart);
