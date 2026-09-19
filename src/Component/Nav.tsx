
import { useState } from "react"
import logo from "../assets/logo.png"


export function Nav() {
    const [nav, setNav] = useState<boolean>(false)

    return (
        <div className="sticky top-0 z-50">
            <div className="md:w-300 mx-auto py-4 flex justify-between items-center bg-white">
                <div className="md:hidden flex items-center">
                    <button onClick={()=>setNav(!nav)} className="text-gray-600 hover:text-fuchsia-700">
                        {nav?(<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18l18 6M6 6l12 12"/>
                        </svg>):(<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>)}
                    </button>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    <img src={logo} alt="photo" />
                </div>
                <div className="hidden md:flex">
                    <ul className="flex justify-center items-center gap-5">
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Home</li>
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Technology</li>
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Project</li>
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">About</li>
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <button className="py-1 px-3 md:px-4 rounded-xl ">Sign in</button>
                    <button className="bg-linear-to-r from-fuchsia-600 to-blue-500 py-1 px-3 md:px-4 md:py-2 rounded-xl text-gray-50">Sign up</button>
                </div>
            </div>
            {nav && (
          <div className="md:hidden border-t bg-white py-4 px-6 shadow-lg">
            <ul className="flex flex-col gap-4 text-center">
              <li onClick={()=>setNav(false)} className="text-gray-600 hover:text-pink-600 cursor-pointer">Home</li>
              <li onClick={()=>setNav(false)} className="text-gray-600 hover:text-pink-600 cursor-pointer">Technology </li>
              <li onClick={()=>setNav(false)} className="text-gray-600 hover:text-pink-600 cursor-pointer">Project</li>
              <li onClick={()=>setNav(false)} className="text-gray-600 hover:text-pink-600 cursor-pointer">About</li>
              <li onClick={()=>setNav(false)} className="text-gray-600 hover:text-pink-600 cursor-pointer">Contact</li>
            </ul>
          </div>
        )}

        </div>
    )
}
