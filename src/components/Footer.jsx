import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white pt-16 pb-8 px-4 lg:px-[200px] mt-[80px]">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-3xl font-bold">KeenKeeper</h2>
        <p className="text-[16px] text-gray-300">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <div className="mt-4">
          <p className="font-semibold mb-3 text-[20px]">Social Links</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#244D3F]">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#244D3F]">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#244D3F]">
              <FaXTwitter size={14} />
            </a>
          </div>
        </div>
      </div> <div className="flex flex-col md:flex-row justify-between items-center text-[16px] text-gray-400 gap-4">
        <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
      
    </footer>
  );
}
