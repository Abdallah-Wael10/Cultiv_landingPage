import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/herosection/Hero";
import ChatComponent from "./components/chat/page";
import Steps from "./components/steps/page";
import Stats from "./components/stats/Stats";
import CaseStudy from "./components/caseStudy/CaseStudy";
import Form from "./components/Form/Form";
export default function Home() {
  return (
    <div className="w-full h-max bg-[#1A1A1A]">
      <NavBar />
      <Hero />
      <ChatComponent />
      <Steps />
      <Stats />
      <CaseStudy />
      <Form />
    </div>
  );
}
