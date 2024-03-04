import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import logo from "../assets/svg/logo.svg"

const Header = () => {
  let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full top-0 left-0 sticky'>
      <div className='md:flex items-center justify-between bg-slate-800 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <img src={logo} className='w-[110px] h-[60px]' alt="" />
        </span>
      </div>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <GiHamburgerMenu name={open ? 'close':'menu'} />
      </div>
      

      <ul className={`lg:flex lg:items-center md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      <ul className="flex flex-col md:flex-row md:mt-0 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link to='/' className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link to='/documentation' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Documentation</Link>
                    </li>
                    <li>
                        <Link to='/pricing' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
                    </li>
                    <li>
                        <Link to='/faqs' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">FAQs</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                    </li>
                </ul>
        <button className='bg-blue-700 rounded-xl p-2 hover:bg-blue-500 lg:mt-0 md:mt-0 w-[90%] mt-3 mx-4'>
          Get Started
        </button>
      </ul>
      </div>
    </div>
  )
}

export default Header