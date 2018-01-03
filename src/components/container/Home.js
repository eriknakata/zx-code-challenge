import React, { Component } from 'react';
import '../../styles/home.css'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../../styles/google-maps.css'
import { getPoc } from '../../api/poc-api';
import cervejas from '../../images/Cervezas.jpg'
import Loading from '../presentational/Loading'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            pocInvalid: false,
            history: {},
            hasError: false,
            loading: false
        }
    }

    onChange = address => this.setState({ address })

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.setState({ loading: true })

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(result => getPoc(result.lat, result.lng))
            .then(this.handleResult)
            .catch(this.handleError)
    }

    handleError = () => {
        this.setState({ hasError: true })
        this.setState({ loading: false })
    }

    handleResult = (pocs) => {
        if (pocs.some(poc => poc.status === "AVAILABLE")) {
            localStorage.setItem("pocId", pocs[0].id)
            this.props.history.push("/products")
        }
        else {
            this.setState({ loading: false })
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

        let loading = this.state.loading ? <Loading /> : ""

        return (
            <section className="container">
                <div className="address-info">
                    <div className="title">Preguiça de sair de casa? Bora pedir uma que o Zé te ajuda!</div>
                    <div className="description">Chegamos rapidinho na sua casa e podemos matar sua fome tbm! :)</div>
                    <div className="address">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="control-label" >
                                <label htmlFor="PlacesAutocomplete__root">Seu endereço</label>
                            </div>
                            <PlacesAutocomplete classNames={cssClasses} inputProps={inputProps} options={options} />
                            <button className="btn-pedir" type="submit">Fazer pedido</button>
                            <span style={{ display: this.state.pocInvalid ? 'block' : 'none' }} className="error-message">Ops! Não encontramos nenhum fornecedor disponível no endereço informado </span>
                            <span style={{ display: this.state.hasError ? 'block' : 'none' }} className="error-message">Ops! Erro encontrado! Tente novamente </span>
                        </form>
                    </div>
                </div>
                <div id="pic">
                    <img src={cervejas} alt="Cervejas" />
                </div>
                {loading}
            </section>
        );
    }
}