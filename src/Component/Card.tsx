import { type Dispatch, type SetStateAction } from "react"
import type { Technologytype } from "../Technology"
import { GrCheckmark } from "react-icons/gr";
import { toast } from 'react-toastify';
//import { useState } from "react"

export interface CardProps {
    card: Technologytype
    select: Technologytype[]
    setSelect: Dispatch<SetStateAction<Technologytype[]>>
}

export default function Card({ card, select, setSelect }: CardProps) {

    //const[click,setClick]=useState<boolean>(false)
    const isSelected = select.some((item) => item.id === card.id)
    function handlebutton() {

        if (!isSelected) {
            const selectdata = [...select, card]
            setSelect(selectdata)
            
            toast(`Add to Stack ${card.name} Successfully`)
        }
    }

    return ( 
        <div>
            <div className={`bg-white rounded-2xl border border-gray-200 p-5 ${isSelected===true? "shadow-md shadow-fuchsia-500/50":"shadow-md"} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                <div className="flex justify-between items-center mb-5">
                    <img className="w-10 h-10" src={card.icon} alt={card.name} />
                    <p className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full"> {card.badge} </p>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{card.name}</h4>
                <p className="text-gray-500 text-sm leading-6 min-h-18 mb-5"> {card.description}</p>
                <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-4 mb-5">
                    <p className="text-sm font-semibold text-gray-700">{card.category}</p>
                    <p className="text-sm font-semibold text-gray-700">{card.difficulty}</p>
                    <p className="text-sm font-semibold text-yellow-500 ml-5"> ⭐{card.rating} </p>
                </div>
                <button onClick={handlebutton} className={`w-full bg-black text-white py-2.5 rounded-xl font-semibold cursor-pointer flex justify-center items-center gap-1 ${isSelected===true?"bg-fuchsia-600":""}`} disabled={isSelected === true}>
                    {isSelected === true ? (<><GrCheckmark /> Selected</>): 'Add to Stack'}</button>
            </div>
        </div>
    )
}