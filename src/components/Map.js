import React, { useRef, useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import geoJson from "./map-data.json";
import markerIcon from "../assets/img/wellmarker.png";

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1bG1hdGh1cjEiLCJhIjoiY2xoMnNxcWRkMWdjYjNzcG02YTF2cGo5YSJ9.UlYoOYufeV3wrZi_nrpmZA';

function PopupContent() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Well #1</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent1() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Well #2</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent2() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Well #3</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function Map() {
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(32.29);
    const [lat, setLat] = useState(1.37);
    const [zoom, setZoom] = useState(7);

    useEffect(() => {
        if (!map) return; // wait for map to initialize
        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(2));
            setLat(map.getCenter().lat.toFixed(2));
            setZoom(map.getZoom().toFixed(2));
        });
    });

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [lng, lat],
            zoom: zoom
        });

        setMap(map);

        const popupContent = ReactDOMServer.renderToString(<PopupContent />); // Render the React component as HTML
        const popupContent1 = ReactDOMServer.renderToString(<PopupContent1 />); // Render the React component as HTML
        const popupContent2 = ReactDOMServer.renderToString(<PopupContent2 />); // Render the React component as HTML


        // Set the size of the marker icon using CSS


        const marker = new mapboxgl.Marker({ color: "Red" })
            .setLngLat([lng, lat])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent)); // Use setHTML to set the popup content

        const marker1 = new mapboxgl.Marker({ color: "blue" })
            .setLngLat([lng + 1, lat + 1])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent1)); // Use setHTML to set the popup content

        const marker2 = new mapboxgl.Marker({ color: "orange" })
            .setLngLat([lng, lat + 1])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent2)); // Use setHTML to set the popup content

        return () => {
            map.remove();
        };
    }, []);


    return (
        <div className="map" id="map">
            <h2>Our Wells</h2>
            <p>Click on icons to see more details about the wells we've built throughout Uganda on this interactive map!</p>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Map;
