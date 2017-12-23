import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../styles/google-maps.css'
import { createApolloFetch } from 'apollo-fetch';

class GoogleMapsAutocomplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: '', pocInvalid: false, history: {} }
        this.onChange = address => this.setState({ address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(this.getPoc)
            .then(this.handleResult)
            .catch(error => console.error('Error', error))
    }

    getPoc = ({ lat, lng }) => {
        const query = `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
            pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
              id
              status
            }
          }`

        const uri = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql';
        const apolloFetch = createApolloFetch({ uri });
        return apolloFetch({
            query, variables: {
                now: new Date(),
                algorithm: "NEAREST",
                lat: lat,
                long: lng
            }
        })
    }

    handleResult = ({ data }) => {
        if (data.pocSearch.some(poc => poc.status === "AVAILABLE")) {
            localStorage.setItem("pocId", data.pocSearch[0].id)
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

        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete inputProps={inputProps} options={options} />
                <button className="btn-pedir" type="submit">Fazer pedido</button>
                <span style={{ display: this.state.pocInvalid ? 'block' : 'none' }} className="error-message">Ops! Não encontramos nenhum fornecedor disponível no endereço informado </span>
            </form>
        )
    }
}

export default GoogleMapsAutocomplete