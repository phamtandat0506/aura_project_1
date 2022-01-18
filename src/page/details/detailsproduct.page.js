import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProductAction } from './../../store/actions/product.actions';
import { API_URL } from '../../store/constants/conFig'

import parse from 'html-react-parser'
import { DOMPurify } from 'dompurify';



class Detail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listProduct: ""
        }
    }

    componentWillMount() {
        this.props.dispatch(getAllProductAction(20, 1))
        this.setState({
            listProduct: this.props.listProduct
        })
        console.log(this.props.listProduct);

    }

    render() {

        let urlElements = window.location.href.split('/')

        const { pro } = this.state.listProduct

        return (
            <div>

                <section className="container " style={{ marginTop: 100 }}>

                    {
                        this.state.listProduct.map((item, index) => {
                            if (item._id === urlElements[5]) {
                                const mt = item.mieu_ta
                                const mtct = item.mieu_ta_chi_tiet
                                // ReactDOM.render(a, document.getElementById('mt'));

                                return (
                                    <div className="row" key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <h1 className="text-center">{item.ten_vt}</h1>
                                            <div className="row" style={{ fontSize: "20px" }}>
                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                    <img
                                                        src={`${API_URL}${item.picture}`}
                                                        style={{ width: "100%", height: "100%" }}
                                                    />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                        <h3
                                                            style={{ color: "Brown" }}
                                                        >
                                                            {item.gia_ban_le.toLocaleString("en")} vnđ
                                                        </h3>
                                                        <div >
                                                            <div dangerouslySetInnerHTML={{ __html: mt }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div >
                                                    <div dangerouslySetInnerHTML={{ __html: mtct }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }


                </section>


            </div>
        )

    }

}


const mapStateToProps = (state) => {
    return {
        listProduct: state.product.listProduct,
    };
};
export default connect(mapStateToProps)(Detail);