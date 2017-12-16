import React, { Component } from 'react';
import Product from './Product'
import '../assets/css/products.css'

export default class Products extends Component {

    render() {
        return (
            <div className="products-container">
                <Product productName="Budweiser 350ml - Unidade" price="3.49" quantity="0" imageUrl="https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/5727e7aaa2c99.jpg" />
                <Product productName="Skol 350ml - Unidade" price="2.99" quantity="0" imageUrl="https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/5662f9a0bfd2e.jpg" />
                <Product productName="Stella Artois 275ml - Pack com 6 unidades" price="23.94" quantity="0" imageUrl="https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/590cc86383b63.jpg" />
                <Product productName="Stella Artois 275ml - Unidade" price="3.99" quantity="0" imageUrl="https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/592de3ed8977d.jpg" />
            </div>
        );
    }
}