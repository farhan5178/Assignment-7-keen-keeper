import React from 'react'

export default function HeroCard() {
  return (
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-10 lg:px-[200px] py-6 sm:py-10">
  
  <div className=" rounded-md py-6 text-center shadow-sm">
    <h2 className="text-2xl sm:text-3xl font-bold ">10</h2>
    <p className="text-gray-500 mt-2 text-sm sm:text-base">
      Total Friends
    </p>
  </div>

  <div className=" rounded-md py-6 text-center shadow-sm">
    <h2 className="text-2xl sm:text-3xl font-bold ">3</h2>
    <p className="text-gray-500 mt-2 text-sm sm:text-base">
      On Track
    </p>
  </div>

  <div className=" rounded-md py-6 text-center shadow-sm">
    <h2 className="text-2xl sm:text-3xl font-bold ">6</h2>
    <p className="text-gray-500 mt-2 text-sm sm:text-base">
      Need Attention
    </p>
  </div>

  <div className="rounded-md py-6 text-center shadow-sm">
    <h2 className="text-2xl sm:text-3xl font-bold ">12</h2>
    <p className="text-gray-500 mt-2 text-sm sm:text-base">
      Interactions This Month
    </p>
  </div>

</div>
  )
}
