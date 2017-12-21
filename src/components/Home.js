import React, { Component } from 'react';
import GoogleMapsAutocomplete from './GoogleMapsAutocomplete'

export default class Home extends Component {
    render() {
        return (
            <section className="container">
                <div className="description">
                    Preguiça de sair de casa? Bora pedir uma que o Zé te ajuda!
                </div>
                <div className="address">
                    <GoogleMapsAutocomplete history={this.props.history} />
                </div>
            </section>
        );
    }
}