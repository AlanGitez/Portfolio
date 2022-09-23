import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "./sass/index.scss"
import Skills from "./Skills";

const About = React.lazy(() => import("./About"));
const Proyects = React.lazy(() => import("./Proyects"));
const Contact = React.lazy(() => import("./Contact"));

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Suspense>
        <About />
        <Skills />
        <Proyects />
        {/* <Contact /> */}
      </Suspense>
    </>
  );
}

export default App;
