import React, { Component } from 'react';
import { createApolloFetch } from 'apollo-fetch';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] }
    }

    categorySelected = (e) => {
        this.props.onChange(e.target.value);
    }

    fetchData() {
        const query = `query allCategoriesSearch {
            allCategory{
              title
              id
            }
          }`
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

    getCategories = () => {
        this.fetchData()
            .then(({ data }) => {
                this.setState({categories: data.allCategory})
            })
    }

    render() {
        return (
            <select id="category" onChange={this.categorySelected}>
                <option value="0">Selecione a categoria</option>
                {this.state.categories.map(category => {
                    return <option value={category.id}>{category.title}</option>
                })}
            </select>
        );
    }

    componentDidMount() {
        this.getCategories()
    }
}