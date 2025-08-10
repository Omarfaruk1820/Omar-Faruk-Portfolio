import AboutSection from "../Components/AboutSection";
import { BackgroundStar } from "../Components/BackgroundStar";
import ContactSection from "../Components/ContactSection";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import ProjectSection from "../Components/ProjectSection";
import SkillsSection from "../Components/SkillsSection";
import { ThemeToggle } from "../Components/ThemeToggle";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className='main-h-screen bg-background text-foreground overflow-x-hidden'>
           
            {/* Theme Toggle */}
           <ThemeToggle></ThemeToggle>
            {/* Background effects */}
           <BackgroundStar></BackgroundStar>
            {/* Navber */}
            <Navbar></Navbar>
            {/* mian content */}
            <main>
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <SkillsSection></SkillsSection>
                <ProjectSection></ProjectSection>
                <ContactSection></ContactSection>
            </main>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Home;