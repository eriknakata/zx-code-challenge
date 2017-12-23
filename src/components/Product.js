import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/product.css'

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
        };

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    addProduct() {
        this.setState(prevState => {
            return { quantity: prevState.quantity + 1 };
        })
    }

    removeProduct() {
        this.setState(prevState => {
            return { quantity: prevState.quantity === 0 ? 0 : prevState.quantity - 1 };
        })
    }

    render() {
        return (
            <div className="product-card">
                <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
                <span className="product-title">{this.props.title}</span>
                <span className="product-price">R$ {this.props.price}</span>
                <div className="product-buttons">
                    <button className="btn-subtract" onClick={this.removeProduct}>
                        -
                    </button>
                    <div className="box-quantity">
                        <span>{this.state.quantity}</span>
                    </div>
                    <button className="btn-plus" onClick={this.addProduct}>
                        +
                    </button>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
 };

export default Product