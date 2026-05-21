import Link from 'next/link';
import { SlHome } from "react-icons/sl";
import { FaGhost } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-[#F8F9FA] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Decorative Glowing Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#244D3F] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-lg w-full">
        
        {/* Animated 404 Text with Icon */}
        <div className="relative inline-block mb-6 animate-[bounce_3s_ease-in-out_infinite]">
          <h1 className="text-[140px] sm:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#244D3F] to-[#458B74] select-none leading-none tracking-tighter">
            404
          </h1>
          <FaGhost className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 text-6xl sm:text-7xl drop-shadow-lg" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Oops! Where did you go?
        </h2>
        
        <p className="text-gray-500 mb-10 text-base sm:text-lg px-4 leading-relaxed">
          The page you are looking for has vanished into thin air. Let's help you find your way back to your friends list!
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-3 bg-[#244D3F] text-white hover:bg-[#1a382e] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-full font-semibold text-base sm:text-lg"
        >
          <SlHome className="text-xl" /> 
          Take Me Home
        </Link>
        
      </div>
    </div>
  );
}
