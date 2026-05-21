"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaRegBell, FaRegTrashCan, FaBoxArchive, FaPhone, FaCommentDots, FaVideo } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FriendDetails() {
  const params = useParams();
  const currentId = Object.values(params)[0];

  const [friendData, setFriendData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriendDetails = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        const foundFriend = data.find((f) => f.id.toString() === currentId);
        setFriendData(foundFriend);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (currentId) {
      fetchFriendDetails();
    }
  }, [currentId]);

  const handleCheckIn = (type) => {
    toast.success(`Added a ${type} entry to the Timeline!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

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

  const formattedDate = friendData.next_due_date
    ? new Date(friendData.next_due_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "N/A";

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-10 pb-20 px-4 sm:px-10 lg:px-[100px] xl:px-[200px]">
      <ToastContainer />
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
              {friendData.status === "on_track" && <span className="px-4 py-1 text-[10px] font-bold text-white bg-[#244D3F] rounded-full">On-Track</span>}
              {friendData.status === "overdue" && <span className="px-4 py-1 text-[10px] font-bold text-white bg-red-500 rounded-full">Overdue</span>}
              {friendData.status === "needs_attention" && <span className="px-4 py-1 text-[10px] font-bold text-white bg-yellow-500 rounded-full">Almost Due</span>}
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
          </div>
          <button className="w-full py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors font-semibold text-gray-700 text-sm shadow-sm">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 py-6 flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold text-[#244D3F] mb-1">{friendData.days_since_contact}</h2>
              <p className="text-xs text-gray-400">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 py-6 flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold text-[#244D3F] mb-1">{friendData.goal}</h2>
              <p className="text-xs text-gray-400">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 py-6 flex flex-col items-center justify-center text-center">
              <h2 className="text-[22px] font-bold text-[#244D3F] mb-1 leading-tight">{formattedDate}</h2>
              <p className="text-xs text-gray-400 mt-1">Next Due</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-[#244D3F] text-sm">Relationship Goal</h3>
              <button className="px-3 py-1 text-[11px] font-semibold text-gray-600 bg-gray-50 border border-gray-100 rounded hover:bg-gray-100 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-gray-400 text-xs">
              Connect every <span className="font-bold text-gray-700">{friendData.goal} days</span>
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-[#244D3F] text-sm mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleCheckIn("Call")}
                className="py-4 bg-[#F8F9FA] border border-gray-100 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-gray-700"
              >
                <FaPhone className="text-lg" />
                <span className="text-xs font-semibold">Call</span>
              </button>
              <button
                onClick={() => handleCheckIn("Text")}
                className="py-4 bg-[#F8F9FA] border border-gray-100 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-gray-700"
              >
                <FaCommentDots className="text-lg" />
                <span className="text-xs font-semibold">Text</span>
              </button>
              <button
                onClick={() => handleCheckIn("Video")}
                className="py-4 bg-[#F8F9FA] border border-gray-100 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-gray-700"
              >
                <FaVideo className="text-lg" />
                <span className="text-xs font-semibold">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
