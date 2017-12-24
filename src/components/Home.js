import React, { Component } from 'react';
import '../styles/home.css'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../styles/google-maps.css'
import { getPoc } from '../api/poc-api';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { address: '', pocInvalid: false, history: {} }
        this.onChange = address => this.setState({ address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(result => getPoc(result.lat, result.lng))
            .then(this.handleResult)
            .catch(error => console.error('Error', error))
    }

    handleResult = (pocs) => {
        if (pocs.length > 0) {
            //if (pocs.some(poc => poc.status === "AVAILABLE")) {
            localStorage.setItem("pocId", pocs[0].id)
            this.props.history.push("/products")
        }
        else {
            this.setState({ pocInvalid: true })
        }
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }

        const options = {
            componentRestrictions: { country: 'br' },
            types: ['address']
        }

        const cssClasses = {
            autocompleteContainer: 'autocomplete-container',

        }

        return (
            <section className="container">
                <div className="description">Preguiça de sair de casa? Bora pedir uma que o Zé te ajuda!</div>
                <div className="address">
                    <form onSubmit={this.handleFormSubmit}>
                        <PlacesAutocomplete classNames={cssClasses} inputProps={inputProps} options={options} />
                        <button className="btn-pedir" type="submit">Fazer pedido</button>
                        <span style={{ display: this.state.pocInvalid ? 'block' : 'none' }} className="error-message">Ops! Não encontramos nenhum fornecedor disponível no endereço informado </span>
                    </form>
                </div>
            </section>
        );
    }
}