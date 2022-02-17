import Head from 'next/head';
import '../styles/globals.css'
import Layout from './components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>hyunba | Next Movies</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    );
}

export default MyApp
