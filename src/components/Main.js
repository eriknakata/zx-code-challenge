import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ProductsList from './ProductsList'
import Home from './Home'

export default class Main extends Component {
    render() {
        return (
            <main className="content" role="main">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/products' component={ProductsList} />
                </Switch>
            </main>
        );
    }
}