import React from "react";
import ChatBot from "./ChatBot";
import ChatMan from "./ChatMan";

const ChatComponent = () => {
  const chatBotData = [
    {
      title: "Bureau Ai Bot",
      desc: "إيش هي المهارة اللي تميزك في سوق تطوير المواقع؟",
    },
    {
      title: " Bureau بوت",
      desc: "هل عندك شهادات أو مشاريع جانبية أضفتها لخبرتك كمطور ويب؟ تقدر ترد بملاحظة صوتية لو حاب",
    },
    {
      title: " Bureau بوت",
      desc: "شكراً لمشاركتك شهاداتك وإبراز خبرتك في التعامل مع التحديات الصعبة في عملك",
    },
  ];
  const chatManData = [
    {
      title: "علي صالح",
      desc: "JavaScript بناءً على خبراتي السابقة، أظن إنه ",
      type: "text",
    },
    {
      title: "علي صالح",
      desc: "يقرأ كل طلب جديد ويختار الأنسب تلقائيًا",
      type: "voice",
    },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-center py-8 px-4 sm:px-6 lg:px-8">
      <main className="w-full max-w-7xl mx-auto rounded-lg backdrop-blur-lg border border-white/10 bg-transparent shadow-none transition-all duration-300">
        {/* Header Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 text-white">
          <h1 className="w-full text-3xl pb-5 sm:text-4xl lg:text-[48px] font-medium text-center mb-4 leading-tight">
            كيف يسوي البوت المقابلات الأولية؟
          </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFD23D] to-transparent mx-auto mt-6 rounded-full"></div>


        </div>

        {/* Chat Container */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pb-8">
          {/* Desktop Layout (901px+) */}
          <div className="hidden min-[901px]:flex w-full justify-center items-start gap-8 xl:gap-12">
            {/* Left Side - ChatMan */}
            <div className="w-1/2 flex flex-col justify-start items-start  pt-25 gap-32">
              {chatManData.map((chatMan, index) => (
                <div key={index} className="w-full">
                  <ChatMan
                    title={chatMan.title}
                    desc={chatMan.desc}
                    type={chatMan.type}
                  />
                </div>
              ))}
            </div>

            {/* Right Side - ChatBot */}
            <div className="w-1/2 flex flex-col justify-start items-end gap-[100px] ">
              {chatBotData.map((chatBot, index) => (
                <div key={index} className="w-full">
                  <ChatBot title={chatBot.title} desc={chatBot.desc} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile and Tablet Layout (0-900px) */}
          <div className="min-[901px]:hidden w-full flex flex-col gap-6 sm:gap-8">
            {/* Conversation Flow - تبادل الرسائل */}
            <div className="w-full">
              <ChatBot
                title={chatBotData[0].title}
                desc={chatBotData[0].desc}
              />
            </div>

            <div className="w-full">
              <ChatMan
                title={chatManData[0].title}
                desc={chatManData[0].desc}
                type={chatManData[0].type}
              />
            </div>

            <div className="w-full">
              <ChatBot
                title={chatBotData[1].title}
                desc={chatBotData[1].desc}
              />
            </div>

            <div className="w-full">
              <ChatMan
                title={chatManData[1].title}
                desc={chatManData[1].desc}
                type={chatManData[1].type}
              />
            </div>

            <div className="w-full">
              <ChatBot
                title={chatBotData[2].title}
                desc={chatBotData[2].desc}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatComponent;
