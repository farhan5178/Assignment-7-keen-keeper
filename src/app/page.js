"use client";

import { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import HeroCard from "@/components/HeroCard";
import FriendCard from "@/components/FriendCard";

export default function Home() {
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriendsData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setFriendsData(data);
      setLoading(false);
    };

    fetchFriendsData();
  }, []);

  return (
    <>
      <Banner />
      <HeroCard />
      
      <div className="px-4 sm:px-10 lg:px-[200px] py-10">
        <h2 className="text-3xl font-bold text-[#244D3F] mb-6">Your Friends</h2>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
            <p className="text-gray-500 font-medium animate-pulse">Loading connections...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {friendsData.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
