import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {

    return (
        <div>
        <div className="bg-gray-900 text-white font-semibold border-t-2 sticky bottom-0 2xl:fixed ">
            <h1 className="p-2 inline-block"> © {new Date().getFullYear()} Ip Address</h1>
            <Link href="mailto:mail@ip-address.app" >
            <a className="inline-block text-gray-300 hover:text-slate-500 px-2" >mail@ip-address.app</a>
            </Link>
            <Link href="https://api.ip-address.app" >
            <a className="inline-block text-gray-300 hover:text-slate-500 px-2" >API</a>
            </Link>
            <Link href="/privacy" >
            <a className="inline-block text-gray-300 hover:text-slate-500 px-2" >Privacy Policy</a>
            </Link>
            <Link href="https://floswelt.com/imprint.html">
            <a className="inline-block text-gray-300 hover:text-slate-500" target="_blank" rel="noreferrer">Imprint</a>
            </Link>
            <Link href="https://github.com/floswelt/ip-address">
            <a className="inline-block text-gray-300 hover:text-slate-500 px-2" target="_blank" rel="noreferrer" >Source Code</a>
            </Link>
        </div>
        </div>
    )
}
