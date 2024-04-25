import React from 'react';
import crowLogo from '../assets/crowLogo.svg';

const Footer = () => {
  return (
    <footer className=" bg-slate-900 text-white">
        
        <div className="flex items-center">
          <img src={crowLogo}alt="Company Logo" className="ml-8 mt-4 h-28 w-28 mr-3" />
        </div>
        
      <div className="flex place-content-between mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm">
        {/* Copyright notice */}
        <div>
        Copyright &copy; 2022 Company Name.
        </div>
        <div className="text-sm">
          {/* Footer navigation */}
          <a href="/privacy" className="text-gray-300 hover:text-gray-100 mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-300 hover:text-gray-100 mx-2">Terms & Conditions</a>
          <a href="/cookie" className="text-gray-300 hover:text-gray-100 mx-2">Cookie Policy</a>
          <a href="/contact" className="text-gray-300 hover:text-gray-100 mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
