import React from "react";


const FormComponent = ()=>{

    return(
        <form className='text-xl'>
            <span className='ml-2'>Post Image</span>
            <input className='w-full block w-full text-sm text-gray-900 rounded-lg border border-gray-300 cursor-pointer focus:outline-none' type='file' accept='image/*' />
            <span className='ml-2'>Post Title</span>
            <input className='w-full rounded-lg' type='text' placeholder='Title'/>
            <span className='ml-2'>Place</span>
            <input className='w-full rounded-lg' type='text' placeholder='Place Address'/>
            <span className='ml-2'>Description</span>
            <input className='w-full rounded-lg' type='text' placeholder='Description'/> 
            <span className='ml-2'>Room Quantity</span>
            <input className='w-full rounded-lg' type='number' placeholder='Room Quantity'/>
            <span className='ml-2'>Daily Rate</span>
            <input className='w-full rounded-lg' type='number' placeholder='Daily Rate'/>
            <span className="ml-2">Type</span>
            <select class='w-full rounded-lg focus:border-violet-300'>
                    <option selected>Select Residence Type</option>
                    <option value="1">Cabin</option>
                    <option value="2">Hotel</option>
            </select>
            <div className='flex justify-center mt-2 gap-2'>
                <button className='bg-violet-600 hover:bg-violet-700 text-slate-100 font-semibold px-12 text-2xl rounded-3xl'>Save</button>
                <button className='bg-violet-600 hover:bg-violet-700 text-slate-100 font-semibold px-12 text-2xl rounded-3xl'>Cancel</button>
            </div>
        </form>
    )
}

export default FormComponent;