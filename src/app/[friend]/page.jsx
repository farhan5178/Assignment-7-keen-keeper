"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaRegBell, FaRegTrashCan, FaBoxArchive } from "react-icons/fa6";

export default function FriendDetails() {
  const params = useParams(); 
  const currentId = Object.values(params)[0]; 
  
  const [friendData, setFriendData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriendDetails = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      
      const foundFriend = data.find((f) => f.id.toString() === currentId);
      setFriendData(foundFriend);
      setLoading(false);
    };

    if (currentId) {
      fetchFriendDetails();
    }
  }, [currentId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
        <p className="text-gray-500 font-medium animate-pulse">Loading details...</p>
      </div>
    );
  }
  if (!friendData) {
    return <div className="text-center py-20 text-red-500 font-bold text-2xl">Friend not found!</div>;
  }
  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-10 pb-20 px-4 sm:px-10 lg:px-[100px] xl:px-[200px]">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

        <div className="md:col-span-4 flex flex-col gap-4">
      
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
            
            <img 
              src={friendData.picture} 
              alt={friendData.name} 
              className="w-24 h-24 rounded-full object-cover mb-4" 
            />
            
            <h1 className="text-xl font-bold text-gray-800 mb-2">{friendData.name}</h1>
        
            <div className="mb-2">
              {friendData.status === 'on_track' && <span className="px-4 py-1 text-[10px] font-bold text-white bg-[#244D3F] rounded-full">On-Track</span>}
              {friendData.status === 'overdue' && <span className="px-4 py-1 text-[10px] font-bold text-white bg-red-500 rounded-full">Overdue</span>}
              {friendData.status === 'needs_attention' && <span className="px-4 py-1 text-[10px] font-bold text-white bg-yellow-500 rounded-full">Almost Due</span>}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {friendData.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-500 text-sm italic mb-4">"{friendData.bio}"</p>
            
            <p className="text-gray-400 text-xs">Preferred: {friendData.email}</p>
          </div> <button className="w-full py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors font-semibold text-gray-700 text-sm shadow-sm">
            <FaRegBell size={16} /> Snooze 2 Weeks
          </button>
          
          <button className="w-full py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors font-semibold text-gray-700 text-sm shadow-sm">
            <FaBoxArchive size={16} /> Archive
          </button>
          
          <button className="w-full py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-red-50 transition-colors font-semibold text-red-500 text-sm shadow-sm">
            <FaRegTrashCan size={16} /> Delete
          </button>

        </div>
        <div className="md:col-span-8 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full flex items-center justify-center text-gray-400 border-dashed">
           
          </div>
        </div>

      </div>
    </div>
  );
}
