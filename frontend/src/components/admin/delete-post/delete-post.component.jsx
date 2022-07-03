import axios from "axios";
import React,{useState, useEffect} from "react";


const DeletePostComponent = ({id})=>{
    const[post, setPost] = useState({});

    const getPostsbyId = async()=>{
        const res = await axios.get(`http://localhost:8000/api/main/residences/${id}`)
        setPost(res.data)
    }

    useEffect(()=>{
        getPostsbyId()
    },[])


    const handleDeletePost = ()=>{
        if(window.confirm("Press Ok to delete this Residence Post!")=== true){
            axios.delete(`http://localhost:8000/api/main/residences/${id}`)
        }
    }

    return(
        <div>
            <h1 className='text-center bg-slate-900 text-violet-200 text-3xl mb-2'>Remove Post</h1>
            <div className='p-2 flex flex-col gap-2 justify-center'>
                <div className='w-11/12 mx-auto'  style={{textAlign:'-webkit-center'}}>
                    <img className='rounded-full m-2' src={post.main_picture}/>
                    <span className='m-2 text-lg text-slate-800 font-bold text-center'>{post.description}</span>
                </div>
                <div className='text-center border-2 border-red-700 mt-2 overflow-hidden rounded-3xl'>
                    <h1 className='text-slate-100 bg-red-700 p-2 text-3xl font-bold'>Are You Sure you want to delete this POST?</h1>
                    <div className=' m-2 flex justify-center gap-2'>
                        <button onClick={()=>handleDeletePost()} className='bg-red-700 hover:bg-red-800 text-3xl text-slate-100 px-3 rounded-3xl'>DELETE</button>
                        <button className='bg-green-700 hover:bg-green-800 text-3xl text-slate-100 px-3 rounded-3xl'>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePostComponent;