import Head from 'next/head';
import React from 'react';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import About from './about';
import Services from './services';
import Contact from '../components/Contact';
import HomeText from '../components/HomeText';
import Image from 'next/image';

 const Home = () => {
  return (
    <div>
      <Head>
        <title>Nkosiza Homes</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
        <Image
          src="https://ludumobucket.s3.eu-central-1.amazonaws.com/Trail+Huts/6.jpg"
          height={1080}
          width={1920}  
          alt="Trial Hut"
        />
        <div className='text-center text-white text-2xl absolute top-64 w-full p-32 uppercase'>Nkosiza Homes</div>
      </div>
      <HomeText />
      <About />
      <Services />
      <Slider slides={SliderData} />
      <Contact />
    </div>
  );
}

export default Home;