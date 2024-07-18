import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Loading from "./components/loading/Loading";
import Projects from "./components/projects/Projects";
import Stacks from "./components/stacks/Stacks";


export default function App(){
  return(
    <main>
      <Loading/>
      <Hero/>
      <div className="center">
        <Cards/>
        <About/>
        <Stacks/>
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
    </main>
  )
}