import React, { Component } from "react";
import { connect } from "react-redux";
import { addCartAction } from "../../store/actions/cart.actions";
import { getAllProductAction } from "../../store/actions/product.actions";
import { API_URL } from "../../store/constants/conFig";
import { Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: "",
      id: "",
      name: "",
      picture: "",
      price: "",
      quantity: 0,
    };
  }

  giaTien = (flo) => {
    return (flo.toLocaleString("en"))
  }

  async componentWillMount() {
    await this.props.dispatch(getAllProductAction(20, 1));
    this.setState({
      listProduct: this.props.listProduct,
    });
  }
  addCart = async (product) => {
    console.log(product.ten_vt);
    await this.setState({
      id: product._id,
      name: product.ten_vt,
      price: product.gia_ban_le,
      picture: `${API_URL}${product.picture}`,
      quantity: 1,
    });
    this.props.dispatch(addCartAction(this.state))
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

  showListProduct = (listProduct) => {
    let result = "";
    if (listProduct.length > 0) {

      result = listProduct.map((product, index) => {
        const mt = product.mieu_ta
        return (
          <div
            className="tm-product col-lg-6 col-md-6"
            key={index}
            style={{ margin: "5px", padding: "10", width: "48%" }}
          >
            <Link
              to={"/detail/" + this.toURL(product.ten_vt) + "/" + product._id}
            >
              <img
                src={`${API_URL}${product.picture}`}
                alt="Product"
                style={{ width: "136px", height: "136px" }}
              />
            </Link>
            <div className="tm-product-text">
              <Link
                to={"/detail/" + this.toURL(product.ten_vt) + "/" + product._id}
              >
                <h3 className="tm-product-title">{product.ten_vt}</h3>
              </Link>
              <p className="tm-product-description">
                <div >
                  <div dangerouslySetInnerHTML={{ __html: mt }}></div>
                </div>
              </p>
            </div>
            <div className="tm-product-price">
              <a
                className="tm-product-price-link tm-handwriting-font"
                onClick={() => this.addCart(product)}
                style={{ fontSize: 20 }}
              >
                <p style={{ marginTop: "15px" }}>{this.giaTien(product.gia_ban_le)} đ</p>
                <span className="tm-product-price-currency"></span>
              </a>
            </div>
          </div>
        );
      });
    }

    return result;
  };

  render() {

    return (
      <div className="tm-main-section light-gray-bg">
        <div className="container" id="main">
          <section className="tm-section row">
            <div className="col-lg-9 col-md-9 col-sm-8">
              <h2 className="tm-section-header gold-text tm-handwriting-font">
                Variety of Menus
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
          <section className="tm-section row">
            <div className="col-lg-12 tm-section-header-container margin-bottom-30">
              <h2 className="tm-section-header gold-text tm-handwriting-font">
                <img src="img/logo.png" alt="Logo" className="tm-site-logo" />{" "}
                Our Menus
              </h2>
              <div className="tm-hr-container">
                <hr className="tm-hr" />
              </div>
            </div>
            <div>
              <div className="tm-menu-product-content col-lg-12 col-md-12">
                {this.showListProduct(this.state.listProduct)}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listProduct: state.product.listProduct,
  };
};
export default connect(mapStateToProps)(Menu);
