import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Nav from "../components/Nav";
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Flight Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-900 h-full'>
          {/* HEader */}
          <Nav />
      </main>

      
    </div>
  )
}

export default Home
