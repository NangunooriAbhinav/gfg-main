"use client";
import Head from 'next/head';
import Section from './components/Section';
import SwiperCarousel from './components/SwiperCarousel';
import Loader from './components/Loader';
import Header from './components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>GFG Student Chapter | AU</title>
        <meta name="description" content="GFG Student Chapter of Anurag University" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Loader/>
      <Header />

      <main >
        <Section id="about-us-loc" title="About Us" description="Welcome to the GFG Student Chapter at AU!" />
        <Section id="vision-loc" title="Vision" description="Our vision at GFG is..." />
        <Section id="mission-loc" title="Mission" description="Our mission at GFG is..." />
        <Section id="objectives-loc" title="Objectives" description="1. Knowledge Sharing..." />
        <Section id="advantages-loc" title="Advantages" description="Get internships, learn to build solutions..." />
        <SwiperCarousel />
      </main>
    </>
  );
}
