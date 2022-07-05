import React, { useState, useEffect} from "react";
import { useNavigate,useParams, Navigate } from "react-router-dom";
import axios from "axios";

const DetailsResidence = ()=>{
    const history = useNavigate();
    let {id} = useParams();

    const [item, setItem] = useState({});
    const [err, setErr] = useState('');

    const getResidenceById = async()=>{
        try {
            const res = await axios.get(`http://localhost:8000/api/main/residences/${id}`)
            setItem(res.data)
        } catch (error) {
            console.log('ERROR',error.response.status)
            setErr(error.response.status)
        }
    }

    useEffect(()=>{
        if(err !== 500 || err !== ''){
            getResidenceById();
        }else{
            console.log('error')
        }   
    },[])

    return(
        <>
        {
            (
            
             err !== 500?
                <section className="text-gray-600 body-font overflow-hidden">
                    <h1 className="text-violet-400 text-center text-6xl underline"></h1>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-violet-200 tracking-widest">{item.title}</h2>
                            <h1 className="text-violet-300 text-3xl title-font font-medium mb-4">{item.location}</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-violet-400 border-b-2 border-violet-400 py-2 text-lg px-1">Description</a>
                                <a className="flex-grow border-b-2 border-slate-400 py-2 text-lg px-1 text-slate-400">Reviews</a>
                                <a className="flex-grow border-b-2 border-slate-400 py-2 text-lg px-1 text-slate-400">Details</a>
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
                                <span className="text-violet-500">Quantity</span>
                                <span className="ml-auto text-violet-300">4</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-violet-400">$58.00</span>
                                <button onClick={()=>history('/payment')} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={item.main_picture} />
                        </div>
                    </div>
                </section>
            :
                <section>
                    <Navigate to='/residences' replace />
                </section>
            )
            
        }
        </>
    )
}

export default DetailsResidence;