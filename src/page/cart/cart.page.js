import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteCartAction,
  updateCartAction,
} from "../../store/actions/cart.actions";
import { Link } from 'react-router-dom'

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

  toURL = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
  }

  showCart = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = cart.map((cartItem, index) => {
        return (
          <tr key={index}>
            <td>{ ++index }</td>
            <td>
              <Link
                to={"/detail/" + this.toURL(cartItem.name) + "/" + cartItem.id}
              >
                {cartItem.name}
              </Link> 
            </td>
            <td>
              <Link
                to={"/detail/" + this.toURL(cartItem.name) + "/" + cartItem.id}
              >
                {cartItem.price.toLocaleString("en")} đ
              </Link>
            </td>
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
    console.log(typeof this.state);
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
              <p>Total money: {this.sumMoney(cart)} đ</p>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
              <Link to="/payment">
                <button type="button" className="btn btn-success">
                  Payment 
                </button>
              </Link>
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
