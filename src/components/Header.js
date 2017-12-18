import React, { Component } from 'react';
import '../assets/css/header.css'
import zxLogo from '../assets/images/zx-ventures-logo.jpg'

export default class Header extends Component {
    render() {
        return (
            <header className="zx-header">
                <div className="box-header container">
                    <div className="box-header-logo">
                        <a href="#">
                            <img className="img-logo" src={zxLogo} alt="ZX Ventures" />
                        </a>
                    </div>
                    <div className="box-cart">
                        <a href="#">
                            <span>Carrinho (1)</span>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <hr />
                </div>
            </header>
        );
    }
}