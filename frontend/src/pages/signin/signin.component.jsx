import React from "react";
import { useNavigate } from "react-router-dom";



const SignIn = ()=>{
    const history = useNavigate();

    return(
        <div className="container lg:w-1/4 mx-auto mt-20 border-2 border-violet-400 rounded-2xl overflow-hidden">
            <h1 className="text-center text-4xl text-slate-900 font-bold uppercase  bg-violet-400">Sign In</h1>
            <form className="p-2 m-2">
                <label className="text-violet-300 text-2xl">Username</label>
                <input id='username' className="py-2 text-xl w-full rounded-lg" type='text' placeholder='Username' />
                <label className="text-violet-300 text-2xl">Password</label>
                <input id='password' className="py-2 text-xl w-full rounded-lg"  type='password' placeholder='Password' />
                <div className="mt-2 mx-auto w-11/12 text-center">
                    <a className="text-violet-400 hover:text-violet-300" onClick={()=>history('/signup')}>Don't have an account yet? Click Here!</a>
                </div>
                <div className="m-2 p-2 flex justify-center">
                    <button className="bg-violet-400 m-2 py-1 px-4 text-slate-900 text-2xl font-semibold rounded-xl hover:bg-violet-500">Login</button>
                    <button className="bg-violet-400 m-2 px-4 text-slate-900 text-2xl font-semibold rounded-xl hover:bg-violet-500" onClick={()=>history('/')}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;