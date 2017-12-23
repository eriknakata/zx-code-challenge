import React from 'react';
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import '../styles/reset.css'
import '../styles/index.css'
const Fragment = React.Fragment;

export default () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}