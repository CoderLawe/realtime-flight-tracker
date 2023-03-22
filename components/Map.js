import React, { useContext, useEffect, useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";
import { FlightContext } from "../components/context/FlightContext";
// How to make a popup in react-map-gl that only opens when a specific marker is cliecked ?
function Map({ data }) {
  //   const coordinates = { longitude: 8.9867, latitude: 46.3347 };
  const coordinates = data?.states.map((res) => ({
    longitude: res[5],
    latitude: res[6],
  }));
  const center = getCenter(coordinates);

  const [popupOpen, setPopupOpen] = useState(false);
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 10,
  });

  const [selectedFlight, setSelectedFlight] = useState([]);
  const [selected, setSelected] = useState();
  const [toObject, setToObject] = useState({});
  const [flightData, setFlightData] = useContext(FlightContext);
  const [staged, setStaged] = useState({ flight: 0 });

  const stagedFlight = (flight) => {
    setFlightData({ ...flight });
    console.log("staged", flight);
  };

  useEffect(() => {
    console.log("viewport", viewPort);
  }, [viewPort]);
  return (
    <ReactMapGl
      className="w-[100%] h-[100%] z-0 absolute "
      mapStyle="mapbox://styles/coderlawe/cks0lilc80own17mv51dv90go"
      mapboxAccessToken="pk.eyJ1IjoiY29kZXJsYXdlIiwiYSI6ImNrcGZvbGE1ajBkd2QydnFvY2tndGs2cjYifQ.hx9O2OuDutDwo1AbZUREqg"
      //   mapboxApiAccessToken="pk.eyJ1IjoiY29kZXJsYXdlIiwiYSI6ImNrcGZvbGE1ajBkd2QydnFvY2tndGs2cjYifQ.hx9O2OuDutDwo1AbZUREqg"
      // The spread operator gets everything to that point
      initialViewState={viewPort}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {data.states.map((flight) => (
        <div key={`flight-no${flight[0]}`} className="relative">
          <Marker
            longitude={flight[5]}
            latitude={flight[6]}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <>
              <img
                onClick={() => stagedFlight(flight)}
                role="img"
                aria-label="push-pin"
                className="h-10 w-10 cursor-pointer"
                src="https://cdn.discordapp.com/attachments/839784544798638090/889140379251802122/download.png"
              />
            </>
          </Marker>
        </div>
      ))}
    </ReactMapGl>
  );
}

export default Map;
