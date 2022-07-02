import React from "react";
import { useNavigate } from "react-router-dom";


const ResidenceCard = ({residence})=>{
    const history = useNavigate();
    const handleDetails = ()=>{
        history(`/details/${residence}`);
    }

    return(
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <button onClick={()=>handleDetails()} className=" mt-2 px-3 text-2xl bg-violet-600 hover:bg-violet-800 text-slate-200 hover:text-slate-100 text-center rounded-full">Take a Look</button>
                </div>
            </div>
        </div>
    )
}

export default ResidenceCard;