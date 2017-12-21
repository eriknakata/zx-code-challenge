import React, { Component } from 'react';
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import '../assets/css/reset.css'
import '../assets/css/index.css'
const Fragment = React.Fragment;

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}