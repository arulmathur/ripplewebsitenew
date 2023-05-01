import React, { useRef, useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import geoJson from "./map-data.json";

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1bG1hdGh1cjEiLCJhIjoiY2xoMnNxcWRkMWdjYjNzcG02YTF2cGo5YSJ9.UlYoOYufeV3wrZi_nrpmZA';

function PopupContent() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Hello World!</h3>
            <p className="popup-body" style={{ color: "black" }}>This is some text in the popup.</p>
        </div>
    );
}

function Map() {
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(-87.65);
    const [lat, setLat] = useState(41.84);
    const [zoom, setZoom] = useState(7);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [lng, lat],
            zoom: zoom
        });

        setMap(map);

        const popupContent = ReactDOMServer.renderToString(<PopupContent />); // Render the React component as HTML

        const marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent)); // Use setHTML to set the popup content

        return () => {
            map.remove();
        };
    }, []);


    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Map;
