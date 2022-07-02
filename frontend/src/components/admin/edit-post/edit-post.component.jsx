import React from "react";


import FormComponent from "../form/form.component";

const EditPostComponent = ()=>{

    return(
        <div>
            <h1 className='text-center bg-slate-900 text-violet-200 text-3xl mb-2'>Edit Post</h1>
            <div className='p-2 flex justify-center gap-2'>
                <div className='p-2  flex flex-col justify-center'>
                    <img className='rounded-full' src="https://dummyimage.com/200x200"/>
                    <span className='m-2 text-xl text-slate-800 font-bold text-center'>Animated Night Hill Illustrations</span>
                </div>
                <div className='w-1/2  p-2'>
                    <FormComponent/>
                </div>
            </div>
        </div>
    )
}

export default EditPostComponent;