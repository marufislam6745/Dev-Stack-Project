import { use } from "react"
import type { Technologytype } from "./Technology"
import Technologycard from "./Component/Technologycard"

export interface TechnologyProps {
    technologyPromise:Promise<Technologytype[]>
}

export default function Technology({technologyPromise }: TechnologyProps) {
    const technology=use(technologyPromise)
    //console.log(technology)
    
    return (
        <div className="w-300 mx-auto">
            <div>
                <h3 className="text-4xl font-bold">Explore the <span className="bg-linear-to-r from-fuchsia-500 to-blue-600 bg-clip-text text-transparent">Technology</span></h3>
                <p className="text-base text-gray-600">Pick one technology per category to build your ideal stack</p>
            </div>
            <div>
                <Technologycard technology={technology}></Technologycard>
            </div>
        </div>
    )
}