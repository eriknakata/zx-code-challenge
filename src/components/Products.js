import React, { Component } from 'react';
import Product from './Product'
import '../assets/css/products.css'

export default class Products extends Component {

    render() {
        return (
            <div className="products-container">
                <Product productName="Corona Extra 355ml - Pack com 6 unidades" price="3.49" />
                <Product productName="Corona Extra 355ml - Pack com 6 unidades fewfw efw" price="3.49" />
                <Product productName="Corona Extra 355ml" price="3.49" />
                <Product productName="Corona Extra 355ml - Pack com 6 unidades" price="3.49" />
                <Product productName="Corona Extra 355ml - Pack com 6 unidades" price="3.49" />
                <Product productName="Corona Extra 355ml - Pack com 6 unidades fewfw efw" price="3.49" />
            </div>
        );
    }
}