import React from 'react'
import Image from 'next/image'
const Card = ({ title, description, image }) => {
  return (
    <div className='w-[280px] h-[400px]  rounded-lg shadow-md overflow-hidden  max-[500px]:backdrop-blur-3xl max-[500px]:rounded-md '>
        <div className='w-full h-max pb-2  pt-5 flex flex-col justify-center items-center'>
          <Image src={image} alt={title}  className='' />
          <p className='w-full h-max pt-5 text-center text-[18px] font-bold text-[#FFC400]'>{title}</p>
          <p className='w-full h-max pt-8 text-center text-[16px] font-bold text-white'>{description}</p>
        </div>

    </div>
  )
}

export default Card
