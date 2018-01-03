import React, { Component } from 'react';
import Product from './ProductContainer'
import CategoryList from '../container/CategoryList'
import '../../styles/products.css'
import { getProducts } from '../../api/product-api';
import SearchBox from '../container/SearchBoxEnter'
import Loading from '../presentational/Loading'

export default class ProductsList extends Component {

    constructor() {
        super();
        this.state = { products: [], categoryId: 0, search: '', loading: false }
    }

    fetchProducts() {
        this.setState({ loading: true })
        getProducts(localStorage.getItem("pocId"), this.state.search, this.state.categoryId)
            .then(this.handleResponse)
            .catch(this.handleError)
    }

    handleResponse = (products) => {
        this.setState({ loading: false })
        this.setState({ products: products })
    }

    handleError = () => {
        this.setState({ loading: false })
    }

    render() {
        return (
            <div className="container">
                <div className="filters">
                    <div className="categories-filter item">
                        <CategoryList onChange={e => this.setState({ categoryId: e.target.value }, this.fetchProducts)} />
                    </div>
                    <div className="search-box-filter item">
                        <SearchBox onKeyDown={productTitle => this.setState({ search: productTitle }, this.fetchProducts)} />
                    </div>
                </div>

                <div className="products-container">
                    {
                        this.state.products.length === 0
                            ? <p>Nenhum produto encontrado!</p>
                            :
                            this.state.products.map((product, index) => {
                                return <Product {...product} key={index} />
                            })
                    }
                </div>
                {this.state.loading ? <Loading /> : ""}
            </div>
        );
    }

    componentDidMount() {
        this.fetchProducts()
    }
}