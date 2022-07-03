import axios from "axios";
import React,{useState, useEffect} from "react";


import FormComponent from "../form/form.component";

const EditPostComponent = ({id})=>{
    const [post, setPost] = useState({})
    console.log('ID RECEIVED: ',id)

    const getResidenceById = async()=>{
        const res = await axios.get(`http://localhost:8000/api/main/residences/${id}`)
        console.log(res.data)
        setPost(res.data)
    }

    useEffect(()=>{
        getResidenceById()
    },[])

    return(
        <div>
            <h1 className='text-center bg-slate-900 text-violet-200 text-3xl mb-2'>Edit Post</h1>
            <div className='p-2 flex justify-center gap-2'>
                <div className='p-2  flex flex-col justify-center w-1/2'>
                    <img className='rounded-full' src={post.main_picture}/>
                    <span className='m-2 text-xl text-slate-800 font-bold text-center'>{post.title}</span>
                </div>
                <div className='w-1/2  p-2'>
                    <FormComponent post={post}/>
                </div>
            </div>
        </div>
    )
}

export default EditPostComponent;