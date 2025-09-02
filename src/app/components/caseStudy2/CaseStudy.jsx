import React from 'react'
import Image from 'next/image'
import report1 from "../../../../public/rebort1.svg"
import report2 from "../../../../public/rebort2.svg"

const CaseStudy = () => {
  return (
    <div className='w-full h-max pb-8 pt-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20'>
      
      {/* First Report */}
      <div className='w-full max-w-sm sm:max-w-md lg:max-w-[320px] border border-white rounded-[10px] flex justify-center items-center p-4 sm:p-6 lg:p-7
                    transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-white/10 hover:scale-105'>
        <Image 
          src={report1} 
          alt='report1' 
          className='w-full h-auto object-contain'
        />
      </div>

      {/* OR Divider */}
      <div className='flex lg:flex-col justify-center items-center gap-4 lg:gap-5'>
        {/* Mobile/Tablet: Horizontal line */}
        <hr className='w-[150px] sm:w-[200px] h-[1px] lg:w-[1px] lg:h-[100px] bg-white/60 lg:hidden' />
        
        {/* Desktop: Vertical lines */}
        <hr className='hidden lg:block w-[1px] h-[100px] bg-white/60' />
        
        <h1 className='text-white text-lg sm:text-xl lg:text-2xl font-semibold tracking-wider'>OR</h1>
        
        {/* Mobile/Tablet: Horizontal line */}
        <hr className='w-[150px] sm:w-[200px] h-[1px] lg:w-[1px] lg:h-[100px] bg-white/60 lg:hidden' />
        
        {/* Desktop: Vertical lines */}
        <hr className='hidden lg:block w-[1px] h-[100px] bg-white/60' />
      </div>

      {/* Second Report */}
      <div className='w-full max-w-sm sm:max-w-md lg:max-w-[320px] border border-white rounded-[10px] flex justify-center items-center p-4 sm:p-6 lg:p-7
                    transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-white/10 hover:scale-105'>
        <Image 
          src={report2} 
          alt='report2' 
          className='w-full h-auto object-contain'
        />
      </div>
    </div>
  )
}

export default CaseStudy