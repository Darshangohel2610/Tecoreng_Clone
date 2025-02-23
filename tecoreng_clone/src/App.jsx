import AppreciationSection from "./components/AppreciationSection"
import DevelopmentProcess from "./components/DevelopmentProcess"
import EngagementModelSection from "./components/EngagementModelSection"
import ExpertSection from "./components/ExpertSection"
import FooterSection from "./components/FooterSection"
import GetInTouchSection from "./components/GetInTouchSection"
import HeroSection from "./components/HeroSection"
import InsightSection from "./components/InsightSection"
import LoopBall from "./components/LoopBall"
import Navbar from "./components/Navbar"
import ServiceSection from "./components/ServiceSection"
import Specialization from "./components/Specialization"
import SuccessStories from "./components/SuccessStories"
import VideoPlayer from "./components/VideoPlayer"
import WhoWeAre from "./components/WhoWeAre"
function App() {

  return (
    <>
      <Navbar />
      <HeroSection /> 
      <section className="bg-gradient-to-b from-[#5A82A0] via-[#1A486E] to-transparent opacity-50 h-14"></section>
      <VideoPlayer></VideoPlayer>
      <LoopBall></LoopBall>
      <ServiceSection></ServiceSection>
      <WhoWeAre></WhoWeAre>
      <Specialization></Specialization>
      <EngagementModelSection></EngagementModelSection>
      <DevelopmentProcess></DevelopmentProcess>
      <SuccessStories></SuccessStories>
      <ExpertSection></ExpertSection>
      <AppreciationSection></AppreciationSection>
      <InsightSection></InsightSection>
      <GetInTouchSection></GetInTouchSection>
      <FooterSection></FooterSection>
    </>
  )
}

export default App
