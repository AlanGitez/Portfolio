import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "./sass/index.scss"

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
        <Proyects />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
