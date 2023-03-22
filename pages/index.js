import Image from "next/image";
import Nav from "../components/Nav";
import Head from "next/head";
import FlightFeed from "../components/FlightFeed";
import Map from "../components/Map";
import InfoCard from "../components/InfoCard";
import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../components/context/FlightContext";
export default function Home({ data, openSkyData }) {
  // const [photos, setPhotos] = useState([]);
  const [bounds, setBounds] = useState({
    north: 90,
    south: -90,
    east: 180,
    west: -180,
  });

  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleViewportChanged = (viewport) => {
    setBounds(viewport);
    getFlightData(viewport).then((data) => setFlightData(data));
  };

  const [url, setUrl] = useContext(ImageContext);

  const search = "Cirrus Sr-22";

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${search}&per_page=1`,
        {
          headers: {
            Authorization:
              "uhGeXWCiM8eb8t427VbLOomzfey1UeN6aGrm1FnNymsqQ8qeGiAFHcJe",
          },
        }
      );

      const { photos } = await response.json();
      const { src } = photos[0];

      setUrl(src.original);
    };

    fetchImage();
    console.log("search", url);
  }, [search, url]);

  // let dataType = typeof(data);
  console.log("openSkyData", openSkyData);
  // Write a number counter in javascript?
  return (
    <div className="">
      <Head>
        <title>Flight Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="h-full">
        {/* HEader */}
        <div className="">
          <Nav />
        </div>
        <section className="h-[100%] w-[100%] absolute -mt-[55px]">
          <Map data={openSkyData} />

          <InfoCard />
        </section>
        {/* <FlightFeed data={openSkyData} /> */}
      </body>
    </div>
  );
}

export async function getServerSideProps({ context }) {
  const openSkyData = await fetch(
    `https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.522`
  ).then((res) => res.json());
  // console.log(data)
  return {
    props: {
      openSkyData,
    },
  };
}
