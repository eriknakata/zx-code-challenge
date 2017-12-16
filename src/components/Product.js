import React, { Component } from 'react';
import '../assets/css/product.css'
import bud from '../assets/images/bud.jpg'

export default class Product extends Component {
    
    render() {
        return (
            <div className="product-cart">
                <img src={bud} width="150" height="150" alt={this.props.productName} title={this.props.productName} />
                <div className="product-title">
                    <span>{this.props.productName}</span>
                </div>
                <div className="product-price">
                    <span>R$ {this.props.price}</span>
                </div>
                <div className="product-buttons">
                    <div className="btn-subtract">
                        -
                    </div>
                    <div className="btn-plus">
                        +
                    </div>
                </div>
            </div>
        );
    }
}