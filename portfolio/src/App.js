import NavBar from "./Components/NavBar/NavBar"
import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import Skills from "./Components/Skills/Skills"
import Contact from "./Components/Contact/Contact"
import Typed from 'react-typed';
import Work from "./Components/Work/Work"




function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work/>
      <Contact />

    </div>
  )
}

export default App;
