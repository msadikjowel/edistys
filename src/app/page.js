import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Legacy from "@/components/Legacy/Legacy";
import Partners from "@/components/Partners/Partners";
import Philosophy from "@/components/Philosophy/Philosophy";
import Powering from "@/components/Powering/Powering";
import Navbar2 from "@/components/shared/Navbar2";
import SolutionSimplify from "@/components/SolutionSimplify/SolutionSimplify";
import Tab from "@/components/Tab/Tab";
import Trusted from "@/components/Trusted/Trusted";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar2 />
      <HeroSection />
      <Powering />
      <Philosophy />
      <SolutionSimplify />
      <Tab />
      <Trusted />
      <Partners />
      <Legacy />
      <Footer />
    </div>
  );
}
