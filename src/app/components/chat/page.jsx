import React from 'react'
import ChatBot from './ChatBot'
import ChatMan from './ChatMan'


const ChatComponent = () => {
    const chatBotData = [
        { title: "Bureau Ai Bot", desc: "إيش هي المهارة اللي تميزك في سوق تطوير المواقع؟" },
        { title: " Bureau بوت", desc: "هل عندك شهادات أو مشاريع جانبية أضفتها لخبرتك كمطور ويب؟ تقدر ترد بملاحظة صوتية لو حاب" },
        { title: " Bureau بوت", desc: "شكراً لمشاركتك شهاداتك وإبراز خبرتك في التعامل مع التحديات الصعبة في عملك" },
    ]
    const chatManData = [
        { title: "علي صالح", desc: "JavaScript بناءً على خبراتي السابقة، أظن إنه " , type : "text" },
        { title: "علي صالح", desc: "يقرأ كل طلب جديد ويختار الأنسب تلقائيًا" , type : "voice" },
    ]
  return (
    <div className='w-full h-max pb-5  flex justify-center items-center'>
          <main className='w-[90%] h-max pb-5 rounded-[6px] flex flex-col backdrop-blur-lg border border-white/10 bg-transparent  shadow-none    transition-all duration-300 max-[900px]:flex-wrap'>
                   <div className='w-full h-max pb-5 pt-5 text-white'>
                    <h1 className='w-full h-max pb-5 text-[48px] font-medium  text-center flex justify-center items-center'>text</h1>
                    <p className='w-full h-max pb-5  text-center flex justify-center items-center'>text text text texttext text</p>
                   </div>
                   <div className='w-full h-full flex justify-center items-center '>
                      <div className='w-full h-full flex flex-col justify-center pl-30 items-center gap-25  '>
                            {chatManData.map((chatMan, index) => (
                                <ChatMan key={index} title={chatMan.title} desc={chatMan.desc} type={chatMan.type} />
                            ))}
                      </div>
                      <div className='w-full h-full flex flex-col justify-center pr-20 items-center gap-30 '>
                           {chatBotData.map((chatBot, index) => (
                               <ChatBot key={index} title={chatBot.title} desc={chatBot.desc} />
                           ))}
                      </div>
                   </div>
          </main>
    </div>
  )
}

export default ChatComponent
