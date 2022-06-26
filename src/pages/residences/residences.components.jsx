import React, { useState } from "react";
import { useParams } from 'react-router-dom';

// Components
import ShowCase from "../../components/showcase/showcase.component";
import ListResidences from "../../components/list-residences/list-residences.components";

const Residences = ({type})=>{
        console.log('INFO', type);
        const [toShow, setToShow] = useState(ShowCase);
        const handleList = ()=>{
            setToShow(<ListResidences type={type}/>);
        }
    return(
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="text-violet-400 underline tracking-widest text-center m-5 text-5xl uppercase">{type}</h1>
            </div>
            <div className="p-3 flex justify-center">
                <input className="w-1/3 p-2 text-2xl font-bold rounded-l-lg" type='text' placeholder={`Search ${type}`} />
                <button onClick={()=>handleList()} className="bg-violet-300 hover:bg-violet-500 active:bg-violet-600 hover:text-slate-300 p-2 text-2xl rounded-r-lg">Search</button>
            </div>
            <div>
                {toShow}
            </div>
        </div>
    )
}

export default Residences;