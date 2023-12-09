import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Pages/Hero/Hero";
import Projects from "./Pages/Projects/Projects";

import { Canvas, useThree } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import "./app.css";
import ProjectCard from "./Pages/Projects/ProjectCard/ProjectCard";
import Loading from "./Pages/Loading/Loading";
import { useEffect } from "react";


function App() {

  useEffect(() => { 
    const imagesHTML = document.querySelectorAll('.project-image');
    // console.log(imagesHTML);
    const imagesBounds = [];
    for(let i = 0; i < imagesHTML.length; i ++) {
      const image = imagesHTML[i];
      console.log(image.getBoundingClientRect());
    }
  }, [])



  return (
    <>
      <Hero />
      <Loading />
      <Navigation />
      <Projects />

      <div className="experience">
        {/* <Canvas><Experience /></Canvas> */}
      </div>
    </>
  );
}

export default App;
