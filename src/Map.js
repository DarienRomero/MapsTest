import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

const Map = (props) => {
    return (
        <>
            <GoogleMap 
            defaultZoom = {15}
            defaultCenter={{ lat: -13.177294, lng: -74.206997}}
            />
        </>
    );
}

export default withScriptjs(
    withGoogleMap(Map)
)