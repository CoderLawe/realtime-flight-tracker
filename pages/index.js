import Image from "next/image";
import Nav from "../components/Nav";
import Head from "next/head";
import FlightFeed from "../components/FlightFeed";
import Map from "../components/Map";
import InfoCard from "../components/InfoCard";
export default function Home({ data, openSkyData }) {
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
    `https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226`
  ).then((res) => res.json());
  // console.log(data)
  return {
    props: {
      data,
      openSkyData,
    },
  };
}
