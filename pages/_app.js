/* eslint-disable */

import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-default" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
