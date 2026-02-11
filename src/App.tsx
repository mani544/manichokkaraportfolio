import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SkillsMarquee from "./components/SkillsMarquee";
import Evolution  from "./components/Evolution";
import Vigilantiq from "./components/Vigilantiq";
import FounderRoadmap from "./components/FounderRoadmap";
import Certifications from "./components/Certifications";
import ExperienceEducation from "./components/ExperienceEducation";
import YouTubeSection from "./components/YouTube";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <SkillsMarquee />
        <Evolution />
        <Vigilantiq />
        <FounderRoadmap />
        <Certifications />
        <ExperienceEducation />
        <YouTubeSection />
        <Contact />
      
      </main>

      <Footer />
    </>
  );
};

export default Home;
