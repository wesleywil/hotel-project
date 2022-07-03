import React from "react";
import EditPostComponent from "../edit-post/edit-post.component";
import DeletePostComponent from "../delete-post/delete-post.component";


const CardPost = ({info, newOption})=>{
    return(
        <div className="flex relative mb-2">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={info.main_picture}/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{info.title} - {info.type}</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{info.location}</h1>
                <p className="leading-relaxed">{info.description}</p>
                <button onClick={()=>newOption(<EditPostComponent id={info.id}/>)} className="w-full bg-violet-400 hover:bg-violet-500 px-2 text-xl font-semibold rounded-xl mb-2">Update</button>
                <button onClick={()=>newOption(<DeletePostComponent id={info.id}/>)} className="w-full bg-red-400 hover:bg-red-500 px-2 text-xl font-semibold rounded-xl mb-2">Delete</button>
            </div>
        </div>
    )
}

export default CardPost;