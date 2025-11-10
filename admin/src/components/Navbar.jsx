import React from 'react';
import logo from '../assets/logo.png'; // Correct import statement

const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%]'>
      <h1 className='text-2xl font-bold text-gray-800'>E-com-plat Admin</h1>
      <button onClick={()=>setToken("")} className='bg-gray-600 text-white py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm  '>Logout</button>
    </div>
  );
};

export default Navbar;