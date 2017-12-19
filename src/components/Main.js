import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Products from './Products'
import Home from './Home'
import '../assets/css/reset.css'
import '../assets/css/main.css'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/products' component={Products} />
                </Switch>
            </div>
        );
    }
}