"use client";
import Head from 'next/head';
import Team from './components/Team';
import Social from './components/Social';
import Hero from './components/Hero';
import Events from './components/Events';

export default function Home() {
  return (
    <>
      <Head>
        <title>GFG Student Chapter | AU</title>
        <meta name="description" content="GFG Student Chapter of Anurag University" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main >
        <Hero />
        <Events />
        <Team />
        <Social />
      </main>
    </>
  );
}
