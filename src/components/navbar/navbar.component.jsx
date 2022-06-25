import React from "react";
import {NavLink} from 'react-router-dom';


const NavBar = ()=>{
    return(
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-black shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                    <NavLink to='/' className="text-2xl no-underline text-violet-400 hover:violet-600">Home</NavLink>
            </div>
            <div>
                <a href="/one" className="text-lg no-underline text-violet-400 hover:text-violet-600 ml-2">One</a>
                <a href="/two" className="text-lg no-underline text-violet-400 hover:text-violet-600 ml-2">Two</a>
                <a href="/three" className="text-lg no-underline text-violet-400 hover:text-violet-600 ml-2">Three</a>
            </div>
        </nav>
    )
}

export default NavBar;