import React from 'react';
import crowLogo from '../assets/crowLogo.svg';
import DrawerMenu from './drawer';  
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <header className="bg-white text-white pb-4">
            <div className="container mx-auto flex justify-between gap-8 items-center px-4">
                <div className="flex items-end space-x-4">
                    <Link to="/">  
                    <img  src={crowLogo} alt="Logo" className="py-2 h-24 w-24" /> {/* Replace with your logo */}
                    </Link>                
                </div>  
                <div className='px-2 h-full w-full'>
                <div className='py-8 border-slate-600 border-2 border-dotted text-center text-slate-900'>ad space</div>
                </div>
                <div className='flex flex-col col-span-1 items-center mt-4 mb-4 space-y-4'>              
                    <button>
                    <Link to="/Signup" className="px-3 py-2 rounded-md border-cyan-800 border-2 hover:bg-cyan-700 hover:text-white  text-cyan-800 sign-up-button">Sign Up</Link>
                    </button>
                    <button>
                    <Link to ="/Login" className=' px-6 py-2 rounded-md  bg-cyan-900 hover:bg-cyan-800 login-button'>
                        Login</Link>
                    </button>
                </div>
            </div>
            <DrawerMenu/>
        </header>
    );
};


export default Header;
