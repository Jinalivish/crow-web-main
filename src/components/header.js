import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import crowLogo from '../assets/crowLogo.svg';
import DrawerMenu from './drawer';
const Header = () => {
    const [isLoginActive, setIsLoginActive] = useState(false); // State to manage login NavLink's active state

    const handleLoginClick = () => {
        setIsLoginActive(!false);

    };

    return (
        <header className="bg-white text-white pb-4">
            <div className="container mx-auto flex justify-between gap-8 items-center px-4">
                <div className="flex items-end space-x-4">
                    <Link to="/">
                        <img src={crowLogo} alt="Logo" className="py-2 h-24 w-24" />
                    </Link>
                </div>
                <div className="px2 h-full w-full">
                    <div className="py-8 border-slate-600 border-2 border-dotted text-center text-slate-900">ad space</div>
                </div>
                <div className="flex flex-col col-span-1 items-center mt-4 mb-4 space-y-4">
                    <NavLink
                        to="/signup"
                        className= {`px-3  py-2 w-24  text-center rounded-md border-cyan-800 border-2 hover:bg-cyan-700 hover:text-white text-cyan-800  `}
                        // {isLoginActive ? activeClassName="bg-cyan-900 text-white" }
                       
                        // onClick={()=>handleLoginClick()}
                    >
                        Sign Up
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={`px-3 py-2 w-24  text-center  rounded-md border-cyan-800 border-2 hover:bg-cyan-700 hover:text-white text-cyan-800`}
                        onClick={()=>handleLoginClick()} // Set active state when NavLink is clicked
                    >
                        Login
                    </NavLink>
                    
                
                </div>
            </div>
            <DrawerMenu />
        </header>
    );
};

export default Header;
