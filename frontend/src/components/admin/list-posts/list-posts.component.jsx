import React from "react";

import CardPost from "../card-post/card-post.component";

const ListPostsCompomponent = ()=>{

    return(
        <div>
            <h1 className='text-center bg-slate-900 text-violet-200 text-3xl mb-2'>List Posts</h1>
            <div className='flex flex-row'>
                <div className='basis-1/3 p-2'>
                    <CardPost/>
                </div>
                <div  className='basis-1/3 p-2'>
                    <CardPost/>
                    <CardPost/>
                </div>
                <div  className='basis-1/3 p-2'>
                    <CardPost/>
                </div>
            </div>
        </div>
    )
}

export default ListPostsCompomponent;