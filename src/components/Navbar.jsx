"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SlHome } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    const baseClass = "btn btn-ghost sm:btn-md text-xl sm:text-sm md:text-base px-2 sm:px-3 border-none bg-transparent ";
    return pathname === path
      ? baseClass + "text-[#244D3F] sm:bg-[#244D3F] sm:text-white sm:hover:bg-[#1a382e]"
      : baseClass + "text-gray-500 sm:bg-gray-50 sm:text-gray-700 sm:hover:bg-gray-100";
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 md:px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
        </div>
        <Link href="/" className="font-bold text-[18px] md:text-[24px] sm:text-[20px]">
          Keen<small className='text-[#244D3F] font-bold text-[18px] sm:text-[20px] md:text-[24px]'>Keeper</small>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
      </div>
      <div className="navbar-end gap-1 sm:gap-2 md:gap-4">
        
        <Link href="/" className={getLinkClass('/')}>
          <SlHome />
          <span className="hidden sm:inline">Home</span>
        </Link>
        
        <Link href="/timeline" className={getLinkClass('/timeline')}>
          <IoTimeOutline className="text-lg" />
          <span className="hidden sm:inline">Timeline</span>
        </Link>
        
        <Link href="/stats" className={getLinkClass('/stats')}>
          <TfiStatsUp />
          <span className="hidden sm:inline">Stats</span>
        </Link>

      </div>
    </div>
  );
}
