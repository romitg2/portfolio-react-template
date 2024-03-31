import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Pages/Hero/Hero";
import { Canvas, useThree } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import "./app.css";
import ProjectCard from "./Pages/Projects/ProjectCard/ProjectCard";
import Loading from "./Pages/Loading/Loading";
import { useEffect } from "react";
import Available from "./Components/Available/Available";
import CallToAction from "./Pages/CallToAction/CallToAction";

function App() {
  return (
    <>
      {/* <CallToAction /> */}
      {/* <Available /> */}
      {/* <Navigation /> */}
      <Hero />
      {/* <Loading /> */}
      {/* <Projects /> */}
      {/* <div className="experience"> */}
      {/*   <Canvas> */}
      {/*     <Experience /> */}
      {/*   </Canvas>{" "} */}
      {/* </div> */}
    </>
  );
}

export default App;
