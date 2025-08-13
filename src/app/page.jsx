import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/herosection/Hero";
export default function Home() {
  return (
    <div className="w-full h-max pb-5">
      <NavBar />
      <Hero />

    </div>
  );
}
