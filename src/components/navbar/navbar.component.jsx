import React from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import { Dropdown } from "flowbite-react";

import Cabin from '../../assets/imgs/cabin.svg'


const NavBar = ()=>{

    const history = useNavigate();

    return(
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <NavLink to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src={Cabin} className='w-12'/>
                <span className="ml-3 text-xl text-violet-300 hover:text-violet-200">Klint-Kent</span>
            </NavLink>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a onClick={()=>history('/residences/cabins')} className="mr-5 text-violet-300  hover:text-violet-100">Cabins</a>
                <a onClick={()=>history('/residences/hotels')} className="mr-5 text-violet-300 hover:text-violet-100">Hotels</a>
            </nav>
            {/* <button onClick={()=>history('/profile')} className="inline-flex items-center bg-violet-400 border-0 py-1 px-3 focus:outline-none hover:bg-violet-600 rounded text-base text-slate-800 hover:text-slate-200 mt-4 md:mt-0">Profile
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button> */}
            <div className="bg-violet-500 text-slate-100">
                <Dropdown label='Profile' color="bg-violet-400">
                    <Dropdown.Item>
                        Logout
                    </Dropdown.Item>
                </Dropdown>
            </div>


            
        </div>
    </header>
    )
}

export default NavBar;