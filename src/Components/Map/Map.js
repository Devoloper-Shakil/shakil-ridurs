import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '500px'
};

const center = {
  lat: 23.707310,
  lng:90.415482
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyC8ZTKaF5BfE6Uh4VsIfJGfVZPd1rGUwY8'

    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)