import axios from "axios";
import React,{useState, useEffect,createRef } from "react";


const FormComponent = ({post})=>{
    const [res, setRes] = useState({
        main_picture:'',
        title:'',
        location:'',
        address:'',
        description:'',
        room_quantity:'',
        type:'',
        rooms:''
    });

    useEffect(()=>{
        if(typeof post !== 'undefined'){
            setRes(post)
        }else{
            console.log('UNDEFINED')
        }
        
    })

    const handleSubmit = (e)=>{ 
        //e.preventDefault();
        console.log('SUBMITED', e.target.title.value)
        const picture = document.getElementById('main_picture')
        if(typeof post !== 'undefined'){
            e.preventDefault();
            
            if(typeof picture.files[0] !== 'undefined'){
                axios.put(`http://localhost:8000/api/main/residences/${post.id}?format=json`,{
                    'main_picture':picture.files[0],
                    'title':e.target.title.value,
                    'location':e.target.location.value,
                    'address':e.target.address.value,
                    'description':e.target.description.value,
                    'room_quantity':e.target.room_quantity.value,
                    'type':e.target.type.value,
                    'rooms':post.rooms
                },{
                    headers:{
                        'Content-Type':'multipart/form-data',
                    }
                })
            }else{
                axios.put(`http://localhost:8000/api/main/residences/${post.id}?format=json`,{
                    'title':e.target.title.value,
                    'location':e.target.location.value,
                    'address':e.target.address.value,
                    'description':e.target.description.value,
                    'room_quantity':e.target.room_quantity.value,
                    'type':e.target.type.value,
                    'rooms':post.rooms
                })
            }

        }else{
            e.preventDefault();
            axios.post('http://localhost:8000/api/main/residences/',{
                'main_picture':picture.files[0],
                'title':e.target.title.value,
                'location':e.target.location.value,
                'address':e.target.address.value,
                'description':e.target.description.value,
                'room_quantity':e.target.room_quantity.value,
                'type':e.target.type.value,
                'rooms':[]
            },{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }

    }

    return(
        <form className='text-xl' onSubmit={handleSubmit} encType='multipart/form-data'>
            <span className='ml-2'>Post Image</span>
            <input 
                id='main_picture' 
                className='w-full block w-full text-sm text-gray-900 rounded-lg border border-gray-300 cursor-pointer focus:outline-none' 
                type='file' 
                accept='image/*' 
                defaultValue={res.main_picture}
            />
            <span className='ml-2'>Post Title</span>
            <input id='title' className='w-full rounded-lg' type='text' placeholder='Title' defaultValue={res.title}/>
            <span className='ml-2'>Location</span>
            <input id='location' className='w-full rounded-lg' type='text' placeholder='Place Location' defaultValue={res.location}/>
            <span className='ml-2'>Adress</span>
            <input id='address' className='w-full rounded-lg' type='text' placeholder='Place Address' defaultValue={res.address}/>
            <span className='ml-2'>Description</span>
            <textarea id='description' className="w-full rounded-lg" defaultValue={res.description}></textarea>
            <span className='ml-2'>Room Quantity</span>
            <input id='room_quantity' className='w-full rounded-lg' type='number' placeholder='Room Quantity' defaultValue={res.room_quantity}/>
            <span className="ml-2">Type</span>
            <select id='type' className='w-full rounded-lg focus:border-violet-300' defaultValue={`${res.type}`}>
                    <option disabled value="0">Select Residence Type</option>
                    <option value="Cabin">Cabin</option>
                    <option value="Hotel">Hotel</option>
            </select>
            <div className='flex justify-center mt-2 gap-2'>
                <button className='bg-violet-600 hover:bg-violet-700 text-slate-100 font-semibold px-12 text-2xl rounded-3xl'>Save</button>
                <button className='bg-violet-600 hover:bg-violet-700 text-slate-100 font-semibold px-12 text-2xl rounded-3xl'>Cancel</button>
            </div>
        </form>
    )
}

export default FormComponent;