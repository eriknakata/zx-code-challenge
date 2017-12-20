import React, { Component } from 'react';

export default class SearchBox extends Component {

    searchProduct = (e) => {
        if (e.key === "Enter")
            this.props.onKeyDown(e.target.value);
    }

    render() {
        return (
            <input id="search-product" type="text" onKeyDown={this.searchProduct} placeholder="Digite o nome de um produto" />
        );
    }
}