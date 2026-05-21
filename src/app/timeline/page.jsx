"use client";

import { useState, useEffect } from "react";

export default function Timeline() {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTimeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    setTimeline(savedTimeline);
  }, []);

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case "call":
        return <img src="/call.png" alt="Call" className="w-6 h-6" />;
      case "text":
        return <img src="/text.png" alt="Text" className="w-6 h-6" />;
      case "video":
        return <img src="/video.png" alt="Video" className="w-6 h-6" />;
      default:
        return null;
    }
  };

  // Filter the timeline based on the selected type
  const filteredTimeline = filter === "All" 
    ? timeline 
    : timeline.filter(entry => entry.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-10 pb-20 px-4 sm:px-10 lg:px-[100px] xl:px-[200px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Timeline</h1>

        <div className="mb-8 w-64">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg py-3 px-4 outline-none shadow-sm cursor-pointer"
          >
            <option value="All">All Interactions</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          {filteredTimeline.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-500">No interactions logged yet.</p>
              <p className="text-sm text-gray-400 mt-2">Go to a friend's details page to check-in!</p>
            </div>
          ) : (
            timeline.map((entry) => {
              const dateObj = new Date(entry.date);
              const formattedDate = dateObj.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });

              return (
                <div 
                  key={entry.id} 
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-6 transition-all hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
                    {getIcon(entry.type)}
                  </div>

                  <div className="flex flex-col">
                    <p className="text-gray-700 text-lg">
                      <span className="font-bold text-[#244D3F]">{entry.type}</span>{" "}
                      <span className="text-gray-500">with {entry.friendName}</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{formattedDate}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
