import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function App({ Component, pageProps }) {
  config.autoAddCss = false;
  return (
    <>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
  );
}
