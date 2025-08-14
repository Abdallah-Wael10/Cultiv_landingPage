import React from 'react'
import GoodCard from './GoodCard'
import BadCard from './BadCard'
const CaseStudy = () => {
  return (
    <div className='w-full h-max pb-5 pt-5 flex flex-col justify-center items-center'>
           <div className='w-full h-max pb-5 pt-5'>
                  <h1 className='w-full h-max pb-5 text-white text-[48px] text-center font-medium'>دراسة حالة</h1>
           </div>
           <div className='w-full h-max pb-5 pt-5 flex justify-center items-center gap-10'>
               <BadCard title="بدون شات بوت Bureau" text1="تواصل محدود مرتبط بساعات العمل" text2="عبء إداري يستهلك الوقت" text3="مقابلات تمتد لأيام أو أسابيع" text4="جودة أقل للمرشحين" />
               <GoodCard title="شات بوت Bureau" text1="24/7 تواصل فوري مع المرشحين" text2="أتمتة كاملة للمهام الروتينية " text3="مقابلات المئات خلال دقائق" text4="تحسين جودة المرشحين" />
           </div>
    </div>
  )
}

export default CaseStudy
