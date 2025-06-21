import React from 'react';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { useLoaderData } from 'react-router';

const position = [23.6850, 90.3563]; // Center of Bangladesh

// Optional custom icon (can skip for default)
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Helper component to move map
function FlyToDistrict({ coords }) {
    const map = useMap();
    if (coords) {
        map.flyTo(coords, 14, { duration: 1.5 });
    }
    return null;
}

const CoveragePage = () => {
    const warehouses = useLoaderData();
    
    

    const [activeCoords, setActiveCoords] = useState(null);
     const [activeDistrict, setActiveDistrict] = useState(null);
    return (
        <div className='my-20 max-w-7xl mx-auto'>
            <h1>This is CoveragePage</h1>

            {/* Map Container */}
            <section className='h-[400px] w-full'>
                <MapContainer center={position} zoom={8} scrollWheelZoom={true} className="h-full w-full z-0">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FlyToDistrict coords={activeCoords} />
                <h1>This is map</h1>

                {
                    warehouses.map((center, index) => <Marker
                        key={index}
                        position={[center.latitude, center.longitude]}
                        icon={customIcon}>
                        <Popup autoOpen={center.district === activeDistrict}>
                            <strong>{center.district}</strong><br />
                            {center.covered_area.join(', ')}
                        </Popup>
                    </Marker>)
                }
            </MapContainer>
            </section>
        </div>
    );
};

export default CoveragePage;