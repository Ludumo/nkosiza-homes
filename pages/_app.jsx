
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
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

