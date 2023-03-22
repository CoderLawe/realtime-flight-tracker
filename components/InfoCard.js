import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { FlightContext, ImageContext } from "./context/FlightContext";

function InfoCard() {
  const [flightData, setFlightData] = useContext(FlightContext);
  const [url, setUrl] = useContext(ImageContext);

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

        <div className="h-[250px] w-full absolute">
          <img src={url} className="h-[250px] w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
