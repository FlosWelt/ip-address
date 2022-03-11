import { useState } from 'react'
import Link from 'next/link'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}


export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter  bg-gray-900 px-4 py-4 h-20 items-center border-b-2">
            
            <div className="w-3/12 flex items-center">
                <Link href="/" className="text-2xl font-semibold">
                   <a><img className="sm:h-16 h-19 sm:visible invisible " src="/banner.png" alt="Logo Home Button"></img></a>
                </Link>
                <Link href="/" className="text-2xl font-semibold">
                   <a className="text-lg font-semibold my-4 mx-4 text-white hover:text-slate-500 sm:invisible visible">Home</a>
                </Link>
                
            </div>
            <div className="w-9/12 flex justify-end items-center">


                <div className=" md:flex">
                <input className="h-8 my-4 hidden"></input>
                <Link href="/ip-lookup" >
                <a className="text-lg font-semibold my-4 text-white hover:text-slate-500"  >
                    Ip Address Lookup
                </a>
                </Link>
                </div>
            </div>
        </nav>
    )
}
