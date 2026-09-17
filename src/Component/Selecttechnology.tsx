import type { Dispatch, SetStateAction } from "react"
import type { Technologytype } from "../Technology"
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

interface setectTechnologyProps {
    select: Technologytype[]
    setSelect: Dispatch<SetStateAction<Technologytype[]>>
}

export function Selecttechnology({ select, setSelect }: setectTechnologyProps) {
    
    function delethandle(card: Technologytype) {
        const dataDelet = select.filter((d) => d.name !== card.name)
        setSelect(dataDelet)

        toast(`${card.name} delete Successfully`)
    }

    function deletAllhandle(){
        setSelect([])
        toast(`Remove all Successfully`)
    }

    return (
        <div className="mt-10 border border-gray-300 rounded-xl p-4">
            <h3 className="font-bold text-xl">Your Stack</h3>
            <p className="text-gray-400">{select.length>0?`${select.length} technology selected yet`:"No technology selected yet"}</p>
            <div>
                {
                    select.map((value) => {
                        return (
                            <div className="my-5 flex justify-between items-center border border-blue-600 rounded-xl p-2">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <img className="w-10 mr-2" src={value.icon} />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{value.name}</p>
                                        <p className="text-sm">{value.category}</p>
                                    </div>
                                </div>
                                <p onClick={() => delethandle(value)} className="text-xl"><MdDelete /></p>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={deletAllhandle} className={`w-full border rounded-xl p-2 mt-5 ${select.length>0?"border-fuchsia-600 text-fuchsia-600":'border-gray-300 text-gray-500'}`}
                >
                {select.length>0?"Remove all":"Your stack is empty"}</button>
        </div>
    )
}