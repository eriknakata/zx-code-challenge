import React, { Component } from 'react';
import Product from './Product'
import Categories from './Categories'
import '../styles/products.css'
import { createApolloFetch } from 'apollo-fetch';
import SearchBox from './SearchBox'

export default class ProductsList extends Component {

    constructor() {
        super();
        this.state = { products: [], categoryId: 0, search: '' }
    }

    getProducts = () => {
        this.fetchData()
            .then(({ data }) => data.poc.products.map(product => product.productVariants[0]))
            .then(products => this.setState({ products: products }))
    }

    fetchData() {
        const query = `query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
            poc(id: $id) {
              products(categoryId: $categoryId, search: $search) {
                productVariants{
                  title
                  description
                  imageUrl
                  price
                }
              }
            }
          }
          `
        const uri = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql';
        const apolloFetch = createApolloFetch({ uri });
        return apolloFetch({
            query, variables: {
                id: localStorage.getItem("pocId"),
                search: this.state.search,
                categoryId: this.state.categoryId
            }
        })
    }

    categorySelected = (categoryId) => {
        this.setState({ categoryId: categoryId }, this.getProducts)
    }

    searchStringInserted = (e) => {
        if (e.key === "Enter")
            this.setState({ search: e.target.value }, this.getProducts)

    }

    render() {
        return (
            <div className="container">
                <div className="filters">
                    <div className="categories-filter item">
                        <Categories onChange={this.categorySelected} />
                    </div>
                    <div className="search-box-filter item">
                        <SearchBox onKeyDown={this.searchStringInserted} />
                    </div>
                </div>

                <div className="products-container">
                    {
                        this.state.products.length === 0
                            ? <p>Nenhum produto encontrado!</p>
                            :
                            this.state.products.map((product, index) => {
                                return <Product {...product} key={index} />
                            })}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getProducts()
    }
}