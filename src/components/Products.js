import React, { Component } from 'react';
import Product from './Product'
import '../assets/css/products.css'

export default class Products extends Component {

    constructor() {
        super();
        this.state = { products: [] }
    }

    render() {
        return (
            <section className="container">
                <div className="products-container">
                    {this.state.products.map(product => {
                        return <Product {...product} />
                    })}
                </div>
            </section>
        );
    }

    componentDidMount() {
        this.setState({
            products: [
                { productName: "Budweiser", price: 3.49, quantity: 1, imageUrl: "https://s3-us-west-2.amazonaws.com/ze-delivery/upload/images/5727e7aaa2c99.jpg" }
            ]
        })
    }
}