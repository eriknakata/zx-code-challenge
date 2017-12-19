import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/header.css'
import zxLogo from '../assets/images/zx-ventures-logo.jpg'

export default class Header extends Component {

    constructor() {
        super();
        this.state = { itemsQuantity: 0 }
    }

    render() {
        return (
            <header className="zx-header">
                <div className="box-header container">
                    <div className="box-header-logo">
                        <Link to="/">
                            <img className="img-logo" src={zxLogo} alt="ZX Ventures" />
                        </Link>
                    </div>
                    <div className="box-cart">
                        <Link to="#">
                            <span>Carrinho ({this.state.itemsQuantity})</span>
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <hr />
                </div>
            </header>
        );
    }
}