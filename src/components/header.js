import React, { useState } from 'react';
import crowLogo from '../assets/crowLogo.svg';
import DrawerMenu from './drawer';  
import { Link } from 'react-router-dom';
import { Button, Stack } from '@chakra-ui/react'
const Header = () => {
      const [url,setUrl] = useState(window.location.pathname);
      const incrementCount = (text) => {
         
    // Correct way: Using the functional form of 'setCount'
    setUrl(text);
  };
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
                    <Stack direction='row' spacing={4} align='center'>
                        
                        <Link to="/signup">
                            <Button colorScheme='teal' variant={(url.slice(1) === 'signup')?'solid':'outline'} onClick={() => incrementCount('signup')}>
                            Sign Up
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button colorScheme='teal' variant={(url.slice(1) === 'login')?'solid':'outline'} onClick={() => incrementCount('login')}>
                            Login
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </div>
            <DrawerMenu/>
        </header>
    );
};


export default Header;
