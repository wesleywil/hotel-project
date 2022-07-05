import React from "react";
import { useNavigate } from "react-router-dom";


const ShowcaseSecondary = ({item})=>{
    const history = useNavigate();

    return(
        <div className="px-2 w-1/2" key={item.id}>
            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={item.main_picture}/>
                <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">{item.title}</h2>
                    <p className="leading-relaxed">{item.description}</p>
                    <button onClick={()=>history(`/details/${item.id}`)} className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSecondary;