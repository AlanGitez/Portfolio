import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Proyects from "./Proyects";
import "./sass/index.scss"
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Proyects />
      <Contact />
    </>
  );
}

export default App;
