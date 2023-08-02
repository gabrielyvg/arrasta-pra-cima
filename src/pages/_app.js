import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  config.autoAddCss = false;
  return (
    <>
      <ThemeProvider attribute="class">
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
