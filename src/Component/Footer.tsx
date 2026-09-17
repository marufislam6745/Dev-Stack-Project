import logo from "../assets/logo.png"

export function Footer() {

    return (
        <div>
            <div className="flex justify-between items-start w-300 mx-auto my-10">
                <div>
                    <img className="mt-1" src={logo} />
                    <p className="text-sm text-gray-600 my-3">Curated tools, technology, and resources for developers<br />
                        build modern software</p>
                    <div className="flex justify-between items-center w-50 ">
                        <p className="text-black font-semibold cursor-pointer">Github</p>
                        <p className="text-black font-semibold cursor-pointer">Twiter</p>
                        <p className="text-black font-semibold cursor-pointer">Linkedin</p>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold mb-2">PRODUCT</h5>
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-fuchsia-600">Home</p>
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-fuchsia-600">Technology</p>
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-fuchsia-600">Project</p>
                </div>
                <div>
                    <h5 className="font-bold mb-2">COMPANY</h5>
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-fuchsia-600">About</p>
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-fuchsia-600">Contact</p>
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-fuchsia-600">Careers</p>
                </div>
                <div>
                    <h5 className="font-bold mt-0 mb-2 ">Legal</h5>
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-fuchsia-600">Privacy Policy</p>
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-fuchsia-600">Terms of Servise</p>
                </div>
            </div>
            <div className="w-300 mx-auto flex justify-between items-center py-5 border-t border-gray-300">
                <p className="text-l">@2026 Dev Stack. All rights reserved </p>
                <div className="flex justify-center items-center gap-10">
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-black">Privacy</p>
                    <p className="text-sm text-gray-600 cursor-pointer hover:text-black">Terms</p>
                </div>
            </div>
        </div>
    )
}