import React, { Component } from 'react';
import './assets/css/reset.css'
import './assets/css/main.css'
import Header from './components/Header'
import Products from './components/Products'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Products />
      </div>
    );
  }
}