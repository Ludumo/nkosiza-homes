import Navbar from '../components/Navbar';
import '../styles/globals.css';

import { useEffect, useRef } from 'react';

function useIntersectionObserver(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      callback(entries);
    });
    observer.observe(ref.current);
  }, []);

  return ref;
}

function MyApp({ Component, pageProps }) {
  const ref = useIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }else {
        entry.target.classList.remove('show');
      }
    });
  });

  return (
    <div ref={ref}>
      <Navbar class="hidden" />
      <Component class="hidden" {...pageProps} />
    </div>
  );
}

export default MyApp;

