// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-gray-400 shadow-'>
            <div className='flex justify-between items-center mx-auto p-5 px-10 max-w-full'>
                <Link to='/'>
                <h1 className='font-serif bold text-sm sm:text-xl flex-wrap'>
                    <span className="text-gray-600 ">Home</span>
                    <span className="text-gray-950">Hub</span>
                </h1>
                </Link>
                <form className='bg-gray-300 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search. . . .' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                    <FaSearch className='text-gray-600' />
                </form>
                <ul className='flex gap-5'>
                    <Link to='/'>
                    <li className='hidden sm:inline text-gray-500 hover:text-gray-950 transition-all duration-500'>Home.</li>
                    </Link>
                    <Link to='/about'>
                    <li className='hidden sm:inline text-gray-500 hover:text-gray-950 transition-all duration-500'>About.</li>
                    </Link>
                    <Link to='/sign-in'>
                    <li className='text-gray-500 hover:text-gray-950 transition-all duration-500'>Sign In.</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
