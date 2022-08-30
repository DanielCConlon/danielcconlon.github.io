import React, {useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


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

function renderPage() {
  switch(currentPage) {
    case pages[0]:
      return <About></About>
    case pages[1]:
      return <Portfolio></Portfolio>
    case pages[2]:
      return <Contact></Contact>
    case pages[3]:
      return <Resume></Resume>
    default:
      return <About> </About>
  }
}

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
        {renderPage()}
      </main>
      <Footer></Footer>
    </div>


  );
}

export default App;
