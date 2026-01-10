import React, { useEffect, useState } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';

const MapComponent = () => {
  const [activeLayer, setActiveLayer] = useState('Heatmap');
  const [deviceData, setDeviceData] = useState(null);

  const layers = ['Heatmap', 'Cameras', 'Units'];

  // Fetch GPS from backend
  useEffect(() => {
    const fetchGPS = async () => {
      try {
        const res = await fetch('http://localhost:3000/gps');
        const data = await res.json();

        setDeviceData({
          latitude: data.latitude,
          longitude: data.longitude
        });
      } catch (error) {
        console.error('GPS fetch error:', error);
      }
    };

    fetchGPS();

    // Auto refresh every 5 seconds
    const interval = setInterval(fetchGPS, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!deviceData) return <p className="p-4">Loading map...</p>;

  const center = [deviceData.latitude, deviceData.longitude];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
      
      {/* Map Container */}
      <div className="relative w-full h-[500px] overflow-hidden">
        
        <Map 
          height={500}
          center={center}     // 🔥 dynamic center
          zoom={13}
        >
          <ZoomControl />

          {/* Main GPS Marker */}
          <Marker 
            width={40}
            anchor={center}
            color="#3b82f6"
          />

          {/* Layer-based markers */}
          {activeLayer === 'Cameras' && (
            <Marker width={30} anchor={[27.69, 85.31]} color="red" />
          )}
        </Map>

        {/* Floating Layer Buttons */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 z-10">
          {layers.map((layer) => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest rounded-lg border transition-all ${
                activeLayer === layer
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white/90 text-slate-500 border-slate-200 hover:bg-blue-50'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>

        {/* Coordinates Overlay */}
        <div className="absolute bottom-4 right-6 pointer-events-none z-10 bg-white/70 px-2 py-1 rounded">
          <p className="text-[9px] font-bold text-red-700">
            {`${deviceData.latitude}, ${deviceData.longitude}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
