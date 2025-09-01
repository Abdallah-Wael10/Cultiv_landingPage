import React from 'react'
import Image from 'next/image'
import report1 from "../../../../public/rebort1.svg"
import report2 from "../../../../public/rebort2.svg"

const CaseStudy = () => {
  return (
    <div className='w-full h-max pb-5 pt-10 flex justify-center items-center gap-20'>
           <div className='w-full lg:max-w-[320px] border border-white rounded-[10px] flex justify-center items-center p-7'>
            <Image src={report1} alt='report1' />
           </div>
           <div className='w-max flex justify-center items-center gap-5 flex-col'>
            <hr className='w-[1px] h-[200px] bg-white' />
            <h1>OR</h1>
            <hr className='w-[1px] h-[200px] bg-white' />
           </div>
           <div className='w-full lg:max-w-[320px] border border-white rounded-[10px] flex justify-center items-center p-7'>
            <Image src={report2} alt='report2' />
           </div>
    </div>
  )
}

export default CaseStudy