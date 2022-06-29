import React, { useState } from "react";


import ResidenceCard from "../residence-card/residence-card.component";


const ListResidences = ({type})=>{
    const [residence, setResidence] = useState(type);
    if (residence === 'all'){
        setResidence('Residences')
    }



    return(
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-violet-300">{residence}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-violet-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
            </div>
            <div className="flex flex-wrap -m-4">
                <ResidenceCard residence={residence}/>
                <ResidenceCard residence={residence}/>
                <ResidenceCard residence={residence}/>
                <ResidenceCard residence={residence}/>
                <ResidenceCard residence={residence}/>
                <ResidenceCard residence={residence}/>
            </div>
        </div>
        </section>
    )
}

export default ListResidences;