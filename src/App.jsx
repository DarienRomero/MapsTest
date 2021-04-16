import React from 'react';
import Map from './Map';
import credentials from './credentials';
import LocationSearchInput from './LocationSearchInput';
import MyDropzone from './MyDropzone';

const App = () => {
    return (
        <>
            <LocationSearchInput/>
            <Map 
                googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`}
                containerElement= {<div style= {{height: '400px'}}/>}
                mapElement = {<div style={{height:'100%'}}/>}
                loadingElement= {<p>Cargando</p>}
            />
            <MyDropzone/>
        </>
    )
}

export default App;