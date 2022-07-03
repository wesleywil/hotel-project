import React, { useState } from 'react';

import DefaultComponent from '../../components/admin/default/default.component';
import ListPostsCompomponent from '../../components/admin/list-posts/list-posts.component';
import NewPostComponent from '../../components/admin/new-post/new-post.component';
import EditPostComponent from '../../components/admin/edit-post/edit-post.component';
import DeletePostComponent from '../../components/admin/delete-post/delete-post.component';

const AdminPage = ()=>{
    const [options, setOptions] = useState(<DefaultComponent/>);

    return(
        <div className='container mt-20 mx-auto flex border-2 border-violet-400 rounded-2xl p-2'>
            <div className='grow w-20 bg-violet-800 '>
                <h1 className='text-center text-slate-100 text-4xl mb-10 m-2'>Options</h1>
                <ul className='text-center'>
                    <li 
                        className='bg-violet-400 text-slate-800 hover:text-slate-100 hover:bg-violet-500 font-semibold text-xl mb-2 '
                        onClick={()=>setOptions(<ListPostsCompomponent setnewOption={setOptions}/>)}
                    >
                        List Posts
                    </li>
                    <li 
                        className='bg-violet-400 text-slate-800 hover:text-slate-100 hover:bg-violet-500 font-semibold text-xl mb-2 '
                        onClick={()=>setOptions(<NewPostComponent/>)}
                    >
                        New Post
                    </li>
                   
                </ul>
            </div>
            <div className='grow w-1/2 bg-violet-400'>
                <h1 className='text-center text-slate-100 text-4xl m-2'>Admin Panel</h1>
                <div className='container w-11/12 mx-auto border-2 rounded-3xl overflow-hidden mt-10 mb-2'>
                    {options}
                </div>
            </div>
        </div>
    )
}

export default AdminPage;