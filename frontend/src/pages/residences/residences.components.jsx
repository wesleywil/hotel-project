import React, { useState, useEffect } from "react";
import axios from 'axios';

// Components
import ShowCase from "../../components/showcase/showcase.component";
import ListResidences from "../../components/list-residences/list-residences.components";

const Residences = ()=>{
        const [toShow, setToShow] = useState(<ShowCase/>);
        const [searchInput, setSearchInput] = useState('');
        
        const searchResidence = async()=>{
            const res = await axios.get(`http://localhost:8000/api/main/residences/${searchInput}`)
            console.log(res.data)
            if(res.data.status === '404'){
                console.log('ERROR 404')
            }
            setToShow(<ListResidences list={res.data}/>)
        }

        const listAll = async()=>{
            const res = await axios.get("http://localhost:8000/api/main/residences/")
            setToShow(<ListResidences list={res.data}/>)
        }

    return(
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="text-violet-400 underline tracking-widest text-center m-5 text-5xl uppercase">Hotels/Cabins</h1>
            </div>
            <div className="p-3 flex justify-center">
                <input 
                    className="w-1/3 p-2 text-2xl font-bold rounded-l-lg" 
                    type='text' 
                    placeholder='Search residence' 
                    onChange={(event)=>{
                        setSearchInput(event.target.value)
                    }}
                />
                <button onClick={()=>searchResidence()} className="bg-violet-300 hover:bg-violet-500 active:bg-violet-600 hover:text-slate-300 p-2 text-2xl rounded-r-lg">Search</button>
            </div>
            <div className="container mx-auto flex  p-2 justify-center">
                <button onClick={()=>listAll()} className="text-violet-200 hover:text-violet-400 active:text-violet-600 underline text-2xl ">List All</button>
            </div>
            <div>
                {toShow}
            </div>
        </div>
    )
}

export default Residences;