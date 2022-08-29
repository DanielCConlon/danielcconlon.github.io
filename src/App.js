import React, {useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";


function App() {

const [pages] = useState([
  {
    name: 'About Me'
  },
  {
    name: 'Portfolio'
  },
  {
    name: 'Contact'
  },
  {
    name: 'Resume'
  },

]);

const [currentPage, setCurrentPage] = useState(pages[0]);
const [pageSelected, setPageSelected] = useState(false);


  return (
    <div>
      <Nav
        pages = {pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      ></Nav>

      <main>
        {!pageSelected ? (
          <>
            <About currentPage={currentPage} ></About>
          </>
        ) : (
          <>
            <Portfolio currentPage={currentPage} ></Portfolio>
            <Skills currentPage={currentPage} ></Skills>
          </>
        )}
      </main>
    </div>


  );
}

export default App;
