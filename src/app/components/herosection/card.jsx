import React from 'react'

const Card = ({ text, desc }) => {
  return (
    <div className="w-[244px] h-[95px] flex flex-col justify-center items-center gap-2 bg-black/30 backdrop-blur-md border border-gray-600 rounded-2xl p-4 ">
      <div className="w-full h-max flex justify-center items-center gap-[22px]">
        <h3 className="text-white text-sm font-medium">{text}</h3>
        <div className="w-[27px] h-[27px] bg-[#D9D9D9] rounded-full"></div>
      </div>
     <div className='w-full h-max flex justify-center items-center'>
       <p className="text-gray-300 text-xs leading-relaxed">{desc}</p>
     </div>
    </div>
  )
}

export default Card
