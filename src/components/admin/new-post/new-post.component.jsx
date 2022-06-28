import React from "react";

import FormComponent from "../form/form.component";


const NewPostComponent = ()=>{

    return(
        <>
            <h1 className='text-center bg-slate-900 text-violet-200 text-3xl mb-2'>New Post</h1>
            <div className='p-2'>
                <FormComponent/>
            </div>
        </>
    )
}

export default NewPostComponent;