"use client"
import Image from "next/image";
import { useState , useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/herosection/Hero";
import ChatComponent from "./components/chat/page";
import Steps from "./components/steps/page";
import Stats from "./components/stats/Stats";
import CaseStudy from "./components/caseStudy/CaseStudy";
import Form from "./components/Form/Form";
import Loading from "./components/loading/loading";
export default function Home() {
  // i need to make function to render loading state for 2 sec before retrun landing page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
