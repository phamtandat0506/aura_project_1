import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProductAction } from './../../store/actions/product.actions';
import { API_URL } from '../../store/constants/conFig'

// import parse from 'html-react-parser'
// import { DOMPurify } from 'dompurify';
import { addCartAction } from "../../store/actions/cart.actions";



class Detail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listProduct: "",
            id: "",
            name: "",
            picture: "",
            price: "",
            quantity: 0,
        }
    }

    componentWillMount() {
        this.props.dispatch(getAllProductAction(20, 1))
        this.setState({
            listProduct: this.props.listProduct
        })
        console.log(this.props.listProduct);

    }

    addCart = async (pro) => {
        console.log(pro.ten_vt);
        await this.setState({
            id: pro._id,
            name: pro.ten_vt,
            price: pro.gia_ban_le,
            picture: `${API_URL}${pro.picture}`,
            quantity: 1,
        })
        this.props.dispatch(addCartAction(this.state))
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
                                                    
                                                    <div className="row">
                                                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                                            <h3
                                                                style={{ color: "Brown" }}
                                                            >
                                                                {item.gia_ban_le.toLocaleString("en")} vnđ
                                                            </h3>
                                                        </div>
                                                        
                                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                            
                                                            <button 
                                                                type="button" 
                                                                className="btn btn-primary"
                                                                onClick={() => this.addCart(item)}
                                                            >Buy</button>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                        
                                                        <div >
                                                            <span dangerouslySetInnerHTML={{ __html: mt }}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div >
                                                    <span dangerouslySetInnerHTML={{ __html: mtct }}></span>
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