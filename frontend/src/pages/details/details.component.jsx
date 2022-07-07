import React, { useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

import RoomCard from '../../components/room-card/room-card.component';

const Details = ()=>{
    const history = useNavigate();
    let {id} = useParams();
    const [item, setItem] = useState({
        title:'',
        main_picture:'',
        location:'',
        description:'',
        address:'',
        room_quantity:'',
        vacancy:'',
        type:'',
        rooms:[]
    });
    

    useEffect(()=>{
        const getResidenceById = async()=>{
                const res = await axios.get(`http://localhost:8000/api/main/residences/${id}`)
                setItem(res.data)
        }
        getResidenceById();
        
    },[])

    return(
        <>
        <section className="text-gray-600 body-font overflow-hidden relative">
            <h1 className="text-violet-400 text-center text-6xl underline"></h1>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-violet-200 tracking-widest">{item.title}</h2>
                        <h1 className="text-violet-300 text-3xl title-font font-medium mb-4">{item.location}</h1>
                        <div className="flex mb-4">
                            <a className="flex-grow text-violet-400 border-b-2 border-violet-400 py-2 text-lg px-1">Description</a>
                        </div>
                        <p className="leading-relaxed mb-4 text-violet-100">{item.description}</p>
                        <div className="flex border-t border-slate-200 py-2">
                            <span className="text-violet-500">Rooms</span>
                            <span className="ml-auto text-violet-300">{item.room_quantity}</span>
                        </div>
                        <div className="flex border-t border-slate-200 py-2">
                            <span className="text-violet-500">Type</span>
                            <span className="ml-auto text-violet-300">{item.type}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-slate-200 py-2">
                            <span className="text-violet-500">Vacancy</span>
                            <span className="ml-auto text-violet-300">{item.vacancy === true?'Yes':'No Vacancy'}</span>
                        </div>
                        <div className="flex flex-col border-t mb-6 border-slate-200 py-2">
                            <h1 className="text-violet-300 text-xl font-bold text-center">Select Room</h1>
                            <div className="flex mt-2 justify-center gap-2 border-2 border-slate-200 p-2">
                                <RoomCard item={item} />
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-violet-400" id="total">$ 0.00</span>
                            <button onClick={()=>history('/payment')} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded" src={item.main_picture} />
                    
                </div>
            </div>
        </section>
        
        </>
       
    )
}

export default Details;