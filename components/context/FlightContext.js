import { createContext, useState } from "react";

export const FlightContext = createContext();
export const ImageContext = createContext();
export const UpperContext = createContext();
export const LowerContext = createContext();
export const FlightProvider = ({ children }) => {
  const [flightData, setFlightData] = useState({ flight: 0 });
  const [url, setUrl] = useState();
  const [viewPortUpper, setViewPortUpper] = useState();
  const [viewPortLower, setViewPortLower] = useState();
  return (
    <FlightContext.Provider value={[flightData, setFlightData]}>
      <ImageContext.Provider value={[url, setUrl]}>
        <UpperContext.Provider value={[viewPortUpper, setViewPortUpper]}>
          <LowerContext.Provider value={[viewPortLower, setViewPortLower]}>
            {children}
          </LowerContext.Provider>
        </UpperContext.Provider>
      </ImageContext.Provider>
    </FlightContext.Provider>
  );
};
