"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Stats() {
  const [chartData, setChartData] = useState([]);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const savedTimeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    
    let textCount = 0;
    let callCount = 0;
    let videoCount = 0;

    savedTimeline.forEach((entry) => {
      const type = entry.type.toLowerCase();
      if (type === "text") textCount++;
      else if (type === "call") callCount++;
      else if (type === "video") videoCount++;
    });

    if (textCount === 0 && callCount === 0 && videoCount === 0) {
      setChartData([
        { name: "Text", value: 5, fill: "#8B5CF6" },
        { name: "Call", value: 3, fill: "#244D3F" },
        { name: "Video", value: 2, fill: "#34D399" },
      ]);
    } else {
      setHasData(true);
      setChartData([
        { name: "Text", value: textCount, fill: "#8B5CF6" },
        { name: "Call", value: callCount, fill: "#244D3F" },
        { name: "Video", value: videoCount, fill: "#34D399" },
      ]);
    }
  }, []);

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-10 pb-20 px-4 sm:px-10 lg:px-[100px] xl:px-[200px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1a202c] mb-10">Friendship Analytics</h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 min-h-[400px]">
          <h2 className="text-[#244D3F] font-semibold text-lg mb-8">By Interaction Type</h2>
          
          {!hasData && (
            <p className="text-center text-gray-400 text-sm mb-4">
              (Preview Mode - No actual interactions logged yet)
            </p>
          )}

          <div className="flex justify-center h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius={90}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend 
                  iconType="circle" 
                  wrapperStyle={{ fontSize: '14px', color: '#6b7280', paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
