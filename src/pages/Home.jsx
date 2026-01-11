import { useState, useEffect } from "react";
import AlertContainer from "../components/AlertContainer";
import DetailAlert from "../components/DetailAlert";
import MainContainer from "../components/MainContainer";

const Home = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [devices, setDevices] = useState([]);
  const [crashAlerts, setCrashAlerts] = useState([]);

  // Fetch GPS devices
  useEffect(() => {
    const fetchGPS = async () => {
      try {
        const res = await fetch("http://localhost:3000/gps");
        const data = await res.json();
        setDevices(data);

        // Filter only CRASH devices and convert to alert format
        const crashes = data
          .filter(d => d.infotype === "CRASH")
          .map(d => ({
            id: d.deviceId || "UNKNOWN",
            type: d.infotype,
            time: new Date(d.timestamp).toLocaleTimeString() || "Just Now",
            title: d.description || "Crash Detected",
            location: d.location || `${d.latitude}, ${d.longitude}`,
            severity: d.severity || "High",
            license: d.licenseNo || "N/A",
            latitude: d.latitude,
            longitude: d.longitude
          }));

        setCrashAlerts(crashes);
      } catch (err) {
        console.error("Error fetching GPS data:", err);
      }
    };

    fetchGPS();
    const interval = setInterval(fetchGPS, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">

      {/* LEFT: Crash Alerts */}
      <div className="w-full lg:w-[600px]">
        <AlertContainer
          alerts={crashAlerts}
          onSelectAlert={setSelectedAlert}
        />
      </div>

      {/* MIDDLE: Main Page Content */}
      <MainContainer devices={devices} />

      {/* RIGHT: Details */}
      <div className="w-full lg:w-[860px]">
        <DetailAlert
          alert={selectedAlert}
          onClose={() => setSelectedAlert(null)}
        />
      </div>

    </div>
  );
};

export default Home;
