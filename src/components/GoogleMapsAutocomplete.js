import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../assets/css/google-maps.css'

class GoogleMapsAutocomplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: '' }
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
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
                <div className="box-submit">
                    <PlacesAutocomplete inputProps={inputProps} options={options} />
                    <button className="btn-pedir" type="submit">Pedir ;)</button>
                </div>
            </form>
        )
    }
}

export default GoogleMapsAutocomplete