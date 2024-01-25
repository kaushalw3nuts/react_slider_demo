import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/fonts.css';
import '@/styles/globals.css';
import '@/styles/responsive.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
    };

    loadLocomotiveScroll();
  }, []);

  
  return (
    <>
      <main data-scroll-container>
        <Component {...pageProps} />
      </main>
    </>
  )
}
