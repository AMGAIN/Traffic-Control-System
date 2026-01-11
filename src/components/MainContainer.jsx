import React from "react";
import MapComponent from "./Map";
import TrafficMatrics from "./TrafficMatrics";

const MainContainer = ({ devices = [] }) => {
  return (
    <div className="w-full my-2 lg:mt-0 lg:px-2 lg:min-w-[400px] xl:min-w-[650px]">
      <MapComponent devices={devices} />
      <TrafficMatrics />
    </div>
  );
};

export default MainContainer;
