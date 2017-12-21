import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/header.css'
import zxLogo from '../assets/images/zx-ventures-logo.jpg'

export default class Header extends Component {

    render() {
        return (
            <header className="zx-header">
                <div className="container">
                    <div className="box-header">
                        <div className="box-header-logo">
                            <Link to="/">
                                <img className="img-logo" src={zxLogo} alt="ZX Ventures" />
                            </Link>
                        </div>
                        <div className="box-cart">
                            <Link to="#">
                                <span>Carrinho</span>
                            </Link>
                        </div>
                    </div>
                    <hr />
                </div>
            </header>
        );
    }
}