import React, { Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';



const mapStyles = {
    width: '49vw',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}
                 style={mapStyles}
                 containerStyle={mapStyles}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBmfJE5UTvEv7Vpo2sUIAnXJgxtMFic0RA')
})(MapContainer)