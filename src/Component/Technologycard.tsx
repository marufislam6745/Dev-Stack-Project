import { useState } from "react"
import type { Technologytype } from "../Technology"
import Card from "./Card"
import { Selecttechnology } from "./Selecttechnology"

export interface TechnologyCardProps {
    technology: Technologytype[]
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
    const[select,setSelect]=useState<Technologytype[]>([])

    return (

        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
                <div className="grid grid-cols-3 gap-4 my-10">
                    {
                        technology.map((value) => <Card key={value.id} card={value} select={select} setSelect={setSelect}></Card>)
                    }
                </div>
            </div>
            <div>
                <Selecttechnology select={select} setSelect={setSelect}></Selecttechnology>
            </div>
        </div>


    )
}