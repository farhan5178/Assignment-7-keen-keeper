"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function FriendDetails() {
  const { friend: friendId } = useParams(); 
  const [friendData, setFriendData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFriendDetails = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      
      const foundFriend = data.find((f) => f.id.toString() === friendId);
      setFriendData(foundFriend);
      setLoading(false);
    };
    fetchFriendDetails();
  }, [friendId]);

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
    <div className="px-4 sm:px-10 lg:px-[200px] py-16 min-h-screen">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start">
        
        <img src={friendData.picture} alt={friendData.name} className="w-40 h-40 rounded-full object-cover shadow-md" />
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{friendData.name}</h1>
          <p className="text-lg text-gray-500 mb-6">{friendData.email}</p>
          
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 text-lg mb-2">Biography</h3>
            <p className="text-gray-600 leading-relaxed">{friendData.bio}</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {friendData.tags.map((tag, index) => (
              <span key={index} className="px-4 py-2 bg-green-100 text-green-700 text-[12px] font-bold uppercase tracking-wider rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center border border-gray-100">
             <div>
               <p className="text-sm text-gray-500">Last Contact</p>
               <p className="font-bold text-gray-800">{friendData.days_since_contact} days ago</p>
             </div>
             <div>
                {friendData.status === 'on_track' && <span className="px-4 py-2 text-sm font-bold text-white bg-[#244D3F] rounded-full">On-Track</span>}
                {friendData.status === 'overdue' && <span className="px-4 py-2 text-sm font-bold text-white bg-red-500 rounded-full">Overdue</span>}
                {friendData.status === 'needs_attention' && <span className="px-4 py-2 text-sm font-bold text-white bg-yellow-500 rounded-full">Almost Due</span>}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
