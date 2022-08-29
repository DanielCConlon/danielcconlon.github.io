import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {



  return (
    <div>
      <Nav></Nav>
      <main>
        <Contact />
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <Skills />
    </div>
  );
}

export default App;
