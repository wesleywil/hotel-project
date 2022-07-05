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
                <a onClick={()=>history('/residences/')} className="mr-5 text-violet-300  hover:text-violet-100">Residences</a>
            </nav>
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