import React from "react";
import Header from "./components/header/Header";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Footer from "./components/footer/Footer";
import Experience from './pages/experience/Experience'
import "./App.css";
import MyCarousel from "./components/MyCarousel/MyCarousel";
import SocialIcon from "./components/socialIcon/SocialIcons";
import TypeWriter from "./components/TypeWriter/TypeWriter";
import About from "./pages/about/About";
import SkillsPage from "./pages/skills/SkillsPage";
import ProjectPage from "./pages/project/ProjectPage";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <div className="App body" style={{ position: "relative",height:'100%' }}>
      <Header />
      <MyCarousel />
      <TypeWriter />

      <SocialIcon />
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}
      <hr />
      
      <Parallax
          blur={{ min: -45, max: 40 }}
          strength={5000}
          bgImageAlt="bg"
          
        >
          <Container className='container-box rounded' >
          <Slide Top >
            <About />
          </Slide>
          </Container>
        </Parallax>
       
        <hr />
        <Container className='container-box rounded'>
        <Bounce bottom duration={500}>
            <SkillsPage />
        </Bounce>
        </Container> 
        <hr />
        <Container className='container-box rounded'>
        <Experience />
        </Container> 
        <Container className='container-box rounded'>
        <hr />
        <ProjectPage />
        </Container> 
        <hr />
        <Container className='container-box rounded'>
        <Contact />
        </Container> 
      <Footer />
    </div>
  )
};

export default App;