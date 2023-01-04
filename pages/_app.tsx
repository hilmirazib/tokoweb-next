import '../styles/utilities.css';
import '../styles/homepage.css';
import '../styles/sign-in.css';
import '../styles/sidebar.css';
import '../styles/transactions.css';
import '../styles/transactions-detail.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
export default MyApp;
