import React, { useRef, useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1bG1hdGh1cjEiLCJhIjoiY2xoMnNxcWRkMWdjYjNzcG02YTF2cGo5YSJ9.UlYoOYufeV3wrZi_nrpmZA';

function PopupContent() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Katiiti</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent1() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Kasoozo</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent2() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Gobero</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent3() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black", fontSize: "25px" }}>St. Joseph's Aid Society of Kigando</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent4() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black", fontSize: "25px" }}>Ssunga Health Center</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent5() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black", fontSize: "25px" }}>Beautiful Feet Orphanage</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent6() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Kyegobo</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent7() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Mpegwe</h3>
            <p className="popup-body" style={{ color: "black" }}>This is sample text to fill up</p>
        </div>
    );
}

function PopupContent8() {
    return (
        <div>
            <h3 className="popup-title" style={{ color: "black" }}>Bbembe</h3>
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
            zoom: zoom,
            scrollZoom: false
        });


        map.addControl(new mapboxgl.NavigationControl(), 'top-left');

        setMap(map);

        const popupContent = ReactDOMServer.renderToString(<PopupContent />);
        const popupContent1 = ReactDOMServer.renderToString(<PopupContent1 />);
        const popupContent2 = ReactDOMServer.renderToString(<PopupContent2 />);
        const popupContent3 = ReactDOMServer.renderToString(<PopupContent3 />);
        const popupContent4 = ReactDOMServer.renderToString(<PopupContent4 />);
        const popupContent5 = ReactDOMServer.renderToString(<PopupContent5 />);
        const popupContent6 = ReactDOMServer.renderToString(<PopupContent6 />);
        const popupContent7 = ReactDOMServer.renderToString(<PopupContent7 />);
        const popupContent8 = ReactDOMServer.renderToString(<PopupContent8 />);


        const marker = new mapboxgl.Marker({ color: "Red" })
            .setLngLat([32.42, 0.43])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent));

        const marker1 = new mapboxgl.Marker({ color: "blue" })
            .setLngLat([32.31, 0.40])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent1));

        const marker2 = new mapboxgl.Marker({ color: "orange" })
            .setLngLat([32.31, 0.48])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent2));

        const marker3 = new mapboxgl.Marker({ color: "yellow" })
            .setLngLat([31.71, 0.91])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent3));

        const marker4 = new mapboxgl.Marker({ color: "green" })
            .setLngLat([31.86, -0.31])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent4));

        const marker5 = new mapboxgl.Marker({ color: "violet" })
            .setLngLat([31.92, .6])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent5));

        const marker6 = new mapboxgl.Marker({ color: "indigo" })
            .setLngLat([32.19, .24])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent6));

        const marker7 = new mapboxgl.Marker({})
            .setLngLat([32.22, .25])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent7));

        const marker8 = new mapboxgl.Marker({ color: "teal" })
            .setLngLat([32.16, .26])
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(popupContent8));

        return () => {
            map.remove();
        };
    }, []);


    return (
        <div className="map" id="map">
            <h2>Our Wells</h2>
            <p>Click on icons to see more details about the wells we've built throughout Uganda on this interactive map!</p>
            {/* <div className="sidebar">
                Longitude: {lng} | Latitude: {lat}
            </div> */}
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Map;
