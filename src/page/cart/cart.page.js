import React, { Component } from "react";

class Cart extends Component {
  // constructor(props) {
  //     super(props);

  // }
  render() {
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
            <tbody>
              <tr>
                <td>1</td>
                <td>Cafe sua</td>
                <td>20000vnd </td>
                <td />
                <td>
                  <button type="button" className="btn btn-primary">
                    -
                  </button>
                  2
                  <button type="button" className="btn btn-primary">
                    +
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 text-right">
              <p>Total money: </p>
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
export default Cart;
