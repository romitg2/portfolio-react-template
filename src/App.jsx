import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Pages/Hero/Hero";
import Projects from "./Pages/Projects/Projects";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import "./app.css";

function App() {
  return (
    <>
      {/* <Hero /> */}
      {/* <Navigation /> */}
      <Projects />

      <div className="experience">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </>
  );
}

export default App;
