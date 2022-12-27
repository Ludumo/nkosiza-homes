import Head from 'next/head';
import Image from "next/image";
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import About from './about';
import Services from './services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nkosiza Homes</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='Nkosiza Homes' message='The Future Of Living'  />
      <About />
      <Services />
      <Slider slides={SliderData} />
      <Contact />
      <Footer />
    </div>
  );
}