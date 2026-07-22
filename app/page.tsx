import SmoothScroll from "@/components/SmoothScroll";
import MouseFollower from "@/components/MouseFollower";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import AboutMe from "@/components/AboutMe";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <MouseFollower />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <WhyMe />
        <Journey />
        <Skills />
        <Education />
        <AboutMe />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
