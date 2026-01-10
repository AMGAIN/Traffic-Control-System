import { useState } from "react";
import AlertContainer from "../components/AlertContainer";
import DetailAlert from "../components/DetailAlert";
import MainContainer from "../components/MainContainer";

const Home = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">
      
      {/* LEFT: Alerts */}
      <div className="w-full lg:w-[600px]">
        <AlertContainer onSelectAlert={setSelectedAlert} />
      </div>

      {/* MIDDLE: Main Page Content */}
      <MainContainer/>

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
