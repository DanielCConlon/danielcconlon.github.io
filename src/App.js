import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {



  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <Skills />
    </div>
  );
}

export default App;
