import Image from 'next/image';
import Nav from "../components/Nav";
import Head from "next/head"
import FlightFeed from '../components/FlightFeed';
export default function Home({ data }){

  // let dataType = typeof(data);
  console.log(data.data)
  return (
    <div className="">
      <Head>
        <title>Flight Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className='bg-gray-900 h-full'>
          {/* HEader */}
          <Nav />

          <FlightFeed data={data}/>            
      </body>

      
    </div>
  )
  
}

export async function getServerSideProps({ context }){

  const data = await fetch(`
  http://api.aviationstack.com/v1/flights?access_key=fdbc5de54ffb34a5a552d9f816ad1da9
  `)
  .then(res => res.json());
  // console.log(data)
 return{

  props:{
    data
  }
 }
}



