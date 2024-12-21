import React from 'react'

function CategorieSelection() {
  return (
    <div className='shadow-md w-[50%] flex justify-center items-center mx-auto mt-6 overflow-hidden'>
        <div className='w-[25%] text-center cursor-pointer hover:bg-[#B1D4FB] bg-[#9FC1E5] text-[#0D1E30] font-bold rounded-t-md'>All</div>
        <div className='w-[25%] text-center cursor-pointer hover:bg-[#BFD5ED] hover:text-[#0D1E30] bg-[#CDE0F4] text-gray-600'>Personal</div>
        <div className='w-[25%] text-center cursor-pointer hover:bg-[#BFD5ED] hover:text-[#0D1E30] bg-[#CDE0F4] text-gray-600'>Work</div>
        <div className='w-[25%] text-center cursor-pointer hover:bg-[#BFD5ED] hover:text-[#0D1E30] bg-[#CDE0F4] text-gray-600'>Other</div>
    </div>
  )
}

export default CategorieSelection
