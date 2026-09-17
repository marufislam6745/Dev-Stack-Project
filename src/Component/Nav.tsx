import logo from "../assets/logo.png"


export function Nav() {
   
    return (
        <div className="w-300 mx-auto py-4 flex justify-between items-center sticky top-0 bg-white">
            <div>
                <img src={logo} alt="photo" />
            </div>
            <div>
                <ul className="flex justify-center items-center gap-5">
                    <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Home</li>
                    <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Technology</li>
                    <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Project</li>
                    <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">About</li>
                    <li className="text-sm text-gray-600 hover:text-fuchsia-700 cursor-pointer">Contact</li>
                </ul>
            </div>
            <div>
                <button className="hover:bg-fuchsia-200 py-2 px-4 rounded-xl">Sign in</button>
                <button className="bg-linear-to-r from-fuchsia-600 to-blue-500 py-2 px-4 ml-2 rounded-xl text-gray-50">Sign up</button>
            </div>
        </div>
    )
}
