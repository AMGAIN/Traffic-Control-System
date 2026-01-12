import React, { useState } from 'react'; // ✅ Make sure useState is imported
import { Map, Marker, ZoomControl } from 'pigeon-maps';

const MapComponent = ({ devices = [] }) => {
  const [activeLayer, setActiveLayer] = useState('Units');

  const center = devices.length
    ? [devices[0].latitude, devices[0].longitude]
    : [27.7172, 85.3240];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
      <div className="relative w-full h-[500px]">
        <Map height={500} center={center} zoom={13}>
          <ZoomControl />

          {devices.map((device, idx) => (
            <Marker
              key={idx}
              anchor={[device.latitude, device.longitude]}
              width={35}
              color={device.infotype === 'CRASH' ? 'red' : '#2563eb'}
              onClick={() =>
                alert(
                  `License: ${device.licenseNo}\nDevice: ${device.deviceId}\nStatus: ${device.infotype}`
                )
              }
            />
          ))}
        </Map>

        {/* Layer Buttons (UI only) */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 z-10">
          {['Units', 'Cameras', 'Heatmap'].map(layer => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-4 py-2 text-[11px] font-bold rounded-lg border ${
                activeLayer === layer
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-500'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="absolute bottom-4 right-6 z-10 bg-white/70 px-2 py-1 rounded">
          <p className="text-[10px] font-bold text-slate-700">
            Crash Alerts form : {devices.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
