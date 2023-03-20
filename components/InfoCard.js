import React, { useContext, useEffect } from "react";
import { FlightContext } from "./context/FlightContext";

function InfoCard() {
  const [flightData, setFlightData] = useContext(FlightContext);

  useEffect(() => {
    console.log("Current flight data is", flightData);
  }, [flightData]);
  return (
    <div className="absolute bg-white top-[96px] left-[29px] z-40 h-[100px] w-[500px] ">
      <div className="flex-col">
        <div className="flex justify-between bg-[#303030]">
          {/* Left side */}
          <p className="text-yellow-400 text-[24px]">{flightData[1]}</p>

          {/* Right side */}

          {/* <AiCloseIcon */}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
