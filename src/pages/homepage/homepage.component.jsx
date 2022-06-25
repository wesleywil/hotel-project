import React from "react";

import Cabin from '../../assets/imgs/cabin.svg';

const Homepage = ()=>{

    return(
        <div className='container mt-52 mx-auto p-4 flex flex-row'>
            <div className='mx-auto p-4 bg-black basis-1/2 flex '>
                <div className='flex flex-col self-center	p-3'>
                    <h1 className=' text-violet-400 text-7xl'>HOTEL KLINT-KENT</h1>
                    <h3 className='text-violet-500 text-3xl my-3'>Make Your Reservation</h3>
                    <p className=' text-white text-xl p-2'>
                        The Best hotels you find here, what are you waiting for make your reservation and relax in our beautiful places.
                    </p>
                    <div>
                        <button className='text-slate-200  hover:text-slate-300 font-bold text-xl bg-violet-500 border-4 border-violet-500 hover:border-violet-600  hover:bg-violet-600 p-2 rounded-xl mx-2'>Hotels</button>
                        <button className='text-slate-200 hover:text-slate-300 font-bold text-xl p-2 border-4 border-violet-500 hover:border-violet-600 rounded-xl mx-2'>Cabins</button>
                    </div>
                </div>
            </div>
            <div className='mx-auto p-4 bg-black basis-1/2'>
                <div className=' flex justify-center'>
                    <img src={Cabin} className='w-96'/>

                </div>
            </div>
        </div>
    )
}

export default Homepage;