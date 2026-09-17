import { useState } from "react"
import logo from "../assets/logo.png"


export function Nav() {
    const [menu, setMenu] = useState<boolean>(false)

    return (
        <div>
            <div className="w-300 mx-auto py-4 flex justify-between items-center sticky top-0 bg-white">
                <button
                    onClick={() => setMenu(!menu)}
                    className="sm:hidden flex flex-col gap-1.5"
                >
                    <span className="w-8 h-1 bg-gray-500 rounded"></span>
                    <span className="w-8 h-1 bg-gray-500 rounded"></span>
                    <span className="w-8 h-1 bg-gray-500 rounded"></span>
                    <span className="w-8 h-1 bg-gray-500 rounded"></span>
                    <span className="w-8 h-1 bg-gray-500 rounded"></span>
                </button>

                <div>
                    <img src={logo} alt="photo" />
                </div>
                <div>
                    <ul className="hidden sm:flex justify-center items-center gap-5">
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Home</li>
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Technology</li>
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Project</li>
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">About</li>
                        <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div className="flex items-center gap-2 sm:4">
                    <button className="py-2 px-4 rounded-xl sm:text-base">Sign in</button>
                    <button className="bg-linear-to-r from-fuchsia-600 to-blue-500 py-2 px-4 rounded-xl text-gray-50 sm:text-base">Sign up</button>
                </div>
            </div>
            {menu && (
                <div className="sm:hidden mt-5 pt-4">
                    <ul className="flex flex-col gap-4 text-center">
                        <li className="text-gray-600 hover:text-pink-600 cursor-pointer">Home</li>
                        <li className="text-gray-600 hover:text-pink-600 cursor-pointer">Technology</li>
                        <li className="text-gray-600 hover:text-pink-600 cursor-pointer">Project</li>
                        <li className="text-gray-600 hover:text-pink-600 cursor-pointer">About</li>
                        <li className="text-gray-600 hover:text-pink-600 cursor-pointer">Contact</li>
                    </ul>
                </div>
            )}
        </div>
    )
}
