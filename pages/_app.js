import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
        <Head>
        <title>Search Ip Address</title>
        <meta name="description" content="The best place to get your Ip Address or lookup Ip Addresses without Ads" />
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://ip-address-omega.vercel.app/"></meta>
        <meta property="og:title" content="Ip Address - The place for IP Addresses"></meta>
        <meta property="og:description" content="The best place to get your Ip Address or lookup Ip Addresses without Ads"></meta>
        <meta property="og:image" content="/og-img.png"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://ip-address-omega.vercel.app/"></meta>
        <meta property="twitter:title" content="Ip Address - The place for IP Addresses"></meta>
        <meta property="twitter:description" content="The best place to get your Ip Address or lookup Ip Addresses without Ads"></meta>
        <meta property="twitter:image" content="/og-img.png"></meta>
        <link rel="preconnect" href="https://api.country.is"></link>
        <link rel="preconnect" href="https://api.ipify.org"></link>
      </Head>
  <NextNProgress eight={6} color="#4338C9" />
  <Component {...pageProps} />
  
  </>
}

export default MyApp
