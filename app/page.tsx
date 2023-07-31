import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ChooseUs from "@/components/ChooseUs";
import ScrollUp from "@/components/Common/ScrollUp";
import Countries from "@/components/Countries";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      <AboutSectionTwo />
      <Video />
      <Countries />
      <ChooseUs />
      <Testimonials />
      <Projects />
      <FAQs />
    </>
  );
}
