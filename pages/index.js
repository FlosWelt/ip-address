import Head from 'next/head'
import { useState, useEffect } from 'react'
import ClipboardCopy from '../components/clipboard'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, []);

  const [info, setInfo] = useState(null)
  const [isLooading, setLooading] = useState(false)
  useEffect(() => {
    setLooading(true)
    fetch('https://api.country.is')
      .then((res) => res.json())
      .then((info) => {
        setInfo(info)
        setLooading(false)
      })
  }, [])

  const myLoader = ({ src, width, quality }) => {
    return `https://flagcdn.com/${src}.svg`
  }
  
  if (isLoading) return <p className="text-white bg-gray-900 h-screen">Loading...</p>
  if (!data) return <p className="text-white bg-gray-900 h-screen">No ipify.org</p>
  if (isLooading) return <p className="text-white bg-gray-900 h-screen">Loading...</p>
  if (!info) return <p className="text-white bg-gray-900 h-screen">No country.is</p>
  return (
    <div className="bg-gray-900 h-screen">
      <Head>
        <title>Ip Address - The place for IP Addresses</title>
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
      <div className="  mx-auto items-center justify-center flex-col  align-middle">
    <br/>
    <h1 className="text-3xl font-semibold text-center text-white my-2">Get your Ip Address</h1>
    <div className="my-24 bg-gray-900 rounded-xl border-4 w-64 md:w-96  mx-auto items-center justify-center flex-col  align-middle">
    <h2 className="text-center font-semibold text-white text-2xl my-3">IPv4:</h2>
    <h2 className="text-center font-semibold text-white text-xl my-3">{data.ip}</h2>
    <ClipboardCopy className="" copyText={data.ip} />
    <div className="border-t">
    <h2 className="text-center font-semibold text-white text-2xl my-3">Country:</h2>
    <div className=" text-center grid place-items-center">
     
      <Image
      loader={myLoader}
      src={info.country.toLowerCase()}
      alt="Picture of the countries flag"
      width={24}
      height={24}
      className="inline-block h-24 -my-24 mx-5"
    />
    <h2 className="text-center font-semibold text-white text-xl my-3 inline-block ">{info.country}</h2>
    </div>
    </div>
    </div>
    <Footer/>
  </div>
  </div>
  )
}
