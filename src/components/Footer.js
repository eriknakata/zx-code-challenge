import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/footer.css'

export default class Footer extends Component {

    render() {
        return (
            <footer className="container">
                <hr />
                <div className="grid-footer">
                    <div className="grid-item">
                        <h3>Mais sobre nós</h3>
                        <ul>
                            <li><Link to="#">Nossa história</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">Política de Privacidade</Link></li>
                            <li><Link to="#">Contato</Link></li>
                        </ul>
                    </div>
                    <div className="grid-item">
                        <h3>Novidades</h3>
                        <label className="news-description" htmlFor="newsLetter">Se inscreva e receba novidades ;)</label>
                        <div className="box-submit">
                            <input type="email" id="newsLetter" />
                            <button type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="grid-footer">
                    <div className="grid-item">
                        <small>Copyright © 2017, ZX Ventures</small>
                    </div>
                    <div className="grid-item box-payments">
                        <ul>
                            <li className="icon-payment icon-mastercard"></li>
                            <li className="icon-payment icon-visa"></li>
                            <li className="icon-payment icon-amex"></li>
                            <li className="icon-payment icon-bitcoin"></li>
                            <li className="icon-payment icon-paypal"></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}