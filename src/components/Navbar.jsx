import React from 'react'
import { SlHome } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";




export default function Navbar() {
  return (
   <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 md:px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
    
    </div>
    <a className="font-bold text-[18px] md:text-[24px] sm:text-[20px]">Keen<small className='text-[#244D3F] font-bold text-[18px] sm:text-[20px] md:text-[24px]'>Keeper</small></a>
  </div>
  <div className="navbar-center hidden lg:flex">
      </div>
      <div className="navbar-end gap-1 sm:gap-2 md:gap-4">
        <a className="btn bg-[#244D3F] text-white text-xs sm:text-sm md:text-base px-2 sm:px-3">

          <SlHome />
          <span className="hidden sm:inline">
            Home
          </span>
        </a>
        <a className="btn text-xs sm:text-sm md:text-base px-2 sm:px-3">  <IoTimeOutline />
          <span className="hidden sm:inline">
            Timeline
          </span>

        </a>
        <a className="btn text-xs sm:text-sm md:text-base px-2 sm:px-3"> <TfiStatsUp />
          <span className="hidden sm:inline">
            Stats
          </span>

        </a>

      </div>
    </div>
  )
}


