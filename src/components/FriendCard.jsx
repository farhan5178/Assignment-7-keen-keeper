import React from 'react';
import Link from 'next/link';

export default function FriendCard({ friend }) {
  const { id, name, picture, tags, days_since_contact, status } = friend;

  return (
   
    <Link href={`/${id}`} className="block">
      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-2 h-full">
        {/* Avatar */}
        <img
          src={picture}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mb-2"
        />
        <h3 className="font-semibold text-[20px] text-gray-800">{name}</h3>
        <p className="text-[12px] text-gray-400 mb-2">{days_since_contact}d ago</p>
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green-100 text-green-700 text-[12px] font-bold uppercase tracking-wider rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-1">
          {status === 'on_track' && (
            <span className="px-4 py-1 text-[12px] font-bold text-white bg-[#244D3F] rounded-full">
              On-Track
            </span>
          )}
          {status === 'overdue' && (
            <span className="px-4 py-1 text-[12px] font-bold text-white bg-red-500 rounded-full">
              Overdue
            </span>
          )}
          {status === 'needs_attention' && (
            <span className="px-4 py-1 text-[12px] font-bold text-white bg-yellow-500 rounded-full">
              Almost Due
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
