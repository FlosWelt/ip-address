import { data } from 'autoprefixer';
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Navbar from '../components/navbar'
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/footer'

export default function Home() {
  const [info, setInfo] = useState(null)
  const [isLooading, setLooading] = useState(false)
  useEffect(() => {
    setLooading(true)
    fetch(`https://ipwhois.app/json/`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info)
        setLooading(false)
      })
  }, [])


  const { register, handleSubmit } = useForm();
  const onSubmit = data => fetch(`https://ipwhois.app/json/${data.ip}`)
  .then((res) => res.json())
  .then((info) => {
    setInfo(info)});
  if (isLooading) return <p className="text-white bg-gray-900 h-screen">Loading...</p>
  if (!info) return <p className="text-white bg-gray-900 h-screen">No ipwhois.io</p>
  return (
    <div className="bg-gray-900 h-screen bg-repeat">
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
      </Head>
      <Navbar/>
      <div className="bg-gray-900 bg-blend-screen h-auto">
      <div className=" bg-gray-900 h-auto bg-repeat mx-auto items-center justify-center flex-col  align-middle">
    <br/>
    <h1 className="text-3xl font-semibold text-center text-white my-2">Search Ip Address</h1>
    <div className="h-auto border-4 rounded-xl my-20 bg-gray-900  w-64 md:w-96  mx-auto items-center justify-center flex-col  align-middle">
    <form onSubmit={handleSubmit(onSubmit)}>
     <input className="m-5 sm:w-auto w-36 h-10 sm:rounded-l-lg  inline-block border-4 p-1 focus:border-gray-400" placeholder="Enter Ip or Domain" {...register("ip", { required: true})}></input>
     <button type="submit" className="inline-block text-black font-semibold rounded-r-lg border-4 -mx-6 py-1 px-2 bg-white hover:text-white hover:bg-gray-900">Search</button>
     </form>
       <h2 className=" text-red-800 text-left mx-5 my-2 font-semibold text-lg">{info.message}</h2>
       <h2 className=" text-white text-left mx-5 my-2 font-semibold text-lg">Ip: {info.ip}</h2>
       <h2 className=" text-white text-left mx-5 my-2 font-semibold text-lg">Country: {info.country}</h2>
       <h2 className=" text-white text-left mx-5 my-2 font-semibold text-lg">Region/State: {info.region}</h2>
       <h2 className=" text-white text-left mx-5 my-2 font-semibold text-lg">City: {info.city}</h2>
       <h2 className=" text-white text-left mx-5 my-2 font-semibold text-lg">Continent: {info.continent}</h2>
       <h2 className=" text-white text-left mx-5 my-2 font-semibold text-lg">Timezone: {info.timezone}</h2>
       <h2 className=" text-white text-left mx-5 my-2 font-semibold text-lg">Isp: {info.isp}</h2>
       <h2 className=" text-white text-left mx-5 my-2 font-semibold text-lg">Organisation: {info.org}</h2>
       <h2 className=" text-white text-left mx-5 my-2 font-semibold text-lg">As: {info.asn}</h2>
      </div>
     </div>
     <Footer/>
     </div>
    </div>
  )
}
