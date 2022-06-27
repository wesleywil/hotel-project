import React, { useState } from "react";


const Payment = ()=>{
    const [qtd, setQtd] = useState(1);

    const handleQtd = (action)=>{
        console.log(action)
        if (action === 'add'){
            setQtd(qtd+1);
        }else{
            if (qtd >= 1){
                setQtd(qtd-1);
            }
            
        }
            
            
    }

    return(
        <div className="container lg:w-1/3 mx-auto mt-20 border-2 border-violet-400 rounded-2xl overflow-hidden">
            <h1 className="text-center text-4xl text-slate-900 font-bold uppercase  bg-violet-400">Payment</h1>
            <div className="container mt-2 p-2 flex flex-col justify-center items-center">
                <h1 className="text-violet-300 text-center text-3xl">Animated Night Hill Illustrations</h1>
                <div className="flex gap-2">
                    <img className="rounded-3xl text-centter mt-2" src='https://dummyimage.com/200x200'/>
                    <div className="w-80 self-center	">
                       <div className="flex border-t border-slate-200 py-2">
                            <span className="text-violet-500">Color</span>
                            <span className="ml-auto text-violet-300">Blue</span>
                       </div>
                       <div className="flex border-t border-slate-200 py-2">
                            <span className="text-violet-500">Size</span>
                            <span className="ml-auto text-violet-300">Medium</span>
                       </div>
                       <div className="flex border-t border-slate-200 py-2">
                            <span className="text-violet-500">Quantity</span>
                            <span className="ml-auto text-violet-300">2</span>
                       </div>
                    </div>
                </div>
                <div className="mt-2 p-2 border-2 border-violet-200 rounded-3xl  flex justify-between w-10/12">
                    <span className="title-font self-center font-medium text-2xl text-violet-400">$58.00</span>
                    <div className="flex self-center items-center">
                        <button className="rounded-full p-1 font-bold text-2xl text-slate-100 bg-violet-500 hover:bg-violet-600" onClick={()=>handleQtd('sub')}>&#129080;</button>
                        <span className="text-slate-100 m-2 text-3xl">{qtd}</span>
                        <button className="rounded-full p-1 font-bold text-2xl text-slate-100 bg-violet-500 hover:bg-violet-600" onClick={()=>handleQtd('add')}>&#129082;</button>
                    </div>
                    <button className="self-center rounded-xl py-1 px-3 bg-violet-500 hover:bg-violet-600 text-slate-100 font-bold text-xl ">Confirm</button>
                </div>
                

            </div>
        </div>
    )
}


export default Payment;