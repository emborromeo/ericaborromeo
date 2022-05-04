
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
          <Route path="/ericaborromeo" element={<NavBar />} >
            <Route path="/ericaborromeo/hero_section"  element={<HeroSection/>} />
            <Route path="/ericaborromeo//about_section" element={<AboutSection/>} />
            <Route path="/ericaborromeo//skill_section" element={<SkillSection/>} />
            <Route path="/ericaborromeo//project_section" element={<ProjectSection/>} />
            <Route path="/ericaborromeo//blog_section" element={<BlogSection/>} />
            <Route path="/ericaborromeo//contact_section" element={<ContactSection/>} />


          </Route>
        </Routes>
      </BrowserRouter>

      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <BlogSection/>
      <ContactSection/>
      


    </>
  );
}

export default App;
