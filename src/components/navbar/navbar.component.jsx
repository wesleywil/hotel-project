import React from "react";
import {NavLink} from 'react-router-dom';

import Cabin from '../../assets/imgs/cabin.svg'


const NavBar = ()=>{
    return(
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={Cabin} className='w-12'/>
            <span class="ml-3 text-xl text-violet-300 hover:text-violet-200">Klint-Kent</span>
        </NavLink>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 text-violet-300  hover:text-violet-100">First Link</a>
        <a class="mr-5 text-violet-300 hover:text-violet-100">Second Link</a>
        <a class="mr-5 text-violet-300 hover:text-violet-100">Third Link</a>
        <a class="mr-5 text-violet-300 hover:text-violet-100">Fourth Link</a>
        </nav>
        <button class="inline-flex items-center bg-violet-400 border-0 py-1 px-3 focus:outline-none hover:bg-violet-600 rounded text-base text-slate-800 hover:text-slate-200 mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        </button>
    </div>
    </header>
    )
}

export default NavBar;