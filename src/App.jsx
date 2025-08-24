import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioNavbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Hero />
      <About />
      < Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
