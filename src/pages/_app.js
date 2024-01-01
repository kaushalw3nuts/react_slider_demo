import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/fonts.css';
import '@/styles/globals.css';
import '@/styles/responsive.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
