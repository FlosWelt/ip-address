import Head from 'next/head'
import { useState, useEffect } from 'react'
import ClipboardCopy from '../components/clipboard'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
 
  return (
    <div className="bg-gray-900 h-screen">
      <Head>
        <title>Privacy Policy - Ip Address</title>
        <meta name="description" content="The best place to get your Ip Address or lookup Ip Addresses without Ads" />
        <link rel="icon" href="/logo.png" />
        <meta name="viewport"></meta>
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
      </Head>
       <Navbar/>
      <div>
        <h1 className="text-white font-semibold text-center text-xl my-4">Privacy</h1>
        <p className="text-center text-white">Ip Address doesnt store your Ip in any way it just displays it. </p>
        <p className="text-center text-white">We use <a className="underline" href="https://ipify.org" target="_blank" rel="noreferrer" >ipify.org</a> to get your Ip Address, your country is fetched from <a className="underline" href="https://country.is" target="_blank" rel="noreferrer" >country.is</a>.</p>
        <p className="text-center text-white">The Ip Lookup function is powerd by <a className="underline" href="https://ipwhois.io" target="_blank" rel="noreferrer" >ipwhois.io</a></p>
        <p className="text-center text-white">We also use <a className="underline" href="https://www.cloudflare.com/web-analytics/" target="_blank" rel="noreferrer" >Cloudflare Webanalytics</a> as a privacy friedly analytics software</p>
        <p className="text-center text-white ">By further conserns you can mail me under <a className="underline" href="mailto:contact@floswelt.com" target="_blank" rel="noreferrer" >contact@floswelt.com</a></p>
        <p className="sm:my-80 my-40"></p>
    
    </div>
    <Footer/>  
  </div>
  
  )
}
