import banner from "../assets/banner.png"

export function Banner() {

    return (
        <div className="w-300 mx-auto flex justify-between items-center">
            <div>
                <h2 className="text-6xl font-bold">Build Your Ideal</h2>
                <h2 className="text-6xl font-bold bg-linear-to-r from-fuchsia-500 to-blue-600 bg-clip-text text-transparent ">Development Stack</h2>
                <p className="text-lg text-gray-600 my-4">Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack thet fits Your <br />
                    next project.
                </p>
                <button className="bg-linear-to-r from-fuchsia-600 to-blue-500 text-amber-50 py-2 px-4 rounded-lg mt-5">Explore Technology</button>
                <button className="border-2 border-blue-500 py-1.5 px-4 rounded-lg ml-2 mt-5">Learn More</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    )
}