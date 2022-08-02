import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Web3 Expansion Maps</title>
        <meta name="description" content="Web3 Maps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Web3 Expansion Maps" message="Discover Global Graffiti, Street and Sticker Art" /> 
    </div>
  );

}
