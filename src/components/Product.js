import React, { Component } from 'react';
import '../assets/css/product.css'

export default class Product extends Component {

    render() {
        return (
            <div className="product-card">
                <img src={this.props.imageUrl} width="150" height="150" alt={this.props.productName} title={this.props.productName} />
                <span className="product-title">{this.props.productName}</span>
                <span className="product-price">R$ {this.props.price}</span>
                <div className="product-buttons">
                    <div className="btn-subtract">
                        -
                    </div>
                    <div className="box-quantity">
                        <span>{this.props.quantity}</span>
                    </div>
                    <div className="btn-plus">
                        +
                    </div>
                </div>
            </div>
        );
    }
}