
import './App.css';
import  React, {useEffect} from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Components
import NavBar from './components/NavBar'


//Sections
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillSection from './sections/SkillSection'
import ProjectSection from './sections/ProjectSection'
import BlogSection from './sections/BlogSection'
import ContactSection from './sections/ContactSection'
import ScrollTop from './components/ScrollTop'


function App() {
    useEffect(() => {
      AOS.init({ duration: 500});
    }, []);

  return ( 
  <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} >
            <Route path="/hero_section"  element={<HeroSection/>} />
            <Route path="/about_section" element={<AboutSection/>} />
            <Route path="/skill_section" element={<SkillSection/>} />
            <Route path="/project_section" element={<ProjectSection/>} />
            <Route path="/blog_section" element={<BlogSection/>} />
            <Route path="/contact_section" element={<ContactSection/>} />


          </Route>
        </Routes>
      </BrowserRouter>

      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <BlogSection/>
      <ContactSection/>
      
      <ScrollTop />


    </>
  );
}

export default App;
