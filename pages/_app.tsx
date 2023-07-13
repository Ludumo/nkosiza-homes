
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { useRouter } from 'next/router';

import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Navbar  />
      <Component  {...pageProps} />
      <Footer />
    </> 
  );
}

export default MyApp;

