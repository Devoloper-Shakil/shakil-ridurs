import React from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';


const Maps = () => {
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
      
    return (
        <Map
        //   google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    );
};


export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8ZTKaF5BfE6Uh4VsIfJGfVZPd1rGUwY8'
  })(Maps);
  